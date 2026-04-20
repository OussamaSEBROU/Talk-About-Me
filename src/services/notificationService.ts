import PushNotification from 'react-native-push-notification';
import i18n from '../i18n';

class NotificationService {
  configure() {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
      },
      requestPermissions: true,
    });
  }

  scheduleHourlyNotifications() {
    // Clear existing notifications
    PushNotification.cancelAllLocalNotifications();

    const messages = {
      en: "Keep their memory alive. Talk about them today.",
      ar: "أبقِ ذكراهم حية. تحدث عنهم اليوم.",
      fr: "Gardez leur mémoire vivante. Parlez d'eux aujourd'hui.",
      es: "Mantén viva su memoria. Habla de ellos hoy.",
    };

    const currentLang = i18n.language as keyof typeof messages;
    const message = messages[currentLang] || messages.en;

    PushNotification.localNotificationSchedule({
      title: i18n.t('app_name'),
      message: message,
      date: new Date(Date.now() + 60 * 60 * 1000), // Next hour
      repeatType: 'hour',
      allowWhileIdle: true,
    });
  }
}

export default new NotificationService();
