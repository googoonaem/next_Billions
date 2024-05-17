import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Navigation() {
    return(
            <Link href="/"><nav className={styles.nav}>🏡</nav><div className={styles.nav_back}></div></Link>
    )
}