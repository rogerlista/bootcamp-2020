import { getCustomRepository } from 'typeorm'
import { startOfHour } from 'date-fns'

import AppError from '@shared/errors/AppError'
import Appointment from '../infra/typeorm/entities/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface IRequest {
  provider_id: string
  date: Date
}

class CreateAppointmentService {
  public async execute({ provider_id, date }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date)
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(appointmentDate)

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked')
    }

    const appointment = await appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
