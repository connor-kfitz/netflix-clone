"use client";
import BackgroundImage from "../../../../public/images/login/login-background.jpg";
import Image from "next/image";
import { useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import "./SignUp.scss";

export default function Login() {

  // Todo: Add remember me button
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { signUp } = UserAuth();

  const router = useRouter();

  function handleFormChange(event:  React.FormEvent<HTMLInputElement>): void {
    const {name, value} = event.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    event.preventDefault();
    try {
      await signUp(formData.email, formData.password);
      router.push('/browse');
    } catch (error) {
      // Todo: Alert user that the sign up failed
      console.log(error);
    }
  }

  return (
    // Todo: Fix some of the styling, on / off states for inputs
    <div className="sign-up">
      <Image className="sign-up__background-image" src={BackgroundImage} alt="Background"/>
      <div className="sign-up__background-gradient"></div>
      <div className="sign-up__container"> 
        <form className="sign-up-form">
          <h1 className="sign-up-form__title">Sign Up</h1>
          <label className="sign-up-form__email-label">
            <div className="sign-up-form__email-title">Email</div>
            <input name="email" value={formData.email} onChange={handleFormChange} type="email"/>
          </label >
          <label className="sign-up-form__password-label">
            <div className="sign-up-form__password-title">Password</div>
            <input value={formData.password} name="password" onChange={handleFormChange} type="password"/>
          </label>
          <button className="sign-up-form__submit-button" type="submit" onClick={handleSubmit}>Sign Up</button>
          <div className="sign-up-form__help-container">
            {/* Todo: Make Custom Checkbox to Update Style */}
            <label className="sign-up-form__remember-me-label">
              <input className="sign-up-form__remember-me-checkbox" type="checkbox"/>
              Remember me
            </label>
            <a className="sign-up-form__help-text">Need help?</a>
          </div>
        </form>
      </div>
    </div>
  )
}