import { toast } from 'react-toastify';
import i18n from '../../i18n';

const ToastConfig = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const ToastNotification = (msg: string, type: string) => {
  if (type === 'error') {
    toast.error(i18n.t(msg), ToastConfig);
  } else toast.success(i18n.t(msg), ToastConfig);
};

export default ToastNotification;
