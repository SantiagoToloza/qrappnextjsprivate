import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.principal}>
      <div className={styles.redes}>
        <a href="https://www.facebook.com/santiagotooloza/" target="blank" >
          <i className={`${styles.facebook} fa-brands fa-facebook`}></i>
        </a>
        <a href="https://www.linkedin.com/in/santiagotoloza/" target="blank" >
          <i className={`${styles.linkedin} fa-brands fa-linkedin`}></i>
        </a>
        <a href=""  target="blank" >
          <i className={`${styles.whatsapp} fa-brands fa-whatsapp` }></i>
        </a>
        <a href="https://www.instagram.com/santiagotoloza_/" target="blank" >
          <i className={`${styles.instagram} fa-brands fa-instagram`}></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
