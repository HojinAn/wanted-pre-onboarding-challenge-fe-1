import { Stack, Button, TextField, Container, Box } from '@mui/material';
import { useAuth, useForm } from '@/hooks';
import { useEffect, useState } from 'react';

const Login = () => {
  const { form, onFormChange } = useForm();
  const { email, password } = form;
  const { validateEmail, validatePassword } = useAuth();

  const [valid, setValid] = useState(false);

  useEffect(() => {
    setValid(validateEmail(email) && validatePassword(password));
  }, [email, password, validateEmail, validatePassword]);

  return (
    <Container maxWidth="sm">
      <Box component={'h2'} sx={{ display: 'flex', justifyContent: 'center' }}>
        로그인
      </Box>
      <Stack component="form">
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
        <Button variant="contained" sx={{ mt: 2 }} disabled={!valid}>
          제출
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
