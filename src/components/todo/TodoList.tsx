import React, { useState } from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

import { useTodos } from '@/hooks';
import { TodoDetail } from './TodoDetail';
import { TodoResponseType } from '@/types';

export const TodoList = () => {
  const { todoDatas } = useTodos();
  const [isOpenedTodoDetail, setIsOpenedTodoDetail] = useState(false);
  const [todo, setTodo] = useState<TodoResponseType | null>(null);

  const resetTodoDetail = () => {
    setIsOpenedTodoDetail(false);
    setTodo(null);
  };

  const handleTodoDetail = (todoData: TodoResponseType) => () => {
    setTodo(todoData);
    todo?.id === todoData.id ? resetTodoDetail() : setIsOpenedTodoDetail(true);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
          Todo List
        </Typography>
        <List>
          {todoDatas?.map((todoData) => {
            const { id, title, content } = todoData;
            return (
              <ListItem key={id} onClick={handleTodoDetail(todoData)}>
                <ListItemText primary={title} />
                <ListItemText primary={content} />
              </ListItem>
            );
          })}
        </List>
      </Grid>
      {isOpenedTodoDetail && !!todo && (
        <TodoDetail todoInfo={todo} closeFn={resetTodoDetail} />
      )}
    </Grid>
  );
};
