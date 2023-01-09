import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

import { ROUTES } from '@/routes';
import { TodoList } from '@/components';
import { useAuth } from '@/hooks';

export default function Home() {
  const { handleLogout } = useAuth();

  return (
    <>
      <Button variant="contained" href={ROUTES.login} LinkComponent={Link}>
        로그인
      </Button>
      <Button variant="contained" href={ROUTES.signUp} LinkComponent={Link}>
        회원가입
      </Button>
      <Button variant="contained" onClick={handleLogout}>
        로그아웃
      </Button>

      <TodoList />
    </>
  );
}
