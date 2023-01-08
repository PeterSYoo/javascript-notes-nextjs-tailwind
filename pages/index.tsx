import { AreBrowserApisRunningJavascript } from '../components/topics/AreBrowserApisRunningJavascript.components';
import { AsyncAwait } from '../components/topics/AsyncAwait.components';
import { BlockingVSNonBlocking } from '../components/topics/BlockingVSNonBlocking.components';
import { Bundling } from '../components/topics/Bundling.components';
import { CallbackFunctions } from '../components/topics/CallbackFunctions.components';
import { CallStack } from '../components/topics/CallStack.components';
import { CompilationProcess } from '../components/topics/CompilationProcess.components';
import { ComponentRenderLifeCycle } from '../components/topics/ComponentRenderLifeCycle.components';
import { ControlledVSUncontrolledComponents } from '../components/topics/ControlledVSUncontrolledComponents.components';
import { CustomHooks } from '../components/topics/CustomHooks.components';
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
import { HookRules } from '../components/topics/HookRules.components';
import { Hooks } from '../components/topics/Hooks.components';
import { HowDoBrowserEnginesHandleExecution } from '../components/topics/HowDoBrowserEnginesHandleExecution.components';
import { ImperativeProgramming } from '../components/topics/ImperativeProgramming.components';
import { Inheritance } from '../components/topics/Inheritance.components';
import { Jsx } from '../components/topics/Jsx.components';
import { Keys } from '../components/topics/Keys.components';
import { LocalLexicalEnvironment } from '../components/topics/LocalLexicalEnvironment.components';
import { Minification } from '../components/topics/Minification.components';
import { Mounting } from '../components/topics/Mounting.components';
import { OopProgramming } from '../components/topics/OopProgramming.components';
import { Parsing } from '../components/topics/Parsing.components';
import { Promises } from '../components/topics/Promises.components';
import { Prototypes } from '../components/topics/Prototypes.components';
import { PureVSImpureFunction } from '../components/topics/PureVSImpureFunction.components';
import { React } from '../components/topics/React.components';
import { RenderProps } from '../components/topics/RenderProps.components';
import { ScopeChain } from '../components/topics/ScopeChain.components';
import { SetStateWithNewObject } from '../components/topics/SetStateWithNewObject.components';
import { ShouldYouMutateState } from '../components/topics/ShouldYouMutateState.components';
import { SideEffects } from '../components/topics/SideEffects.components';
import { SideEffectsCallStack } from '../components/topics/SideEffectsCallStack.components';
import { SingleThreaded } from '../components/topics/SingleThreaded.components';
import { SynchronousVSAsynchronous } from '../components/topics/SynchronousVSAsynchronous.components';
import { Then } from '../components/topics/Then.components';
import { Transpiling } from '../components/topics/Transpiling.components';
import { Unmounting } from '../components/topics/Unmounting.components';
import { Updating } from '../components/topics/Updating.components';
import { UseCallback } from '../components/topics/UseCallback.components';
import { UseContext } from '../components/topics/UseContext.components';
import { UseEffect } from '../components/topics/UseEffect.components';
import { UseImperativeHandle } from '../components/topics/UseImperativeHandle.components';
import { UseLayoutEffect } from '../components/topics/UseLayoutEffect.components';
import { UseMemo } from '../components/topics/UseMemo.components';
import { UseMutationEffect } from '../components/topics/UseMutationEffect.components';
import { UseReducer } from '../components/topics/UseReducer.components';
import { UseRef } from '../components/topics/UseRef.components';
import { UseState } from '../components/topics/UseState.components';
import { VirtualDOM } from '../components/topics/VirtualDOM.components';
import { WhatCausesRerenders } from '../components/topics/WhatCausesRerenders.components';
import { WhatHappensInAReactApp } from '../components/topics/WhatHappensInAReactApp.components';
import { WhatIsACleanUpFunction } from '../components/topics/WhatIsACleanupFunctionUseEffect.components';
import { WorkingWithComplexDataUseState } from '../components/topics/WorkingWithComplexDataUseState.components';

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
            <HowDoBrowserEnginesHandleExecution />
          </div>
          <div className="border-b border-[#a6a7aa] max-w-[950px] w-full mx-auto"></div>
          <div className="flex flex-col">
            <BlockingVSNonBlocking />
            <SynchronousVSAsynchronous />
            <EventLoop />
            <AreBrowserApisRunningJavascript />
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
          <div className="border-b border-[#a6a7aa] max-w-[950px] w-full mx-auto"></div>
          <div className="flex flex-col">
            <React />
            <WhatHappensInAReactApp />
            <WhatCausesRerenders />
            <Jsx />
            <VirtualDOM />
            <ComponentRenderLifeCycle />
            <div className="ml-9">
              <Mounting />
              <Updating />
              <Unmounting />
            </div>
            <SideEffects />
            <SideEffectsCallStack />
            <PureVSImpureFunction />
            <Keys />
            <ControlledVSUncontrolledComponents />
            <Hooks />
            <div className="ml-9">
              <HookRules />
              <UseState />
              <UseEffect />
              <UseContext />
              <UseReducer />
              <UseCallback />
              <UseMemo />
              <UseRef />
              <UseImperativeHandle />
              <UseMutationEffect />
              <UseLayoutEffect />
              <CustomHooks />
            </div>
            <RenderProps />
            <WorkingWithComplexDataUseState />
            <ShouldYouMutateState />
            <SetStateWithNewObject />
            <WhatIsACleanUpFunction />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
