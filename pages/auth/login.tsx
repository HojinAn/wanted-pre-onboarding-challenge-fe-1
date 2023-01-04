import { Stack, Button, TextField, Container, Box } from '@mui/material';
import { useForm } from '@/hooks';
import { useEffect } from 'react';

const Login = () => {
  const { form, onFormChange } = useForm();

  useEffect(() => {
    console.log(form);
  });

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
        <Button variant="contained" sx={{ mt: 2 }}>
          제출
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
