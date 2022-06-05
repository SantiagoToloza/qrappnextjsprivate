import Head from "next/head";
import Footer from "./Footer";
import { Header } from "./Header";

const Layout = ({ children, pagina }) => {
  return (
    <>
      <Head>
        <title>{pagina}</title>
        <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
       
      </Head>
      <meta name="description" content="sitio web de guitarras" />
      <Header></Header>
      {children}

      <Footer />
    </>
  );
};
export default Layout;
