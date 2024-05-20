import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaWindows, FaLinux, FaApple } from 'react-icons/fa';
import { APPLE, LINUX, WINDOWS } from "@/lib/downloadLinks";

export default function Download() {
  let icon =  <FaWindows size={20}/>
  let dld = WINDOWS;

  let userAgent = navigator.userAgent;

  if(userAgent.includes("Macintosh"))
  {
    icon = <FaApple/>
    dld = APPLE;
  } else if(userAgent.includes("Linux")) {
    icon = <FaLinux/>
    dld = LINUX;
  }

  const onClick = async () => {
    await fetch("/api/newDownload", {
      method: "POST",
      body: JSON.stringify({
        "info" : userAgent
      }),
    })
    
    setTimeout(() => {
      window.location.href = "https://discord.gg/uf3yzYbh3X"
    }, 3000)
  }
  return (
    <Button size="lg" className="" asChild>
      <Link  className="flex items-center space-x-2" href={dld} onClick={onClick}>
        {icon}
        <h1>Download</h1>
      </Link>
    </Button>
    )
}
