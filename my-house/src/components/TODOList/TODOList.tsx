import TODOItem from "./TODOItem";
import styles from "./TODOList.module.scss";
import React from "react";

export interface Task {
  order: number;
  key: string;
  text: string;
  checked: boolean;
}
interface Props {
  name: string;
  order: number;
  tasks: Array<Task>;
  key: string;
}

const TODOList = (props: Props) => {
  return (
    <section className={styles.TODOList}>
      <header className={styles.TODOList__header}>
        <h3 className={styles.TODOList__name}>{props.name}</h3>
        <div className={styles.TODOList__settingsButton}>...</div>
      </header>
      <ul className={styles.TODOList__tasks}>
        {props.tasks?.map((task) => (
          <TODOItem
            order={task.order}
            key={task.key}
            text={task.text}
            checked={task.checked}
          />
        ))}
      </ul>
    </section>
  );
};

export default TODOList;
