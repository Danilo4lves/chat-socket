import React from 'react';
import { useForm } from 'react-hook-form';

import NameFormPresentational from './presentational';

function NameForm(props) {
  const { handleChangeUserName } = props;

  const {
    register,
    handleSubmit,
    formState: { isValid: isFormValid }
  } = useForm({ mode: 'onChange' });

  function changeName(values) {
    const { name } = values;

    handleChangeUserName(name);
  }

  return React.createElement(NameFormPresentational, {
    register,
    handleSubmit,
    isFormValid,

    changeName,
  });
}

export default NameForm;
