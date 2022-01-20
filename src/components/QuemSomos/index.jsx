import styles from "./styles.module.scss";

export function QuemSomos() {
  return (
    <>
      <main className={styles.contentContent} id="quemsomos">
        <h2 className={styles.title}>Quem Somos</h2>
        <section className={styles.grid}>
          <p className={styles.caption}>
            Somos uma empresa especializada de engenharia que surgiu da fusão de
            experiências na construção civil e de manutenções prediais, com
            intuito de oferecer serviços de manutenções, projetos técnicos,
            laudos e inspeções prediais, visando soluções inteligentes e
            econômicas para longevidade das edificações de acordo com as normas
            de segurança e de qualidade.
          </p>
          <img src="/quemsomos.png" alt="quem somos" className={styles.photo} />
        </section>
      </main>
    </>
  );
}
