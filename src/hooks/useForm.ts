import { ChangeEvent, FormEvent, useState } from 'react';

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

  const initializeForm = () => {
    setForm(initialForm);
  };

  const onSubmitForm = (mutateFn: Function) => (e: FormEvent) => {
    e.preventDefault();
    mutateFn(form);
    initializeForm();
  };

  return { form, onFormChange, onSubmitForm };
};
