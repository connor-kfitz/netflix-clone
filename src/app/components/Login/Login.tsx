"use client";
import BackgroundImage from "../../../../public/images/login/login-background.jpg";
import Image from "next/image";
import "./Login.scss";
import { useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { redirect } from 'next/navigation'

export default function Login() {

  // Todo: Add remember me button
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { logIn } = UserAuth();

  function handleFormChange(event:  React.FormEvent<HTMLInputElement>): void {
    const {name, value} = event.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    event.preventDefault();
    try {
      await logIn(formData.email, formData.password);
      redirect('/browse');
    } catch (error) {
      // Todo: Alert user that the sign up failed
      console.log(error);
    }
  }

  return (
    // Todo: Fix some of the styling, on / off states for inputs
    <div className="login">
      <Image className="login__background-image" src={BackgroundImage} alt="Background"/>
      <div className="login__background-gradient"></div>
      <div className="login__container"> 
        <form className="login-form">
          <h1 className="login-form__title">Sign In</h1>
          <label className="login-form__email-label">
            <div className="login-form__email-title">Email</div>
            <input name="email" value={formData.email} onChange={handleFormChange} type="email"/>
          </label >
          <label className="login-form__password-label">
            <div className="login-form__password-title">Password</div>
            <input value={formData.password} name="password" onChange={handleFormChange} type="password"/>
          </label>
          <button className="login-form__submit-button" type="submit" onClick={handleSubmit}>Sign In</button>
          <div className="login-form__help-container">
            {/* Todo: Make Custom Checkbox to Update Style */}
            <label className="login-form__remember-me-label">
              <input className="login-form__remember-me-checkbox" type="checkbox"/>
              Remember me
            </label>
            <a className="login-form__help-text">Need help?</a>
          </div>
          <div className="login__new-user-text">New to Netflix?<a className="login__sign-up-link" href="/sign-up">Sign up now</a></div>
        </form>
      </div>
    </div>
  )
}
