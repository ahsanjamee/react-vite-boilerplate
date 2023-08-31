import type React from 'react';
import type { HTMLInputTypeAttribute } from 'react';
import { useTranslation } from 'react-i18next';
import { HidePassIcon, ShowPassIcon } from './Icons';

type Props = {
  type: HTMLInputTypeAttribute;
  label?: string;
  name: string;
  placeholder?: string;
  register?: any;
  errors?: any;
  defaultValue?: string;
  disabled?: boolean;
  maxLength?: number;
  required?: boolean;
  showPass?: boolean;
  showIcon?: boolean;
  forgotpass?: boolean;
  setShowPass?: (val: boolean) => void;
};

const Input: React.FC<Props> = ({
  type = 'text',
  label,
  name,
  placeholder,
  register,
  errors,
  defaultValue,
  disabled,
  maxLength,
  required,
  showIcon,
  showPass,
  forgotpass,
  setShowPass,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col items-start justify-center w-full ${forgotpass ? '' : 'relative'}`}>
      <label className='mb-2 text-sm font-semibold'>
        {t(label as string)}
        {required ? <span className='text-brand-red'>*</span> : null}
      </label>
      {register ? (
        <input
          type={type}
          {...register(`${name}`)}
          autoComplete='off'
          maxLength={maxLength}
          className={`mt-1 block h-12 rounded-lg w-full border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
             focus:outline-none
              ${errors ? 'border-red-300' : 'border-slate-300'}
              disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed disabled:bg-gray-200`}
          placeholder={t(placeholder as string)}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          autoComplete='off'
          className={`mt-1 block h-12 rounded-lg w-full border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
           focus:outline-none
            ${errors ? 'border-red-300' : 'border-slate-300'}
            disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed disabled:bg-gray-200`}
          placeholder={t(placeholder as string)}
          maxLength={maxLength}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      )}
      {errors ? (
        <div className='mt-1 mb-2 text-xs text-red-500'>{t(errors?.message)}</div>
      ) : (
        <div className='p-[14px]'></div>
      )}

      {showIcon && (
        <div className='absolute top-[44px] right-[16px] cursor-pointer' onClick={() => setShowPass?.(!showPass)}>
          {showPass ? <ShowPassIcon /> : <HidePassIcon />}
        </div>
      )}
    </div>
  );
};

export default Input;
