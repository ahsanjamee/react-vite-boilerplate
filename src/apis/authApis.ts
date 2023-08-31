import ToastNotification from '../components/atoms/Toast';
import { LoginPayload } from '../types/auth';
import httpServices from './httpServices';

export const login = async (data: LoginPayload) => {
  const res = await httpServices.post('auth/login/email', data);
  if (!res.data.success) {
    ToastNotification(res.data.message, 'error');
    throw new Error(res.data.message);
  }
  return res.data;
};
