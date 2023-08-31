import { useTranslation } from 'react-i18next';
type IRadioProps = {
  name: string;
  data: Array<{
    value: string | boolean;
    label: string | React.ReactNode;
  }>;
  register: any;
  errors: any;
  label: string;
  required: boolean;
};

const RadioButton: React.FC<IRadioProps> = ({ data, register, name, errors, label, required }) => {
  const { t } = useTranslation();
  return (
    <div>
      <label className='mb-4 text-sm font-semibold'>
        {t(label as string)}
        {required ? <span className='text-brand-red'>*</span> : null}
      </label>
      {data.map((datum) => (
        <label key={datum.label as string} className='w-fit cursor-pointer'>
          <div className='mt-2'>
            <input className='cursor-pointer mr-3' type='radio' value={datum.value} {...register(`${name}`)} />
            {t(datum.label as string)}
          </div>
        </label>
      ))}
      {errors ? (
        <div className='mt-1 text-xs text-red-500'>{t(errors?.message)}</div>
      ) : (
        <div className='p-[10px]'></div>
      )}
    </div>
  );
};

export default RadioButton;
