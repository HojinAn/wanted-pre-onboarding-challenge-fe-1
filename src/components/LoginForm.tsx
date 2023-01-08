import { useEffect, useState } from 'react';
import { Stack, Button, TextField, Box } from '@mui/material';

import { useAuth, useForm } from '@/hooks';
import { LoginFormType } from '@/types';

export const LoginForm = () => {
  const { form, onFormChange, onSubmitForm } = useForm<LoginFormType>({
    email: '',
    password: '',
  });
  const { email, password } = form;
  const { validateEmail, validatePassword, mutateLogin } = useAuth();

  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(validateEmail(email) && validatePassword(password));
  }, [email, password, validateEmail, validatePassword]);

  return (
    <>
      <Box component={'h2'} sx={{ display: 'flex', justifyContent: 'center' }}>
        로그인
      </Box>
      <Stack component="form" onSubmit={onSubmitForm(mutateLogin)}>
        <TextField
          id="email-inp"
          label="이메일"
          variant="standard"
          type="email"
          name="email"
          required
          onChange={onFormChange}
        />
        <TextField
          id="password-inp"
          label="비밀번호"
          variant="standard"
          type="password"
          name="password"
          required
          onChange={onFormChange}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          disabled={!valid}
          type="submit"
        >
          제출
        </Button>
      </Stack>
    </>
  );
};
