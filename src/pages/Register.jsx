/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom'

const Register = () => {
    return    (
        <>
    <section>
        <h1>Success !</h1>
        <p>
        <a href="#">Sign In</a>
        </p>
    </section>

    <section>
        <p></p>
        <h1>Register</h1>
        <form>
            <label htmlFor="username">
                Username: 
            </label>
            <input 
                type="text"
                id="username"
                autoComplete="off"
                required
                aria-describedby="uidnote"
            />
            <p></p>
            <label htmlFor="password">
                Password:
            </label>
            <input
                type="password"
                id="password"
                required
                aria-describedby="pwdnote"
                />
            <p>
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
                Confirm Password:
            </label>
            <input
                type="password"
                id="confirm_pwd"
                required
                aria-describedby="confirmnote"
                />
            <p>
                Must match the first password input field.
            </p>
            <button>Sign Up</button>
        </form>
        <p>
            Already registered?<br />
            <span className="line">
                <Link to="/">Sign In</Link>
            </span>
        </p>
    </section>
        </>
    )
}

export default Register