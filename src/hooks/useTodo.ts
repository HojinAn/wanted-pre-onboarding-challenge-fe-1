import { apiInstance } from '@/api';
import { API_ENDPOINT, API_URLS, QUERY_KEYS } from '@/constants';
import { TodoRequestType, TodoResponseType } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTodo = (todoInfo: TodoResponseType, closeFn:()=>void) => {
  const { id: todoId } = todoInfo;
  const client = useQueryClient();

  const getTodoById = () =>
    apiInstance()
      .get(API_ENDPOINT + API_URLS.todos + '/' + todoId)
      .then(({ data }) => data.data);

  const updateTodo = (todo: TodoRequestType) =>
    apiInstance()
      .put(API_ENDPOINT + API_URLS.todos + '/' + todoId, todo)
      .then(({ data }) => data.data);

  const deleteTodo = () =>
    apiInstance()
      .delete(API_ENDPOINT + API_URLS.todos + '/' + todoId)
      .then(({ data }) => data.data);

  const { mutate: mutateDeleteTodo } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      closeFn();
      client.removeQueries([QUERY_KEYS.todos, todoId]);
      client.invalidateQueries([QUERY_KEYS.todos]);
    },
  });
  const { mutate: mutateUpdateTodo } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.todos]);
    },
  });
  const {
    data: todoData,
    isLoading,
    isError,
  } = useQuery<TodoResponseType>([QUERY_KEYS.todos, todoId], {
    queryFn: getTodoById,
    enabled: !!todoId,
    initialData: todoInfo,
  });

  return { mutateDeleteTodo, mutateUpdateTodo, todoData, isLoading, isError };
};
