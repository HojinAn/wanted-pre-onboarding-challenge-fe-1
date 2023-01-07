import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { API_ENDPOINT, API_URLS, TOKEN } from '@/constants';
import { ROUTES } from '@/routes';
import { LoginForm, LoginSuccess } from '@/types';

export const useAuth = () => {
  const router = useRouter();

  const validateEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const postLogin = (form: LoginForm) =>
    axios.post(API_ENDPOINT + API_URLS.login, form).then(({ data }) => data);

  const postSignUp = (form: LoginForm) =>
    axios.post(API_ENDPOINT + API_URLS.signUp, form).then(({ data }) => data);

  const handleLoginSuccess = ({ message, token }: LoginSuccess) => {
    alert(message);
    localStorage.setItem(TOKEN, token);
    router.push(ROUTES.root);
  };

  const { mutate: mutateLogin } = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => {
      handleLoginSuccess(data);
    },
  });
  const { mutate: mutateSignUp } = useMutation({
    mutationFn: postSignUp,
    onSuccess: (data) => {
      handleLoginSuccess(data);
    },
  });

  return { validateEmail, validatePassword, mutateLogin, mutateSignUp };
};
