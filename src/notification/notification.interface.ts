export interface EmailNotification {
  to: string;
  subject: string;
  body: string;
}

export interface SmsNotification {
  phoneNumber: string;
  message: string;
}

export interface PushNotification {
  userId: string;
  title: string;
  body: string;
}
