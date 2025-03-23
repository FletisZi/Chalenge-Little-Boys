import Head from "next/head"; // Importar o Head do Next.js
import Header from "../components/Header";
import "../styles/Global.css";
import "../styles/Header.css";
import "../styles/Titles.css";
import "../styles/Services.css";
import Services from "../components/Services";

function MyApp() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Tinos:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />

      {/* <Component {...pageProps} /> */}
      <Services />
    </>
  );
}

export default MyApp;
