import { Button } from "@/components/ui/button";
import { DarkmodeToggle } from "@/components/ui/common/darkmode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button>Hello</Button>
      <DarkmodeToggle />
    </div>
  );
}
