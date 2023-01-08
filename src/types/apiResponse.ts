type LoginSuccessType = {
  message: string;
  token: string;
};

type TodoResponseType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type { LoginSuccessType, TodoResponseType };
