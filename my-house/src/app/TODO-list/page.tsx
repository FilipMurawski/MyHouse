"use client";

import Page from "@/components/Page/Page";
import TODOList from "@/components/TODOList/TODOList";
import data from "@/app/TODOs.json";
import { useState } from "react";

export default function Home() {
  const [TODOs, setTODOs] = useState(data.TODOs);
  console.log(TODOs);

  return (
    <Page
      children={
        <>
          {TODOs?.map((TODO) => (
            <TODOList
              name={TODO.name}
              order={TODO.order}
              tasks={TODO.tasks}
              key={TODO.key}
            />
          ))}
        </>
      }
    />
  );
}
