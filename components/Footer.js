import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.principal}>
      <div className={styles.redes}>
        <a href="">
          <i className={`${styles.facebook} fa-brands fa-facebook`}></i>
        </a>
        <a href="">
          <i className={`${styles.linkedin} fa-brands fa-linkedin`}></i>
        </a>
        <a href="">
          <i className={`${styles.whatsapp} fa-brands fa-whatsapp`}></i>
        </a>
        <a href="">
          <i className={`${styles.instagram} fa-brands fa-instagram`}></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
