import { Link } from "react-router-dom"
import style from '../styles/Header.module.css'


const Header = () => {
    return (
        <header id={style.header}>
            <h1>React Router</h1>
            <nav id={style.nav}>
                <ul id={style.list}>
                    <li className={style.item}><Link to='/main' className={style.a}>Home</Link></li>
                    <li className={style.item}><Link to='/about' className={style.a}>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header