import { useEffect } from 'react';

export default function MyImage6() {
  useEffect(() => {
    const img = new Image();
    img.src = '/file.png';
  }, []);

  return (
    <img
      style={{
        width: '100%',
        height: '100%',
        opacity: 0.1,
        userSelect: 'none',
        MozUserSelect: 'none',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        cursor: 'default'
      }}
      src='/file.png'
      alt='Download Invoice'
    />
  );
}
