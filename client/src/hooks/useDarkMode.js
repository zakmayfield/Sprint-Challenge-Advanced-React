import {  useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [newValue, setNewValue] = useLocalStorage('DARK_MODE')

  useEffect(() => {
    newValue ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [newValue])

  return [newValue, setNewValue]
}