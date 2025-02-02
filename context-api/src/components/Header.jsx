
import style from '../styles/Header.module.css'
import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <header id={style.header}>
            <h1>React Router</h1>
            <nav id={style.nav}>
                <ul id={style.list}>
                    <li className={style.item}><NavLink to='/' className={({ isActive }) => isActive ? `${style.a} ${style.active}` : style.a}>Home</NavLink></li>
                    <li className={style.item}><NavLink to='/about' className={({ isActive }) => isActive ? `${style.a} ${style.active}` : style.a}>About</NavLink></li>
                    <li className={style.item}><NavLink to='/products' className={({ isActive }) => isActive ? `${style.a} ${style.active}` : style.a}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header