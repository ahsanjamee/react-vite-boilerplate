import { useTranslation } from 'react-i18next';
import { BrandIconV2 } from '../atoms/Icons';

const navigation = {
  shortcuts: [
    { name: 'Min konto', href: '/user/profile' },
    // { name: 'Karriere', href: '#' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Selg bil', href: '#' },
  ],
  quick: [
    // { name: 'Cookies', href: '#' },
    { name: 'Informasjonskapsler', href: '/informasjonskapsler' },
    { name: 'Personvern', href: '/personvernerklaering' },
    { name: 'Om Biil', href: '/om-oss' },
  ],
  help: [
    { name: 'FAQ', href: '/sporsmal-og-svar' },
    { name: 'Kjøpsbetingelser', href: '/kjopsbetingelser' },
    { name: 'Kontakt', href: '/kontakt-oss' },
    // { name: 'Facebook', href: '#' },
  ],
};

export default function Footer() {
  const { t } = useTranslation();
  // const navigate = useNavigate();
  return (
    <footer
      className='bg-brand-primary mt-auto border-t-[1px] border-brand-border bg-footer-texture'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-[40px] pt-16 sm:pt-24 lg:px-8 lg:pt-[100px]'>
        <div className='mb-20 flex justify-between'>
          <div onClick={() => (window.location.href = '/')} className='-m-1.5 p-1.5 cursor-pointer'>
            <span className='sr-only'>Autoformilding</span>
            <BrandIconV2 />
          </div>
          <div onClick={() => (window.location.href = '/')}>
            <button className='hover:text-white leading-normal shadow-md lg:text-base font-bold transition duration-150 ease-in-out py-4 active:bg-brand-primary active:shadow-lg text-brand-primary bg-white rounded-none px-[40px] hover:bg-brand-bg3'>
              Selg bilen
            </button>
          </div>
        </div>

        <div className='mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0 sm:place-items-center'>
          <div className='mb-auto mr-auto'>
            <h3 className='text-xl font-semibold leading-6 text-white'>{t('Kontakt oss')}</h3>
            <div className='w-10 h-1.5 bg-white mt-[15px] mb-[30px]' />
            <ul role='list' className='mt-6 space-y-4'>
              <p className='text-[17px] leading-6 text-white max-w-[270px]'>
                <b>Åpningstider kontor:</b> <br /> man - fre 08-16 <br /> <br /> <b>Telefon:</b> <br /> +47 226 88 888
              </p>
            </ul>
          </div>
          <div className='md:gap-8 mb-auto'>
            <div>
              <h3 className='text-xl font-semibold leading-6 text-white'>{t('Snarveier')}</h3>
              <div className='w-10 h-1.5 bg-white mt-[15px] mb-[30px]' />
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.shortcuts.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-[17px] leading-6 text-white hover:text-white border-b border-transparent hover:border-white'
                    >
                      {t(item.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='md:gap-8 mb-auto'>
            <div>
              <h3 className='text-xl font-semibold leading-6 text-white'>{t('Nyttig')}</h3>
              <div className='w-10 h-1.5 bg-white mt-[15px] mb-[30px]' />
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.quick.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-[17px] leading-6 text-white hover:text-white border-b border-transparent hover:border-white'
                    >
                      {t(item.name)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='mb-auto mr-auto lg:ml-auto lg:mr-0'>
            <h3 className='text-xl font-semibold leading-6 text-white'>{t('Hjelp')}</h3>
            <div className='w-10 h-1.5 bg-white mt-[15px] mb-[30px]' />
            <ul role='list' className='mt-6 space-y-4'>
              {navigation.help.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-[17px] leading-6 text-white hover:text-white border-b border-transparent hover:border-white'
                  >
                    {t(item.name)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-8 border-t border-white pt-8 sm:mt-20 lg:mt-16'>
          <div className='flex justify-between flex-col gap-y-2 lg:flex-row'>
            <p className='text-[13px] leading-5 text-white'>
              © {new Date().getFullYear()} {t('Biil.no . Alle rettigheter forbeholdt.')}
            </p>
            <p className='text-[13px] leading-5 text-white'>
              Laget av{' '}
              <a
                href='https://getonnet.no/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-[13px] hover:text-white cursor-pointer border-b border-white '
              >
                GetOnNet
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
