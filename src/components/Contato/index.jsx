import { Children } from "react/cjs/react.production.min";
import { Formulario } from "../Formulario";
import styles from "./styles.module.scss";

export function Contato() {
  return (
    <>
      <main className={styles.contentContent} id="contact">
        <h1 className={styles.titulo}>Contato</h1>
        <div className={styles.grid}>
          <section className={styles.sectionContato}>
            <h4>Informações</h4>
            <p>
              Para qualquer informação, dúvida ou comentário, preencha o
              fomulário e deixe seu contato que retornaremos até 24 horas:
            </p>
            {<Formulario />}
          </section>
          <section className={styles.sectionContato}>
            <h4>P E B Engenharia Ltda.</h4>
            <p>
              CNPJ : 26.484.214/0001-74 <br />
              INSC. ESTADUAL : 181.270.760.114 INSC.
              <br />
              MUNICIPAL : 1351711 <br />
              <span>
                Orçamento: <br />
                (11) 95379-1450 - São Paulo <br />
                (16) 99707-4162 - Araraquara
              </span>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
