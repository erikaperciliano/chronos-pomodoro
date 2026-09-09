import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export function useTaskContex() {
  return useContext(TaskContext);
}
