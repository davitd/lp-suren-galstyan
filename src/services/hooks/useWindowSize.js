import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [width, setWindowSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
