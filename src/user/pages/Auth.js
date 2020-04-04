import React from 'react'

import "../../places/pages/PlaceForm.css";
import './Auth.css'
import Card from '../../shared/components/UIElements/Card'

import {
    
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL
  } from "../../shared/util/validators";
  import { useForm } from "../../shared/hooks/form-hook";
  import Input from "../../shared/components/FormElements/Input";
  import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
    const [formState, inputHandler] = useForm({
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
        
      });

      const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); //send this to backend
      };
    

    return (<Card className='authentication'>
      <h2>Login Required</h2>
      <hr/>
      <form  onSubmit={authSubmitHandler}> 
   
    <Input
    id="email"
    element='input'
    type="email"
    label="Enter your email"
    validators={[VALIDATOR_EMAIL()]}
    errorText='Please, enter a valid email'
    onInput={inputHandler}
        
    />

<Input
    id="password"
    element='input'
    type='password'
    label="Enter your password"
    validators={[VALIDATOR_MINLENGTH(4)]}
    errorText='Please, enter a valid password'
    onInput={inputHandler}
    />
    <Button type='submit' disabled={!formState.isValid}> SEND</Button>
    </form></Card>)
}

export default Auth;