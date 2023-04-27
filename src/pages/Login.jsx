import { Link } from "react-router-dom"

const Login = () => {
    return (
    <section>
        <p></p>
        <h1>Sign In</h1>
        <form>
            <label>Username: </label>
            <input 
                type="text"
                id="username"
                autoComplete="off"
                required
            />

            <label htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                required
            />
            <button>Sign In</button>
        </form>
        <p>Need an Account?<br />
        <span className="line">
            <Link to="/register">Register</Link>
        </span>
        </p>
    </section>
    )
}

export default Login