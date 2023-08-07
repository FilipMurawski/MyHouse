import React, { FunctionComponent, ReactElement } from 'react';
import styles from "./Page.module.scss";

interface PageProps {
    name: string,
    children?: ReactElement,
}

const Page: FunctionComponent<PageProps> = ({children, name}) => {
  return (
    <main className={styles.page}>
    <h1 className={styles.page__h1}>{name}</h1>
    {children}
  </main>
  )
}

export default Page