import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notification from '~/components/commons/Notification';

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

class NotifyService {
  success(title: string, message: string): void {
    toast.success(<Notification title={title} message={message} />, defaultOptions);
  }

  warning(title: string, message: string): void {
    toast.warning(<Notification title={title} message={message} />, defaultOptions);
  }

  error(title: string, message: string): void {
    toast.error(<Notification title={title} message={message} />, defaultOptions);
  }

  info(title: string, message: string): void {
    toast.info(<Notification title={title} message={message} />, defaultOptions);
  }
}

const notifyService = new NotifyService();
export default notifyService;
