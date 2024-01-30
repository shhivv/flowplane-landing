import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaWindows, FaLinux, FaApple } from 'react-icons/fa';

export default function Download() {
  let icon =  <FaWindows size={20}/>
  let dld = "https://github.com/shhivv/flowplane/releases/download/app-v0.1.2/Flowplane_0.1.2_x64_en-US.msi"

  let userAgent = navigator.userAgent;

  if(userAgent.includes("Macintosh"))
  {
    icon = <FaApple/>
    dld = "https://github.com/shhivv/flowplane/releases/download/app-v0.1.2/Flowplane_0.1.2_x64.dmg"
  } else if(userAgent.includes("Linux")) {
    icon = <FaLinux/>
    dld = "https://github.com/shhivv/flowplane/releases/download/app-v0.1.2/Flowplane_0.1.2_amd64.AppImage"
  }

  const onClick = async () => {
    await fetch("/api/newDownload", {
      method: "POST",
      body: JSON.stringify({
        "info" : userAgent
      }),
    })
    
    setTimeout(() => {
      window.location.href = "https://discord.gg/3dxcH7byTG"
    }, 3000)
  }
  return (
    <Button size="lg" asChild>
      <Link  className="flex items-center space-x-2" href={dld} onClick={onClick}>
        {icon}
        <h1>Download</h1>
      </Link>
    </Button>
    )
}
