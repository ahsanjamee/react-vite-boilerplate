import { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

type InputProps = {
  placeholder?: string;
  label: string | React.ReactNode;
  control?: any;
  name: string;
  errors?: any;
  required?: boolean;
};

export const DateInput: FC<InputProps> = ({ label, control, name, errors, placeholder, required }) => {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
      <label className='mb-2 text-sm font-semibold'>
        {label as string}
        {required ? <span className='text-brand-red'>*</span> : null}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <ReactDatePicker
            placeholderText={placeholder}
            onChange={onChange}
            selected={value}
            className={`mt-1 block h-12 rounded-lg w-full border border-zinc-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
          focus:border-gray-400 focus:outline-none
            ${errors ? 'border-red-300' : 'border-slate-300'}
            disabled:text-slate-500 disabled:shadow-none`}
          />
        )}
      />
      {errors ? (
        <div className='mt-1 mb-2 text-xs text-red-500'>{errors?.message}</div>
      ) : (
        <div className='p-[14px]'></div>
      )}
    </div>
  );
};
