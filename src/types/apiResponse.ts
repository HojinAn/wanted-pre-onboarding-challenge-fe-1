type LoginSuccess = {
  message: string;
  token: string;
};

type TodoResponse = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type { LoginSuccess, TodoResponse };
