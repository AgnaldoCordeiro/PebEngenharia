import styles from "./styles.module.scss";

export default function Whatssap() {
  return (
    <div className="widget HTML" data-version="1" id="HTML2">
      <div className={styles.whatsContainer}>
        <a
          href="https://api.whatsapp.com/send?phone=5511953791450&text=INSPE%C3%87%C3%95ES%20PREDIAIS"
          target="_blank"
          rel="noreferrer"
          className="position: fixed; bottom: 20px; left: 10px;"
        >
          <img src="/whats.png" alt="Whatssap" width="40" height="40" />
        </a>
      </div>
      <div className="clear"></div>
    </div>
  );
}
