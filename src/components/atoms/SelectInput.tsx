import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { clsx } from 'clsx';

type ISelectInputProps = {
  defaultValue?: {
    value: string;
    label: string;
  };
  label?: string | React.ReactNode;
  control?: any;
  name: string;
  errors?: any;
  required?: boolean;
  data: {
    value: string;
    label: string;
  }[];
  index?: number;
};

const controlStyles = {
  base: 'border rounded-lg bg-white hover:cursor-pointer w-full h-12 mt-3',
  focus: 'border-brand-primary ring-1 ring-brand-primary',
  nonFocus: 'border-zinc-300 hover:border-gray-400',
};
const placeholderStyles = 'text-gray-400 pl-1 py-0.5 text-sm';
const selectInputStyles = 'w-full pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-gray-100 active:bg-gray-200',
  // eslint-disable-next-line quotes
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles = 'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-gray-300';
const dropdownIndicatorStyles = 'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border border-gray-200 bg-white rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';

const SelectInput: React.FC<ISelectInputProps> = ({ label, control, name, errors, required, data, index }) => {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
      {label && (
        <label className='mb-2 text-sm font-semibold'>
          {label as string}
          {required ? <span className='text-brand-red'>*</span> : null}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            options={data}
            value={data.find((c) => c.value === value)}
            onChange={(val) => onChange(val?.value)}
            placeholder='Velg skadeområde'
            unstyled
            autoFocus
            className='w-full'
            styles={{
              input: (base) => ({
                ...base,
                'input:focus': {
                  boxShadow: 'none',
                },
              }),
            }}
            classNames={{
              control: ({ isFocused }) =>
                clsx(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
              placeholder: () => placeholderStyles,
              input: () => selectInputStyles,
              valueContainer: () => valueContainerStyles,
              singleValue: () => singleValueStyles,
              indicatorsContainer: () => indicatorsContainerStyles,
              clearIndicator: () => clearIndicatorStyles,
              indicatorSeparator: () => indicatorSeparatorStyles,
              dropdownIndicator: () => dropdownIndicatorStyles,
              menu: () => menuStyles,
              groupHeading: () => groupHeadingStyles,
              option: ({ isFocused, isSelected }) =>
                clsx(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
            }}
          />
        )}
      />
      {errors ? (
        <div className='mt-1 mb-2 text-xs text-red-500'>{errors[index as number]?.area?.message}</div>
      ) : (
        <div className='p-[14px]'></div>
      )}
    </div>
  );
};

export default SelectInput;
