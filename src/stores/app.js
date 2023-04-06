import { defineStore } from 'pinia';
import uniqueId from 'lodash-es/uniqueId.js';

export const useAppStore = defineStore('app', {
  state: () => ({
    notifications: [],
    loaders: [],
  }),
  actions: {
    async createNotification({ ...notification }) {
      const uniqueNotification = {
        ...notification,
        id: uniqueId(),
      };
      this.notifications.push(uniqueNotification);
      if (notification.messageLiveTime) {
        setTimeout(
          () => this.deleteNotification(uniqueNotification.id),
          notification.messageLiveTime,
        );
      }
    },
    deleteNotification(id) {
      this.notifications = this.notifications.filter(
        (notification) => notification.id !== id,
      );
    },
  },
});
