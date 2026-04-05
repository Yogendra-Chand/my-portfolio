import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (dot.current)  { dot.current.style.left  = e.clientX + 'px'; dot.current.style.top  = e.clientY + 'px'; }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px'; }
    };
    const onOver = (e) => {
      const hoverable = e.target.closest('a, button, [data-hover]');
      ring.current?.classList.toggle('expand', !!hoverable);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseover', onOver); };
  }, []);

  return (
    <>
      <div ref={dot}  className="cur-dot" />
      <div ref={ring} className="cur-ring" />
    </>
  );
}