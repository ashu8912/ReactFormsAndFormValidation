import React, { Component } from 'react'
import LoginForm from '../components/LoginForm/LoginForm';

class FormContainer extends Component {
    state={
        loginForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Enter Email'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    required:true,
                    type:'email'
                }
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Enter your password'
                },
                value:'',
                validationFailMessage:'',
                valid:false,
                touched:false,
                validations:{
                    required:true,
                    minLength:4
                }
            }
        },
        isLoginFormValid:false
    }
    checkValidity(value,rule)
    {
        let isValid=true;
        let message='';
      
        if(rule.required)
        {
            isValid=value.trim()!=='' && isValid;
            console.log(isValid)
           if(!isValid)
           { message='please fill in the field';
           return {isValid,message}   
        }
        }
        if(rule.type==='email')
        {
        isValid=/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value) && isValid;
        console.log(isValid);
        if(!isValid)
       {
       message="this is not a valid email";
       return {isValid,message}
       }        
        }
        if(rule.minLength)
        {
            isValid=value.length>=4 && isValid;
            if(!isValid)
            {message='must be greater than four';
            return {isValid,message}    
        }
        }
        return {isValid,message};
    }
    changeHandler=(event,element,form)=>{
      const updatingForm={...this.state[form]};
      const updatingFormElement={...updatingForm[element]};
      updatingFormElement.value=event.target.value;
      let validateObject=this.checkValidity(updatingFormElement.value,updatingFormElement.validations)

      updatingFormElement.valid=validateObject.isValid;
      updatingFormElement.message=validateObject.message;
      updatingFormElement.touched=true;
      updatingForm[element]=updatingFormElement;
      let stateName=form==='loginForm'?'isLoginFormValid':'isSignInFormValid';
      let isOverAllFormValid=true;
      for(let key in updatingForm)
      {
        isOverAllFormValid=updatingForm[key].valid && isOverAllFormValid;
      }
      this.setState({loginForm:updatingForm,[stateName]:isOverAllFormValid})
    }
    formSubmitHandler=(event,form)=>{
        event.preventDefault();
       const formToBeSubmitted={...this.state[form]};
       const deClutteredForm={};
      
       for(let key in formToBeSubmitted)
       {    
           deClutteredForm[key]=formToBeSubmitted[key].value;
       }
       
       //this is the object that will be pushed to database
    }
    render () {
        return (
            <div>
              <LoginForm loginform={this.state.loginForm} changed={this.changeHandler} submit={this.formSubmitHandler}
              disabled={this.state.isLoginFormValid}/>  
            </div>
        )
    }
}

export default FormContainer;