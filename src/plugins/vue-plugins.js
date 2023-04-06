import { useAppStore } from '/src/stores/app.js';
import Notifier from './notifier';
import dayjs from 'dayjs';

export default function (app) {
  app.config.globalProperties.$notifier = new Notifier(useAppStore);
  app.config.globalProperties.$dayjs = dayjs;
}
