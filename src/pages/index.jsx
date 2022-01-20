import Head from "next/head";
import { Contato } from "../components/Contato";
import { Formulario } from "../components/Formulario";
import { Inspecao } from "../components/Inspecao";
import { QuemSomos } from "../components/QuemSomos";
import { Servicos } from "../components/Servicos";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PEB Engenharia</title>
        <meta name="description" content="Laudos de Engenharia" />
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1 data-text="PEB">
            PEB <br />
            <h2 data-text="ENGENHARIA">ENGENHARIA</h2>
          </h1>
        </section>
        <img
          className={styles.imgHome}
          src="/construction-2238779.jpg"
          alt="construção"
        />
      </main>
      <Servicos id="servicos" />
      <QuemSomos id="quemsomos" />
      <Inspecao id="insp" />
      <Contato id="contact">
        <Formulario />
      </Contato>
    </div>
  );
}
