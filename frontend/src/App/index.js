import React from 'react';

import AppPresentational from './presentational';

import { StepsEnum } from './enums';

function App() {
  const [currentStep, setCurrentStep] = React.useState(StepsEnum.NAME_FORM);

  const [userName, setUserName] = React.useState('');

  function handleChangeUserName(value) {
    setUserName(value);

    setCurrentStep(StepsEnum.CHAT);
  }

  return React.createElement(AppPresentational, {
    currentStep,
    userName,

    handleChangeUserName,
  });
}

export default App;
