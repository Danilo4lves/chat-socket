import React from 'react';

import { NameForm, Chat } from './components';

import { StepsEnum } from './enums';

function AppPresentational(props) {
  const {
    currentStep,
    userName,

    handleChangeUserName,
  } = props;

  if (currentStep === StepsEnum.NAME_FORM) {
    return <NameForm handleChangeUserName={handleChangeUserName} />;
  }

  return <Chat userName={userName} />;
}

export default AppPresentational;
