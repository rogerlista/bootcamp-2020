import { Router } from 'express'
import multer from 'multer'
import { container } from 'tsyringe'
import { celebrate, Segments, Joi } from 'celebrate'

import uploadConfig from '@config/upload'

import UsersController from '../controllers/UsersController'
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()
const usersController = new UsersController()
const upload = multer(uploadConfig)

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
)

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService)

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    })

    delete user.password

    return response.json(user)
  },
)

export default usersRouter
