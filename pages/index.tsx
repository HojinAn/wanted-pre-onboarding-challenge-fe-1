import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

import { ROUTES } from '@/routes';
import { TOKEN } from '@/constants';
import { TodoForm, TodoList } from '@/components';

export default function Home() {
  const [isOpenedTodoForm, setIsOpenedTodoForm] = useState(false);

  const toggleIsOpenedTodoForm = () => {
    setIsOpenedTodoForm(!isOpenedTodoForm);
  };

  return (
    <>
      <Button variant="contained" href={ROUTES.login} LinkComponent={Link}>
        로그인
      </Button>
      <Button variant="contained" href={ROUTES.signUp} LinkComponent={Link}>
        회원가입
      </Button>
      <Button
        variant="contained"
        onClick={() => localStorage.removeItem(TOKEN)}
      >
        로그아웃
      </Button>
      <Button onClick={toggleIsOpenedTodoForm}>할 일 추가</Button>

      {isOpenedTodoForm && <TodoForm />}
      <TodoList />
    </>
  );
}
