"use client"

import styles from "./TODOList.module.scss";
import React from 'react'

interface Task {
  order: number,
  id: string,
  text: string
}
interface Props {
  name: string,
  order: number,
  tasks: Array<Task>,
  id: string
}

const TODOList = (props: Props) => {
  return (
    <section className={styles.TODOList}>
        <header className={styles.TODOList__header}>
            <h3 className={styles.TODOList__name}>{props.name}</h3>
            <div className={styles.TODOList__settingsButton}>...</div>
        </header>
        <ul className={styles.TODOList__tasks}>
        {props.tasks?.map((task) => <li id={task.id} className={styles.TODOList__task}>{task.text}</li>)}
        </ul>
    </section>
  )
}

export default TODOList