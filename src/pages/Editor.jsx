/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const Editor = () => {
    return (
    <section>
        <h1>Editors Page</h1>
        <br />
        <p>ou must have been assigned an Editor role.</p>
        <div className="flexGrow">
            <Link to="/">Home</Link>
        </div>
    </section>
    )
}

export default Editor