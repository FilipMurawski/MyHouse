import Page from "@/components/Page/Page";
import TODOList from "@/components/TODOList/TODOList";


export default function Home() {
  return (
<Page children={
<>
<TODOList name="Zakupy"/>
<TODOList name="Zakupy"/>
</>
}/>
  );
}