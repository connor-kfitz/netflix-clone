import BackgroundImage from "../../../../public/images/login/login-background.jpg";
import Image from "next/image";
import "./Login.scss";

export default function Login() {
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
            <input className="login-form__email-input" type="email"/>
          </label >
          <label className="login-form__password-label">
            <div className="login-form__password-title">Password</div>
            <input className="login-form__password" type="password"/>
          </label>
          <button className="login-form__submit-button" type="submit">Sign In</button>
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
