import React from 'react';
import { Stack, TextField, Button, Box } from '@mui/material';

import { useForm } from '@/hooks';
import { TodoRequestType } from '@/types';

export const TodoForm = ({
  defaultForm = {
    title: '',
    content: '',
  },
  mutateFn,
}: {
  defaultForm?: TodoRequestType;
  mutateFn: (form: TodoRequestType) => void;
}) => {
  const { onFormChange, form, onSubmitForm } =
    useForm<TodoRequestType>(defaultForm);
  const { title, content } = form;

  return (
    <>
      <Box component={'h3'} sx={{ display: 'flex', justifyContent: 'center' }}>
        Todo 작성
      </Box>
      <Stack component="form" onSubmit={onSubmitForm(mutateFn)}>
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
        />
        <Button variant="contained" sx={{ mt: 2 }} type="submit">
          제출
        </Button>
      </Stack>
    </>
  );
};
