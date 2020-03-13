import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('Dark Mode', initialValue);

    useEffect(() => {
        value ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    },[value]);

    return [value, setValue];
};

export default useDarkMode;