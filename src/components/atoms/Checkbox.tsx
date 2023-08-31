import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type ICheckboxProps = {
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | React.ReactNode;
  control?: any;
  name?: string;
  errors?: any;
};

const CheckboxButton: React.FC<ICheckboxProps> = ({ defaultChecked, onChange, label, control, name, errors }) => {
  const { t } = useTranslation();
  return (
    <>
      {control ? (
        <Controller
          control={control}
          name={name as string}
          render={({ field: { value, onChange } }) => (
            <div className='mt-4 flex w-fit items-start '>
              <input
                className={`${
                  value ? 'bg-brand-primary' : 'bg-white'
                } cursor-pointer mt-1 h-4 w-4 border border-brand-light  text-red-600 accent-brand-primary focus:outline-none focus:ring-transparent`}
                type='checkbox'
                id={name}
                checked={value || defaultChecked}
                onChange={onChange}
              />
              <label className='font-15 ml-2 text-base font-medium text-brand-textColor'>{label}</label>
            </div>
          )}
        />
      ) : (
        <div className='mt-4 flex w-fit items-start justify-center cursor-pointer'>
          <input
            className='mt-1 h-4 w-4 border border-brand-light bg-white text-red-600 accent-brand-primary focus:outline-none focus:ring-transparent'
            type='checkbox'
            id={name}
            checked={defaultChecked}
            onChange={onChange}
          />
          <label className='font-15 ml-2 mt-1 text-sm font-medium text-brand-textColor'>{t(label as string)}</label>
        </div>
      )}
      {errors ? (
        <div className='mt-1 text-xs text-red-500'>{t(errors?.message)}</div>
      ) : (
        <div className='p-[10px]'></div>
      )}
    </>
  );
};

export default CheckboxButton;
