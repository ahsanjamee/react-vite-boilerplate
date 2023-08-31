import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import OtpInput from 'react-otp-input';

type IOtpInputsProps = {
  label?: string;
  name: string;
  errors?: any;
  control?: any;
  numInputs: number;
  border?: boolean;
  defaultValue?: string;
  autoFocus?: boolean;
  placeholder?: string;
};

const OtpInputs: React.FC<IOtpInputsProps> = ({
  label,
  border,
  name,
  errors,
  control,
  numInputs,
  defaultValue,
  placeholder,
  autoFocus,
}) => {
  const { t } = useTranslation();
  return (
    <div className='otp-wrapper'>
      {label && <label>{t(label)}</label>}
      <div
        className={`${defaultValue ? 'pointer-events-none ' : ' '}  ${
          border ? 'border border-brand-primary pb-2.5 pr-2.5 border-l-0 rounded-e-md' : ''
        } bg-white `}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <OtpInput
              value={defaultValue || value}
              shouldAutoFocus={autoFocus}
              placeholder={placeholder}
              onChange={onChange}
              numInputs={numInputs}
              inputStyle='otp-input-class'
              renderInput={(props) => <input {...props} />}
            />
          )}
        />
      </div>
      {errors ? (
        <div className='mt-1 ml-2.5 text-xs text-red-500 error-box'>{t(errors?.message)}</div>
      ) : (
        <div className='p-[10px]'></div>
      )}
    </div>
  );
};

export default OtpInputs;
