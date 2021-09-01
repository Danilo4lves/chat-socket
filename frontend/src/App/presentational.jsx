import React from 'react';

import { AppContextProvider } from './contexts';

import { NameForm, Chat } from './components';

import { StepsEnum } from './enums';

function AppPresentational(props) {
  const {
    socket,

    currentStep,

    goToChatStep,
  } = props;

  function renderStep() {
    if (currentStep === StepsEnum.NAME_FORM) {
      return <NameForm goToChatStep={goToChatStep} />;
    }

    return <Chat />;
  }

  return (
    <AppContextProvider value={{ socket }}>
      {renderStep()}
    </AppContextProvider>
  )
}

export default AppPresentational;
