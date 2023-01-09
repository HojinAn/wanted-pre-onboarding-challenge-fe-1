import { apiInstance } from '@/api';
import { API_ENDPOINT, API_URLS, QUERY_KEYS } from '@/constants';
import { TodoRequestType, TodoResponseType } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useTodos = () => {
  const client = useQueryClient();

  const getTodos = () =>
    apiInstance()
      .get(API_ENDPOINT + API_URLS.todos)
      .then(({ data }) => data.data);

  const createTodo = (todo: TodoRequestType) =>
    apiInstance()
      .post(API_ENDPOINT + API_URLS.todos, todo)
      .then(({ data }) => data.data);

  const { data: todoDatas } = useQuery<TodoResponseType[]>([QUERY_KEYS.todos], {
    queryFn: getTodos,
  });

  const { mutate: mutateTodo } = useMutation({
    mutationFn: createTodo,
    onSuccess: (data) => {
      client.setQueryData([QUERY_KEYS.todos, data.id], data);
      client.invalidateQueries([QUERY_KEYS.todos]);
    },
  });

  return { todoDatas, mutateTodo };
};
