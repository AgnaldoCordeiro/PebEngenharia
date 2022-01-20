import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer>
        <div>
          <Link href="https://www.linkedin.com/in/agnaldo-gabriel-61527112a/">
            <a target="_blank" rel="noreferrer">
              <p>
                &copy; 2021 AgnaldoCordeiro • Direitos Reservados. Inc.
                Desenvolvido por AgnaldoCordeiro.
              </p>
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
