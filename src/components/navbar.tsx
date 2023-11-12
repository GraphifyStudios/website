import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-4 py-3 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <Link
        href="/"
        className="flex items-center justify-center hover:opacity-50 transition-all"
      >
        <Image src="/logo.png" alt="Graphify Logo" width={40} height={42} />
      </Link>
      <div>
        <Link
          href="/rules"
          className="opacity-50 hover:opacity-100 hover:underline transition-all text-lg"
        >
          Chat Rules
        </Link>
      </div>
    </nav>
  );
}
