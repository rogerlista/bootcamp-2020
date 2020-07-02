import { Router } from 'express'

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import passwordRouter from '@modules/users/infra/http/routes/password.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes'

const routes = Router()

routes.use('/sessions', sessionsRouter)
routes.use('/password', passwordRouter)
routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)

export default routes
