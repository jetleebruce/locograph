import React, { useCallback, useReducer } from "react";

import "./NewPlace.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";

const NewPlace = (props) => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Here is a place'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please, enter a valid title'
        onInput={titleInputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please, enter a valid description (5 charcters at least)'
        onInput={titleInputHandler}
      />
    </form>
  );
};

export default NewPlace;
