import Link from 'next/link'
import styles from '../styles/Header.module.css'


export const Header = () => {
  return (
    <header>
            <div className='contenedor'>
                <div className={styles.barra}>
                    <nav className={styles.navegar}>
                        <Link href="/">INICIO </Link>
                        <Link href="/QRAPP">QR APP </Link>
                        <Link href="/SCANAPP">SCAN APP </Link>
                        <Link href="">CONTACTO </Link>
                    </nav>
                </div>
            </div>
    </header>
    );
};