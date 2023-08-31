import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  type?: 'primary' | 'secondary' | 'brown';
  children: ReactNode;
  onClick?: (e?: any) => void;
  isBlock?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: 'INTERNAL' | '_self' | '_blank' | '_parent' | '_top' | undefined;
  width?: string;
  buttonType?: 'button' | 'reset' | 'submit' | undefined;
}

const padding = 'px-20 py-4';

const fontSize = 'text-sm lg:text-base';

const color = {
  primary: 'text-white',
  secondary: 'text-brand-primary',
  brown: 'text-white',
};

const backgroundColors = {
  primary:
    'bg-brand-primary hover:bg-brand-dark leading-normal shadow-md transition duration-150 ease-in-out active:bg-brand-secondary active:shadow-lg',
  secondary:
    'bg-brand-white hover:bg-brand-primary hover:text-white leading-normal shadow-md transition duration-150 ease-in-out active:bg-brand-primary active:shadow-lg',
  brown:
    'bg-brand-brown hover:bg-brand-brown/80 leading-normal shadow-md transition duration-150 ease-in-out active:bg-brand-brown/80 active:shadow-lg',
};

const border = {
  primary: 'border border-brand-primary',
  secondary: 'border border-brand-primary',
  brown: 'border border-brand-brown',
};

const Button = ({
  type = 'primary',
  children,
  onClick,
  className = '',
  disabled = false,
  href,
  target = 'INTERNAL',
  isBlock = false,
  width,
  buttonType,
}: Props): JSX.Element => {
  const disabledStyle = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'transition ease-in-out duration-300 hover:cursor-pointer';

  let baseClasses = [
    'rounded-full',
    fontSize,
    'font-bold',
    border[type],
    backgroundColors[type],
    color[type],
    padding,
    disabledStyle,
    'flex',
    'justify-center',
    'whitespace-nowrap',
  ];

  if (className) {
    baseClasses = [...baseClasses, ...className.split(' ')];
  }
  if (isBlock) {
    baseClasses = [...baseClasses, 'block w-full'];
  }
  if (width) {
    baseClasses = [...baseClasses, width];
  }

  if (href) {
    const linkClasses = [...baseClasses];

    return target === 'INTERNAL' ? (
      <Link to={href} onClick={onClick} className={linkClasses.join(' ')}>
        {children}
      </Link>
    ) : (
      <a href={href} onClick={onClick} className={linkClasses.join(' ')}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses.join(' ')} disabled={disabled} type={buttonType}>
      {children}
    </button>
  );
};

export default Button;
