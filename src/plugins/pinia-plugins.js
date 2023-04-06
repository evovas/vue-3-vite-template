import Notifier from '/src/plugins/notifier.js';
import { useAppStore } from '/src/stores/app.js';
const notifier = new Notifier(useAppStore);

export default function ({ store }) {
  store.$notifier = notifier;
}
