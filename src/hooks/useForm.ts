import { ChangeEvent, useState } from 'react';
import { LoginForm } from '@/types';

export const useForm = () => {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });

  const onFormChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = event;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return { form, onFormChange };
};
