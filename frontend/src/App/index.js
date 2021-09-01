import React from 'react';
import io from 'socket.io-client';

import AppPresentational from './presentational';

import { StepsEnum } from './enums';

const socket = io.connect('/');

function App() {
  const [currentStep, setCurrentStep] = React.useState(StepsEnum.NAME_FORM);

  function goToChatStep() {
    setCurrentStep(StepsEnum.CHAT);
  }

  return React.createElement(AppPresentational, {
    socket,

    currentStep,

    goToChatStep,
  });
}

export default App;
