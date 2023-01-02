import { AsyncAwait } from '../components/topics/AsyncAwait.components';
import { BlockingVSNonBlocking } from '../components/topics/BlockingVSNonBlocking.components';
import { CallbackFunctions } from '../components/topics/CallbackFunctions.components';
import { CallStack } from '../components/topics/CallStack.components';
import { EventLoop } from '../components/topics/EventLoop.components';
import { GlobalExecutionContext } from '../components/topics/GlobalExecutionContext.components';
import { GlobalLexicalEnvironment } from '../components/topics/GlobalLexicalEnvironment.components';
import { HigherOrderFunctions } from '../components/topics/HigherOrderFunctions.components';
import { Hoisting } from '../components/topics/Hoisting.components';
import { Promises } from '../components/topics/Promises.components';
import { SingleThreaded } from '../components/topics/SingleThreaded.components';
import { SynchronousVSAsynchronous } from '../components/topics/SynchronousVSAsynchronous.components';
import { Then } from '../components/topics/Then.components';

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col max-w-[1024px] w-full mx-auto px-10 gap-3">
          <GlobalExecutionContext />
          <GlobalLexicalEnvironment />
          <Hoisting />
          <HigherOrderFunctions />
          <CallbackFunctions />
          <SingleThreaded />
          <CallStack />
          <SynchronousVSAsynchronous />
          <AsyncAwait />
          <Then />
          <Promises />
          <EventLoop />
          <BlockingVSNonBlocking />
        </div>
      </div>
    </>
  );
};

export default Home;
