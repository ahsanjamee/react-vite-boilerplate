import type React from 'react';
import { useTranslation } from 'react-i18next';

type ITextareaProps = {
  placeholder?: string;
  label?: string;
  rows?: number;
  value?: any;
  name?: string;
  maxlength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onPaste?: (e: any) => void;
  register?: any;
  errors?: any;
  defaultValue?: string;
  required?: boolean;
};

const Textarea: React.FC<ITextareaProps> = ({
  placeholder,
  label,
  rows,
  value,
  name,
  maxlength,
  onChange,
  onBlur,
  register,
  errors,
  defaultValue,
  onPaste,
  required,
}) => {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <label className='mb-2 text-sm font-semibold'>
        {t(label as string)}
        {required ? <span className='text-brand-red'>*</span> : null}
      </label>
      {register ? (
        <textarea
          onChange={onChange}
          rows={rows}
          name={name}
          {...register(`${name}`)}
          className={`mt-1 block rounded-lg w-full border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
          focus:border-gray-400 focus:outline-none
            ${errors ? 'border-red-300' : 'border-slate-300'}
            disabled:text-slate-500 disabled:shadow-none`}
          placeholder={t(placeholder as string)}
          onBlur={onBlur}
          onPaste={onPaste}
          maxLength={maxlength}
          defaultValue={defaultValue}
        />
      ) : (
        <textarea
          onChange={onChange}
          rows={rows}
          className={`mt-1 block rounded-lg w-full border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
          focus:border-gray-400 focus:outline-none
            ${errors ? 'border-red-300' : 'border-slate-300'}
            disabled:text-slate-500 disabled:shadow-none`}
          placeholder={t(placeholder as string)}
          onBlur={onBlur}
          onPaste={onPaste}
          value={value}
          maxLength={maxlength}
        />
      )}
      {errors ? (
        <div className='mt-1 mb-2 text-xs text-red-500'>{t(errors?.message)}</div>
      ) : (
        <div className='p-[14px]'></div>
      )}
    </div>
  );
};

export default Textarea;
