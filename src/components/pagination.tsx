import Link from "next/link";

export default function Pagination({ page }: { page: number }) {
  return (
    <div className="text-[#09f]  font-bold">
      {page > 1 ? (
        <Link href={`/page/${page - 1}`} className="p-2 m-0">
          <i className="border-solid border-[2px] border-t-0 border-l-0 inline-block mx-1 p-1 rotate-[135deg] border-[#09f]"></i>
          Articulos Antoeriores
        </Link>
      ) : null}
      {page < 4 ? (
        <Link href={`/page/${page + 1}`} className="p-2 m-0">
          Acrticulos Mas Recientes
          <i className="border-solid border-[2px] border-t-0 border-l-0 inline-block mx-1 p-1 -rotate-45 border-[#09f]"></i>
        </Link>
      ) : null}
    </div>
  );
}
