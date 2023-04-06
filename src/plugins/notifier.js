const SEC = 1000;
const MESSAGE_LIVE_TIME = 30 * SEC;

// notification = {
//   type: ["success", "error", "error-popup"],
//   heading: String, //заголовок
//   comment: String, //Текст под заголовком
//   details: [{ //Массив с данными для таблицы
//     name: String, //Имя строки таблицы
//     value: String, //Значение строки таблицы
//     isHighlight: Boolean, //true, если нужно выделить значение зеленым и жирным
//   }],
//   button: String, //Текст на кнопке
//   route: String, /Роут, если нажатие на кнопку должно куда-то перенаправлять
// };

export default class Notifier {
  _useStore;
  constructor(useStore) {
    this._useStore = useStore;
  }

  success(notification, messageLiveTime = MESSAGE_LIVE_TIME) {
    this._useStore().createNotification({
      ...notification,
      messageLiveTime,
      type: 'success',
    });
  }

  error(notification, messageLiveTime = MESSAGE_LIVE_TIME) {
    this._useStore().createNotification({
      ...notification,
      messageLiveTime,
      type: 'error',
    });
  }

  errorPopup(notification, messageLiveTime = MESSAGE_LIVE_TIME) {
    this._useStore().createNotification({
      ...notification,
      messageLiveTime,
      type: 'error-popup',
    });
  }
}
