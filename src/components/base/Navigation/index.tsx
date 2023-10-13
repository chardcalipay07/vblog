import { Link } from "react-router-dom";

type data = {
    styles: string;
}

export default function Navigation({styles}: data) {
    return (
        <>
            <ul>
                <li><Link to="/" className={styles} >Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact</Link></li>
            </ul>
        </>
    )
}
