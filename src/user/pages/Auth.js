import React, {useState} from 'react'

import "../../places/pages/PlaceForm.css";
import './Auth.css'
import Card from '../../shared/components/UIElements/Card'

import {
    
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE
  } from "../../shared/util/validators";
  import { useForm } from "../../shared/hooks/form-hook";
  import Input from "../../shared/components/FormElements/Input";
  import Button from "../../shared/components/FormElements/Button";

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
          value: "",
          isValid: false,
        },
        password: {
          value: "",
          isValid: false,
        },
        
      });

      const switchModeHandler = () => {
        if (!isLoginMode) {
          setFormData({...formState.inputs, name: undefined}, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
          setFormData({...formState.inputs, name: {value: '', isValid: false}}, false)
        }
        setIsLoginMode(prevMode => !prevMode)
      }

      const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs); //send this to backend
      };
    

    return (<Card className='authentication'>
      <h2>Login Required</h2>
      <hr/>
      <form  onSubmit={authSubmitHandler}> 

      {!isLoginMode && (
        <Input 
        id="name" 
        element="input" 
        type="text" 
        label="Your name" 
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Please enter your name" 
        onInput={inputHandler}
        />
      )}
   
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
    <Button type='submit' disabled={!formState.isValid}>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
    </form>
    <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode ? 'SUGNUP' : 'LOGIN'}</Button>
    </Card>)
}

export default Auth;