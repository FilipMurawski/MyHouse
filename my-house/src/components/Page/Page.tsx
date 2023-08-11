import React, { ReactElement } from "react";
import styles from "./Page.module.scss";

interface Props {
  name?: string;
  children?: ReactElement;
}

const Page = ({ children, name }: Props) => {
  return (
    <main className={styles.page}>
      {name && <h1 className={styles.page__h1}>{name}</h1>}
      {children}
    </main>
  );
};

export default Page;
