import styles from "./TODOList.module.scss";
import React, { ChangeEvent, useState } from "react";
import { Task } from "./TODOList";
import { TODOsType } from "@/app/TODO-list/page";

interface Props extends Task {
  onChange: Function,
  TODOs: Array<TODOsType>,
  TODOOrder: number,
  key: string,
}


const TODOItem = (props: Props) => {
  const [text, setText] = useState(props.text);
  const [checked, setChecked] = useState(props.checked);
  
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    const newTODOs = props.TODOs;
    newTODOs[props.TODOOrder].tasks[props.order].text = event.target.value;
    props.onChange(newTODOs);    
  }
  const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    const newTODOs = props.TODOs;
    newTODOs[props.TODOOrder].tasks[props.order].checked = event.target.checked;
    props.onChange(newTODOs);
  }    
  const onDelete = (eventProps: Props) => {
    const newTODOs = props.TODOs;    
    newTODOs[props.TODOOrder].tasks = newTODOs[props.TODOOrder].tasks.filter((task) => task.id !== eventProps.id);
    console.log(newTODOs);
    
    return props.onChange(newTODOs);
  }

  
  return (
    <li className={styles.TODOList__task}>
      <input
        type="checkbox"
        name={props.text}
        id={props.id}
        className={styles.TODOList__checkbox}
        checked={checked}
        onChange={(event) => onChecked(event)}
      />
      <label htmlFor={props.id}>
        <input
          type="text"
          value={text}
          onChange={(event) => onInputChange(event)}
        />
      </label>
      <button onClick={() => onDelete(props)}>X</button>
    </li>
  );
};

export default TODOItem;
