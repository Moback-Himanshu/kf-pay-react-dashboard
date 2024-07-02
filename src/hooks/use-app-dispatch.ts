import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';

// Use throughout our app instead of plain `useDispatch`
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
