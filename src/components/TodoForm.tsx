import React from 'react';
import { Stack, TextField, Button, Box } from '@mui/material';

import { useForm, useTodos } from '@/hooks';
import { TodoRequestType } from '@/types';

export const TodoForm = () => {
  const { mutateTodo } = useTodos();
  const { onFormChange, form, onSubmitForm } = useForm<TodoRequestType>({
    title: '',
    content: '',
  });
  const { title, content } = form;

  return (
    <>
      <Box component={'h3'} sx={{ display: 'flex', justifyContent: 'center' }}>
        Todo 작성
      </Box>
      <Stack component="form" onSubmit={onSubmitForm(mutateTodo)}>
        <TextField
          label="할일"
          variant="standard"
          name="title"
          onChange={onFormChange}
          value={title}
        />
        <TextField
          id="password-inp"
          label="내용"
          variant="standard"
          name="content"
          onChange={onFormChange}
          value={content}
          multiline
        />
        <Button variant="contained" sx={{ mt: 2 }} type="submit">
          제출
        </Button>
      </Stack>
    </>
  );
};
