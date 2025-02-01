import { Link } from "react-router-dom"
import '../styles/Header.css'


const Header = () => {
    return (
        <header>
            <h1>React Router</h1>
            <nav>
                <ul>
                    <li><Link to='/main'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header