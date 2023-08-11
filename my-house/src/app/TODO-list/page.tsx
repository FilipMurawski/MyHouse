"use client";

import TODOList, { Task } from "@/components/TODOList/TODOList";
import data from "@/app/TODOs.json";
import { useState } from "react";
import styles from "@/components/Page/Page.module.scss"

export interface TODOsType {
  name: string;
  order: number;
  tasks: Array<Task>;
  id: string;
}

export default function Home() {
  const [TODOs, setTODOs] = useState(data.TODOs);
  const setNewTODOs = (NewTODOs: Array<TODOsType>) => {
    setTODOs(NewTODOs)    
  }
  return (
    <main className={styles.page}>
      <>
          {TODOs?.map((TODO) => (
            <TODOList
              name={TODO.name}
              order={TODO.order}
              tasks={TODO.tasks}
              key={TODO.id}
              onChange={setNewTODOs}
              TODOs = {TODOs}
              id={TODO.id}
            />
          ))}
        </>
    </main>
  );
}
