import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="h-14 flex justify-between items-center">
          <Link href="/" className="font-semibold">
            Simple Blog
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 focus:ring-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Home
            </Link>
            <Link
              href="/new"
              className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 focus:ring-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Create New Post
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
