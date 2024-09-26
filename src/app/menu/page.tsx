import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <div className="top-20 right-0 z-10 w-full fixed ">
        <div className="container mx-auto px-4 text-left">
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="text-black max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl hover:underline"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-black max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-black max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
