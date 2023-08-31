import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { headerMenu } from '../../data/Constants';
import { Button } from '../atoms';
import { MainLogo } from '../atoms/Icons';
import LoginModal from './auth/LoginModal';
import { useAppDispatch } from '../../store/reduxHooks';
import { setVisibility } from '../../store/slices/chatSlice';

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('access-token');
  const dispatch = useAppDispatch();

  return (
    <>
      <LoginModal />
      <header className='bg-white  border-b-[1px] border-brand-border'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <div onClick={() => (window.location.href = '/')} className='-m-1.5 p-1.5 cursor-pointer'>
              <span className='sr-only'>Autoformilding</span>
              <MainLogo />
            </div>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {headerMenu.map((item) => (
              <div
                onClick={() => (window.location.href = item.to)}
                key={item.name}
                className={`text-[15px] font-medium leading-6 py-[8px] transition text-brand-textColor cursor-pointer border-b-[3px] border-transparent hover:border-brand-primary ${
                  location.pathname === item.to ? 'border-b-2 border-brand-primary' : ''
                }`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className='lg:flex flex-1 items-center justify-end gap-x-6 hidden'>
            {isLoggedIn ? (
              <div
                className='text-[15px] font-medium leading-6 text-brand-textColor cursor-pointer'
                onClick={() => navigate('/user/profile')}
              >
                {t('Min konto')}
              </div>
            ) : (
              <div
                className='text-[15px] font-medium leading-6 text-brand-textColor cursor-pointer'
                onClick={() => {
                  localStorage.setItem('show-login', 'show');
                  window.dispatchEvent(new Event('storage'));
                }}
              >
                {t('Logg inn')}
              </div>
            )}
            <Button
              className='px-7 pb-2.5 pt-2.5 rounded-none font-semibold'
              onClick={() => (window.location.href = '/')}
            >
              {t('Selg bil')}
            </Button>
          </div>

          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-10' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between gap-x-6'>
              <div onClick={() => (window.location.href = '/')} className='-m-1.5 p-1.5 sm:hidden'>
                <span className='sr-only'>Autoformilding</span>
                <MainLogo />
              </div>

              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-6 py-6 mb-2'>
                  {headerMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className=''>
                    {isLoggedIn ? (
                      <div
                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer'
                        onClick={() => navigate('/user/profile')}
                      >
                        {t('Min konto')}
                      </div>
                    ) : (
                      <div
                        className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer'
                        onClick={() => {
                          localStorage.setItem('show-login', 'show');
                          window.dispatchEvent(new Event('storage'));
                        }}
                      >
                        {t('Logg inn')}
                      </div>
                    )}
                    <Button
                      className='rounded-none font-semibold mt-5 px-[50px]'
                      onClick={() => {
                        dispatch(setVisibility('maximized'));
                      }}
                    >
                      Begynn å chatte
                    </Button>
                  </div>
                </div>
                <Button className='rounded-none font-semibold' onClick={() => (window.location.href = '/')}>
                  {t('Selg bil')}
                </Button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
