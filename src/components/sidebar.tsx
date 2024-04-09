import { UserDev } from "@/types/devArticle";
import Image from "next/image";

export default async function Aside() {
  const user: UserDev = await fetch("https://dev.to/api/users/me", {
    headers: { "api-key": process.env.DEV_TO_API_KEY || "" },
  }).then((res) => res.json());

  return (
    <aside className="hidden md:block">
      <div className="flex mb-2">
        <hr className="flex-1 my-auto mr-3 h-px bg-gray-300 border-0"></hr>
        <h4 className="text-xs uppercase">Hello</h4>
        <hr className="flex-1 my-auto ml-3 h-px bg-gray-300 border-0"></hr>
      </div>
      {/* <div className="flex justify-center my-4">
        <Image
          src={user.profile_image}
          alt="profile image"
          className="rounded-full h-auto w-full"
          sizes="100vw"
          height={0}
          width={0}
        />
      </div> */}
        <p className="text-sm">Explora el mundo del frontend y la tecnología en Bearpoint.
          Descubre las últimas tendencias, tutoriales prácticos y análisis
          profundos para potenciar tus habilidades y conocimientos. Únete a
          nuestra comunidad y lleva tu desarrollo digital al siguiente nivel.
        </p>
      <div className="flex pt-4">
        <hr className="flex-1 my-auto mr-3 h-px bg-gray-300 border-0"></hr>
        <h4 className="text-xs uppercase">get Social</h4>
        <hr className="flex-1 my-auto ml-3 h-px bg-gray-300 border-0"></hr>
      </div>
    </aside>
  );
}
