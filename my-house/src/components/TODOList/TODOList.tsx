import styles from "./TODOList.module.scss";
import React from 'react'

interface Props {
  name: string,
}

const TODOList = (props: Props) => {
  return (
    <section className={styles.TODOList}>
        <header className={styles.TODOList__header}>
            <h3 className={styles.TODOList__name}>{props.name}</h3>
            <div className={styles.TODOList__settingsButton}>...</div>
        </header>
        <ul className={styles.TODOList__tasks}>
        <li className={styles.TODOList__task}>asdasd</li>
        <li className={styles.TODOList__task}>asda</li>
        <li className={styles.TODOList__task}>asda</li>
        <li className={styles.TODOList__task}>asda</li>
        <li className={styles.TODOList__task}>asda</li>
        </ul>
    </section>
  )
}

export default TODOList