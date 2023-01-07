import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);

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
