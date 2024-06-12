import { useEffect } from 'react';

export default function MyImage5() {
  useEffect(() => {
    const img = new Image();
    img.src = '/bg3.jpg';
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
      src='/bg3.jpg'
      alt='Background Img'
    />
  );
}
