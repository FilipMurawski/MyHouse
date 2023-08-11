import { TODOsType } from "@/app/TODO-list/page";
import TODOItem from "./TODOItem";
import styles from "./TODOList.module.scss";
import React from "react";

export interface Task {
  order: number;
  text: string;
  checked: boolean;
  id: string;
}
export interface Props extends TODOsType{
  onChange: Function;
  TODOs: Array<TODOsType>
  key: string;
}



const TODOList = ({name, onChange, TODOs, tasks, order}: Props) => {
  return (
    <section className={styles.TODOList}>
      <header className={styles.TODOList__header}>
        <h3 className={styles.TODOList__name}>{name}</h3>
        <div className={styles.TODOList__settingsButton}>...</div>
      </header>
      <ul className={styles.TODOList__tasks}>
        {tasks?.map((task) => (
          <TODOItem
            order={task.order}
            key={task.id}
            text={task.text}
            checked={task.checked}
            onChange={onChange}
            TODOs = {TODOs}
            TODOOrder = {order}
            id={task.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default TODOList;
