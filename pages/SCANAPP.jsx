import Layout from "../components/Layout";
import Styles from '../styles/SCANAPP.module.css'
import { QrReader } from "react-qr-reader";
import { useState } from "react";

const SCANAPP = () => {
  const [data, setData] = useState("No result");

  return (
    <>
      <Layout pagina={"QRST-ScanApp"}>
        <div className={`${Styles.contenedor} contenedor`}>
          <QrReader
            className={Styles.qrapp}
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
          />
          <p className={Styles.master}>Su texto escaneado es :</p>
          <p className={Styles.data}>{data}</p>
        </div>
      </Layout>
    </>
  );
};
export default SCANAPP;
