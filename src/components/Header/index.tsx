import Link from "next/link";
export const Header = ({ blogName }: { blogName: string }) => {
  return (
    <header className="py-5  bg-black">
      <div className="flex justify-between text-white">
        <Link href={"/"}>
          <div className="text-2xl flex pl-2">
            <div className="flex items-center pl-2"> {blogName}</div>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link href={"/category"}>Category</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </header>
  );
};
