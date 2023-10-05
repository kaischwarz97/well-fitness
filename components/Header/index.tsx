import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__top}>
          <div className={styles.header__left}>
            <div className={styles.header__logoWrapper}>
              <Image
                src={"logo.svg"}
                width={280}
                height={29}
                alt="логотип"
                priority={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
