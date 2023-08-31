import LoaderSimple from '../components/atoms/loaderSimple';

const LoadingPage: React.FC = () => {
  return (
    <div className='w-full h-screen grid place-content-center'>
      <LoaderSimple />
    </div>
  );
};

export default LoadingPage;
