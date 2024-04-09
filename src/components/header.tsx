import Image from "next/image";
import Link from "next/link";
import ToggleTheme from "./toggleTheme";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h-20 max-w-5xl mx-auto">
        <div>
          <Link href="/" className="flex items-center">
              <Image
                src="/bear.png"
                alt={"logo"}
                width={40}
                height={40}
              />
              <span className="pl-[10px]">Bearpoint</span>
          </Link>
        </div>
        <div>
          <ToggleTheme/>
        </div>
      </div>
    </header>
  );
}
