import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';

import { useTodo } from '@/hooks';
import { TodoResponseType } from '@/types';
import { TodoForm } from '@/components';

export const TodoDetail = ({
  todoInfo,
  closeFn,
}: {
  todoInfo: TodoResponseType;
  closeFn: () => void;
}) => {
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false);
  const { mutateDeleteTodo, mutateUpdateTodo, todoData, isLoading, isError } =
    useTodo(todoInfo, closeFn);

  const toggleTodoForm = () => setIsTodoFormOpen(!isTodoFormOpen);

  return (
    <Grid item xs={12} md={6}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error</Typography>
      ) : isTodoFormOpen ? (
        <TodoForm
          defaultForm={todoData}
          mutateFn={(form) => {
            mutateUpdateTodo(form);
            toggleTodoForm();
          }}
        />
      ) : (
        <>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
            {todoData?.title}
          </Typography>
          <Typography>{todoData?.content}</Typography>
          <Typography>{todoData?.createdAt}</Typography>
          <Typography>{todoData?.updatedAt}</Typography>
        </>
      )}
      <Button onClick={toggleTodoForm}>수정</Button>
      <Button onClick={() => mutateDeleteTodo()}>삭제</Button>
    </Grid>
  );
};
