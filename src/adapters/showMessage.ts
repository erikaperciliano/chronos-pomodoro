import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  eror: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dissmiss: () => toast.dismiss(),
};
