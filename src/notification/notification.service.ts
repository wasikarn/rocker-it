import { Injectable } from '@nestjs/common';
import {
  EmailNotification,
  PushNotification,
  SmsNotification,
} from './notification.interface';

@Injectable()
export class NotificationService {
  sendEmail(notification: EmailNotification) {
    // Logic to send email notification
    console.log(`Sending email notification to ${notification.to}`);
  }

  sendSms(notification: SmsNotification) {
    // Logic to send SMS notification
    console.log(`Sending SMS notification to ${notification.phoneNumber}`);
  }

  sendPushNotification(notification: PushNotification) {
    // Logic to send push notification
    console.log(`Sending push notification to ${notification.userId}`);
  }
}
