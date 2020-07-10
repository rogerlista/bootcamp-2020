import ICreateNotificationDTO from '../dtos/ICreateNotificationDTO'
import Notification from '../infra/typeorm/shcemas/notification'

export default interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>
}
