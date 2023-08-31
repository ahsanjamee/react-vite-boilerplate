import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { joinClassNames } from '../../utils/helper';

type IModalProps = {
  form: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  width?: boolean;
};

const Modal = ({ isOpen, onClose, form, width }: IModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-0'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-0'
            >
              <Dialog.Panel
                className={joinClassNames(
                  width ? 'max-w-xl' : 'max-w-md',
                  'w-full transform overflow-hidden rounded-2xl bg-white px-6 py-7 text-left align-middle shadow-xl transition-all'
                )}
              >
                <div className='absolute right-0 top-0 hidden pr-4 pt-4 sm:block sm:visible'>
                  <div
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none cursor-pointer'
                    onClick={onClose}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </div>
                </div>
                {form}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
