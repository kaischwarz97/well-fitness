import React from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "../Container";
import styles from "./page.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__info}>
          <div className={styles.header__infoLeft}>
            <Link className={styles.header__logoWrapper} href={"/"}>
              <Image src={"logo.svg"} fill alt={"logo"} priority={true} />
            </Link>
            <div className={styles.header__choiceLocation}>
              <div className={styles.header__choiceCityName}>Москва</div>
              <div className={styles.header__choiceCityArrow}></div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
