import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export default function NavBar():JSX.Element {
    return (
        <nav className = {styles.container}>
            <NavLink className={styles.link} to="greeting">Greeting</NavLink>
            <NavLink className={styles.link} to="aboutus">About us</NavLink>
            <NavLink className={styles.link} to="contacts">Contacts</NavLink>
        </nav>
    )
}