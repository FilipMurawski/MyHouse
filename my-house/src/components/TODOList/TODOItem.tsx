import styles from "./TODOList.module.scss";
import React, { useState } from "react";
import { Task } from "./TODOList";

const TODOItem = (props: Task) => {
  const [text, setText] = useState(props.text);
  const [checked, setChecked] = useState(props.checked);
  const onDeleteTask = () => {};

  return (
    <li className={styles.TODOList__task}>
      <input
        type="checkbox"
        name={props.text}
        id={props.key}
        className={styles.TODOList__checkbox}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
      <label htmlFor={props.key}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button onClick={onDeleteTask}>X</button>
    </li>
  );
};

export default TODOItem;
