import { useEffect, useRef } from 'react';

type IProps = {
  show: boolean;
  onClickOutside: () => void;
  children: React.ReactNode;
};

const UseClickOutsideListener: React.FC<IProps> = ({ show, onClickOutside, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!show) return null;

  return (
    <div ref={ref} className='info-box'>
      {children}
    </div>
  );
};

export default UseClickOutsideListener;
