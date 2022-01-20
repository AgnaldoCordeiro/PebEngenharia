import styles from "./styles.module.scss";

export function Inspecao() {
  return (
    <>
      <main className={styles.contentContent} id="insp">
        <h1>Inspeção e Manutenção</h1>
        <section className={styles.contentGrid}>
          <div className={styles.polaroid}>
            <img src="001.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Inspecao Fachadas Drone</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="002.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Piso de Concreto</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="003.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Vazamentos</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="004.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Manutenção Hidráulica</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="005.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Manutenção Residência</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="006.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Instalações</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="007.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Comandos Elétricos</h2>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="008.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2 className={styles.titulo}>Ensaios não Destrutivos</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
