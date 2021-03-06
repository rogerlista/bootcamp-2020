import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository'
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider'
import ListProviderAppointmentsService from './ListProviderAppointmentsService'

let fakeAppointmentsRepository: FakeAppointmentsRepository
let fakeCacheProvider: FakeCacheProvider
let listProviderAppointments: ListProviderAppointmentsService

describe('ListProviderAppointmentsService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository()
    fakeCacheProvider = new FakeCacheProvider()

    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointmentsRepository,
      fakeCacheProvider,
    )
  })

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user_id',
      date: new Date(2020, 7, 12, 14, 0, 0),
    })

    const appointment2 = await fakeAppointmentsRepository.create({
      provider_id: 'provider_id',
      user_id: 'user_id',
      date: new Date(2020, 7, 12, 15, 0, 0),
    })

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider_id',
      year: 2020,
      month: 8,
      day: 12,
    })

    expect(appointments).toEqual(
      expect.arrayContaining([appointment1, appointment2]),
    )
  })
})
