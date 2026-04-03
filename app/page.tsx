import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <Link href="/practice1" className="text-2xl text-blue-500 hover:underline">
        Go to Practice 1
      </Link>

      <Link href="/practice2" className="text-2xl text-blue-500 hover:underline">
        Go to Practice 2
      </Link>

      <Link href="/practice3" className="text-2xl text-blue-500 hover:underline">
        Go to Practice 3
      </Link>

      <Link href="/css/study1" className="text-2xl text-blue-500 hover:underline">
        Go to CSS study1
      </Link>

      <Link href="/redux1" className="text-2xl text-blue-500 hover:underline">
        redux1 study
      </Link>
    </div>
  );
}
