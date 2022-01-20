import "../styles/globals.scss";
import Header from "../components/Header";
import Whatssap from "../components/Whatssap";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Whatssap />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
