import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

import { useTodo } from '@/hooks';
import { TodoResponseType } from '@/types';

export const TodoDetail = ({
  todoInfo,
  closeFn,
}: {
  todoInfo: TodoResponseType;
  closeFn: () => void;
}) => {
  const { mutateDeleteTodo, mutateUpdateTodo, todoData, isLoading, isError } =
    useTodo(todoInfo);

  return (
    <Grid item xs={12} md={6}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : isError ? (
        <Typography>Error</Typography>
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
      <Button onClick={() => {}}>수정</Button>
      <Button onClick={() => {}}>삭제</Button>
    </Grid>
  );
};
