import QRCode from "qrcode";
import { useEffect, useState } from "react";
import styles from "../styles/Qrapp.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
const QRAPP = () => {
  const [text, setText] = useState("b");
  const [pretexto, setPretexto] = useState("");
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL(text).then((url) => {
      setSrc(url);
    });
  }, [text]);

  const enviar = (e) => {
    e.preventDefault();
    setText(pretexto);
  };
  return (
    <>
      <Layout pagina={"qrscann"}>
        <div className={`${styles.contenedor} contenedor`}>
          <h1 className={styles.texto}>
            Bienvenido a la app para generar <span>QR</span>
          </h1>
          <form onSubmit={enviar} className={styles.form}>
            <h3>Escriba un texto para generar el qr</h3>
            <input
              type="text"
              value={pretexto}
              onChange={(e) => setPretexto(e.target.value)}
              className={styles.input }
            />
            <input
              type="button"
              onClick={enviar}
              className={styles.button}
              value={"Enviar"}
            />
          </form>
          <div className={styles.img}>
            {src  ? (
              <Image layout="fixed" width={300} height={300} src={src} />
            ) : null}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default QRAPP;
