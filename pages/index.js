import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Index.module.css";

const Home = () => {
  return (
    <>
      <Layout pagina="inicio">
        <div className="contenedor">
          <div className={styles.qrapp}>
            <div className={styles.texto}>
              <h2>APP PARA GENERAR QR</h2>
              <p>
                Con la app qr app podras generar un codigo qr{" "}
                <span>Al instante </span>{" "}
              </p>
              <Link href="/QRAPP" >
                <a className={styles.ir}>IR A CREAR QR </a>
              </Link>
            </div>
            <div className={styles.imagen}>
              <Image
                src="/undraw.svg"
                height={800}
                width={800}
                layout="responsive"
                className={styles.imagenqr}
              />
            </div>
            <div>
              <Image
                src="/accept.svg"
                height={800}
                width={800}
                layout="responsive"
                className={styles.imagenscan}
              /> 
            </div>
            <div className={styles.texto}>
              <h2>APP PARA CREAR QR</h2>
              <p>
                Con la app qr app podras crear un codigo qr{" "}
                <span>Al instante </span>{" "}
              </p>
              <Link href="/SCANAPP">
                <a className={styles.ir}>IR A ESCANEAR QR </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
