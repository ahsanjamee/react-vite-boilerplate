type ILayoutProps = {
  children: React.ReactNode;
  background?: boolean;
};

const Layout: React.FC<ILayoutProps> = ({ children, background }) => {
  return (
    <div>
      <div className={`min-h-screen  py-8 flex ${background ? 'bg-brand-bg' : 'bg-white'}`}>
        <div className='mx-auto max-w-[76rem] w-full px-8 xl:px-0'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
