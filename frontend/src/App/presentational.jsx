import React from 'react';

import { AppContextProvider } from './contexts';

import { Chat } from './components';

function AppPresentational(props) {
  const {
    socket,

    currentStep,

    goToChatStep,
  } = props;

  return (
    <AppContextProvider value={{ socket }}>
      <Chat />
    </AppContextProvider>
  )
}

export default AppPresentational;
