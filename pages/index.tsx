import { GlobalExecutionContext } from '../components/topics/GlobalExecutionContext.components';

const Home = () => {
  return (
    <>
      <div className="flex-grow">
        <div className="flex flex-col max-w-[1024px] w-full mx-auto px-10">
          <GlobalExecutionContext />
        </div>
      </div>
    </>
  );
};

export default Home;
