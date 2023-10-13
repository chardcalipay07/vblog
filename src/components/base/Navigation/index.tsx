import { Link } from "react-router-dom";

export default function Navigation({styles}) {
    return (
        <>
            <ul>
                <li><Link to="/" className={styles.join} >Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </>
    )
}
