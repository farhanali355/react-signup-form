











import react from 'react'
import { Button } from './Components/Button/Button'
import "./App.css";
function App() {

  return (
    <div className='box'>
      <div className='container'>
        <div>
          <h1>sign up</h1>
          <p>Already Have account ? <a href="#">Login Here</a></p>
          <div className='h1-container'>
            <h3>Name</h3>
            <input type="text" placeholder='enter your name' required />
          </div>
          <div className="h1-container">
            <h3>Email Id</h3>
            <input type="email" placeholder='enter your email' required />

          </div>

          <div className="h1-container">
            <h3>Password</h3>

            <input type="password" placeholder='enter your password' required />

          </div>
          <div className='checkbox-container'>

          <input type="checkbox" />By signing up you agree to recieve updates and speacial Offers.
          <Button />
          </div>
        </div>
        <div className='img-div'>
          <img width={300} src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?ga=GA1.1.880020987.1729081326&semt=ais_hybrid" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
