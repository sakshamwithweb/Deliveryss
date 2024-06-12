import { useEffect } from 'react';

export default function MyImage() {
  useEffect(() => {
    const img = new Image();
    img.src = '/imgg.jpeg';
  }, []);

  return (<img style={{ width: '100%', height: '100%', opacity: 0.1,userSelect: 'none', MozUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none'}} src='/imgg.jpeg' alt='Background Img'/>
)
}