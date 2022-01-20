import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import Link from "next/link";
import styles from "./styles.module.scss";
import Head from "next/head";
import { Typography } from "@mui/material";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="default">
        <Toolbar>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
          </Head>
          <header className={styles.nav}>
            <nav>
              <input type="checkbox" id="check" className={styles.check} />
              <label htmlFor="check" className={styles.checkbtn}>
                <i className="fas fa-bars"></i>
              </label>
              <Typography>
                <label>INSPEÇÕES PREDIAIS</label>
              </Typography>
              <ul>
                <li>
                  <Link href="/">
                    <a className="active">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/.#servicos">
                    <a>Serviços</a>
                  </Link>
                </li>
                <li>
                  <Link href="/.#quemsomos">
                    <a>Quem Somos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/.#insp">
                    <a>Inspeção e Manutenção</a>
                  </Link>
                </li>
                <li>
                  <Link href="/.#contact">
                    <a>Contato</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="default" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

/* import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/P E B ENGENHARIA.png" alt="PEB Engenharia" />

        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/.#servicos">
            <a>Serviços</a>
          </Link>
          <Link href="/.#quemsomos">
            <a>Quem Somos</a>
          </Link>
          <Link href="/.#insp">
            <a>Inspeção e Manutenção</a>
          </Link>
          <Link href="/.#contact">
            <a>Contato</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
 */
