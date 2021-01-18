import { Link } from "react-router-dom";

function Header(props) {
    return (
        <ul>
            <li><Link as="li" to="/">Homepage</Link></li>
            <li><Link as="li" to="/category/cosplay">Cosplay</Link></li>
            <li><Link as="li" to="/category/beauty">Beauty</Link></li>
            <li><Link as="li" to="/post/001001">Post</Link></li>
        </ul>
    )
}

export default Header