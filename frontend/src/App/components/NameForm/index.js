import React from 'react';

import NameFormPresentational from './presentational';

import { AppContext } from '../../contexts';

function NameForm(props) {
  const { goToChatStep } = props;

  const { socket } = React.useContext(AppContext);

  return React.createElement(NameFormPresentational);
}

export default NameForm;
