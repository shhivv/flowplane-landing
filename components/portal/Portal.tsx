import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import '@mdxeditor/editor/style.css'


const EditorComp = dynamic(() => import('./Editor'), { ssr: false })

function readableTime(n: number) {
  let s = String(n);
  if (s.length === 1) {
    s = "0" + s;
  }
  return s;
}

export function PortalInfo() {
  const [time, setTime] = useState(new Date());

  setTimeout(() => {
    setTime(new Date());
  }, 500);
  return (
    <div className="flex text-foreground items-center justify-end px-4 h-full text-xs">
      {readableTime(time.getHours())}:{readableTime(time.getMinutes())}
    </div>
  );
}

export default function Portal(){
  return <div className="w-5/6 h-[500px] overflow-hidden relative card flex items-center justify-center p-[2px] rounded-lg">
      <div className="bg" />
      <div className="relative flex flex-col w-full h-full bg-card rounded-lg">
        <div className="overflow-y-hidden flex-1 p-8 font-sans" >
          <Suspense fallback={null}>
          <EditorComp/>

          </Suspense>
        </div>
        <div className="bg-primary/10 border-t border-border border-dashed rounded-b-lg h-14 flex items-center justify-end">
          <PortalInfo />
        </div>
      </div>
    </div>
}