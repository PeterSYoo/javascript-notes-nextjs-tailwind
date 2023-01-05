import { AsyncAwait } from '../components/topics/AsyncAwait.components';
import { BlockingVSNonBlocking } from '../components/topics/BlockingVSNonBlocking.components';
import { Bundling } from '../components/topics/Bundling.components';
import { CallbackFunctions } from '../components/topics/CallbackFunctions.components';
import { CallStack } from '../components/topics/CallStack.components';
import { CompilationProcess } from '../components/topics/CompilationProcess.components';
import { DeclarativeProgramming } from '../components/topics/DeclarativeProgramming.components';
import { EventDrivenProgramming } from '../components/topics/EventDrivenProgramming.components';
import { EventLoop } from '../components/topics/EventLoop.components';
import { Events } from '../components/topics/Events.components';
import { Executing } from '../components/topics/Executing.components';
import { FunctionalProgramming } from '../components/topics/FunctionalProgramming.components';
import { GlobalExecutionContext } from '../components/topics/GlobalExecutionContext.components';
import { GlobalLexicalEnvironment } from '../components/topics/GlobalLexicalEnvironment.components';
import { HigherOrderFunctions } from '../components/topics/HigherOrderFunctions.components';
import { Hoisting } from '../components/topics/Hoisting.components';
import { ImperativeProgramming } from '../components/topics/ImperativeProgramming.components';
import { Inheritance } from '../components/topics/Inheritance.components';
import { LocalLexicalEnvironment } from '../components/topics/LocalLexicalEnvironment.components';
import { Minification } from '../components/topics/Minification.components';
import { OopProgramming } from '../components/topics/OopProgramming.components';
import { Parsing } from '../components/topics/Parsing.components';
import { Promises } from '../components/topics/Promises.components';
import { Prototypes } from '../components/topics/Prototypes.components';
import { ScopeChain } from '../components/topics/ScopeChain.components';
import { SingleThreaded } from '../components/topics/SingleThreaded.components';
import { SynchronousVSAsynchronous } from '../components/topics/SynchronousVSAsynchronous.components';
import { Then } from '../components/topics/Then.components';
import { Transpiling } from '../components/topics/Transpiling.components';

const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col max-w-[1024px] w-full mx-auto px-10 gap-5">
          <div className="flex flex-col">
            <CompilationProcess />
            <div className="ml-9">
              <Transpiling />
              <Parsing />
              <Bundling />
              <Minification />
              <Executing />
            </div>
            <SingleThreaded />
          </div>
          <div className="border-b border-[#a6a7aa] max-w-[950px] w-full mx-auto"></div>
          <div className="flex flex-col">
            <BlockingVSNonBlocking />
            <SynchronousVSAsynchronous />
            <EventLoop />
          </div>
          <div className="border-b border-[#a6a7aa] max-w-[950px] w-full mx-auto"></div>
          <div className="flex flex-col">
            <HigherOrderFunctions />
            <CallbackFunctions />
            <Promises />
            <AsyncAwait />
            <Then />
          </div>
          <div className="border-b border-[#a6a7aa] max-w-[950px] w-full mx-auto"></div>
          <div className="flex flex-col">
            <OopProgramming />
            <div className="ml-9">
              <Prototypes />
              <Inheritance />
            </div>
            <FunctionalProgramming />
            <EventDrivenProgramming />
            <div className="ml-9">
              <Events />
            </div>
            <ImperativeProgramming />
            <DeclarativeProgramming />
          </div>
          <div className="border-b border-[#a6a7aa] max-w-[950px] w-full mx-auto"></div>
          <div className="flex flex-col">
            <CallStack />
            <GlobalExecutionContext />
            <GlobalLexicalEnvironment />
            <LocalLexicalEnvironment />
            <ScopeChain />
            <Hoisting />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
