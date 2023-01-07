export const useAuth = () => {
  const validateEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  return { validateEmail, validatePassword };
};
