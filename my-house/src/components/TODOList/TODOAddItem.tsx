import { TODOsType } from "@/app/TODO-list/page";
import styles from "./TODOList.module.scss";
import React, { useState } from "react";
// import randomID from "random-id";

interface Props {
onSubmit: Function
TODOs: Array<TODOsType>
TODOOrder: number
}
const TODOAddItem = (props: Props) => {
const [text, setText] = useState("");

const submit = () => {
    const newTODOs = props.TODOs;
    const lastOrder = 
    newTODOs[props.TODOOrder].tasks.push({id: randomID, order: })
}
  return (
    <li className={styles.TODOList__AddItem}>
        <form>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
            <button type="submit" onSubmit={submit}>+</button>
        </form>
    </li>
  );
};

export default TODOAddItem;
