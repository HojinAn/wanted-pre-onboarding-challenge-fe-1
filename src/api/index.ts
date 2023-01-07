import { TOKEN } from '@/constants';
import axios from 'axios';

export const apiInstance = () => axios.create({
  headers: {
    Authorization: localStorage.getItem(TOKEN),
  },
});
