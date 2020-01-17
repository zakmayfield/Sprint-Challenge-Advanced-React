import {  useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [newValue, setNewValue] = useLocalStorage('DARK_MODE')

  useEffect(() => {
    newValue ? document.getElementById('appSub').classList.add('dark-mode') : document.getElementById('appSub').classList.remove('dark-mode')
  }, [newValue])

  return [newValue, setNewValue]
}