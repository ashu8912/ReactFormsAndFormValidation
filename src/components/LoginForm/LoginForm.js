import React from 'react'
import Input from '../UI/Input';
import './LoginForm.css';
const LoginForm=(props)=> {
        let formElements=[];
        for(let key in props.loginform)
        {
            formElements.push({id:key,config:props.loginform[key]})
        }
        return (
                <form className="form"  onSubmit={(event)=>props.submit(event,"loginForm")}>
           <div className="user_profile_image">
           <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="orange" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"></path>
						</svg>
                </div>
               {formElements.map((formElement)=>{
                   return <Input label={formElement.id} key={formElement.id} elementType={formElement.config.elementType} 
                   value={formElement.value}
                   elementConfig={formElement.config.elementConfig}
                   invalid={!formElement.config.valid}
                   touched={formElement.config.touched}
                   message={formElement.config.message}
                   changed={(event)=>props.changed(event,formElement.id,'loginForm')}/>
               })
            }
            <div className="ButtonWrapper">
            <button type="submit" className="Button" disabled={!props.disabled}>Login</button>
           </div>
           </form>
           
        )
    }


export default LoginForm;