import styles from "./styles.module.scss";

export function Servicos() {
  return (
    <>
      <main className={styles.contentContent} id="servicos">
        <h1>Serviços</h1>
        <section className={styles.contentGrid}>
          <div className={styles.polaroid}>
            <img src="inspelaudo.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2>INSPEÇÃO E LAUDOS</h2>
              <p>
                Inspeção predial é uma constatação com análise de risco através
                de uma vistoria técnica em toda a edificação realizada por
                profissionais com expertises em engenharia, que tem como
                objetivo promover a longevidade do imóvel, a segurança
                construtiva e o conforto de seus usuários, através de
                prognósticos e conclusões expostas em laudos periciais com
                apontamentos de todas as manifestações patológicas, falhas,
                vícios e anomalias construtivas baseadas nas Leis vigentes,
                Normas Regulamentadoras e Biografias específicas
              </p>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="manutencao.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2>MANUTENÇÃO PREDIAL</h2>
              <p>
                A manutenção predial é de extrema importância para manter toda
                edificação em condições de uso e conforto aos usuários onde
                todos os sistemas estruturais e instalações devem estar em
                perfeito funcionamento. Motivo pelo qual faz-se necessário as
                devidas manutenções e até Retrofit para a longevidade das
                construções.
              </p>
            </div>
          </div>
          <div className={styles.polaroid}>
            <img src="projetos.png" alt=" " className={styles.photo} />
            <div className={styles.caption}>
              <h2>PROJETOS, ORÇAMENTO BASE E GERENCIAMENTO</h2>
              <p>
                <span>
                  Projetos <br />
                </span>
                Realizamos projetos inteligentes e viáveis com objetivo de
                materializar idéias através de concepções construtivas sempre
                visando ganho de eficiência em curto prazo e acima de tudo
                satisfação do Cliente.
                <span>
                  <br />
                  Orçamento e planejamento <br />
                </span>
                Com intuito de evitar atrasos e falta de coordenarção de
                projetos, a PEB Engenharia oferece um planejamento e orçamento
                completo de obras desde planilhas quantitativas, contemplando
                custos de mão de obra, materiais e insumos inerentes aos
                serviços, bem como cronograma físico-financeiro para um total
                entendimento e acompanhamento de obras e reformas.{" "}
                <span>
                  <br />
                  Gerenciamento <br />
                </span>
                Setor que visa administrar todas as etapas da obra do início a
                entrega com base no orçamento e planejamento, garantindo a
                qualidade, custos e prazos objetivando o conforto e satisfação
                do Cliente.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
