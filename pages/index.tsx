import Link from 'next/link';
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { useForm, useTodos } from '@/hooks';
import { ROUTES } from '@/routes';
import { TodoRequest } from '@/types';
import { TOKEN } from '@/constants';

export default function Home() {
  const { todoDatas, mutateTodo } = useTodos();
  const { onFormChange, form, initializeForm } = useForm<TodoRequest>({
    title: '',
    content: '',
  });

  const { title, content } = form;

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
      <Stack component="form">
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
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {
            mutateTodo(form);
            initializeForm();
          }}
        >
          제출
        </Button>
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Todo List
          </Typography>
          <List>
            {todoDatas?.map((todo) => {
              const { id, title, content } = todo;
              return (
                <ListItem key={id} onClick={() => {}}>
                  <ListItemText primary={title} />
                  <ListItemText primary={content} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </>
  );
}
