import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Link href="/" className="font-headline text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
          The Digital Curator
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link
            href="/properties"
            className="font-headline text-lg tracking-tight text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
          >
            Properties
          </Link>
          <Link
            href="/services"
            className="font-headline text-lg tracking-tight text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="font-headline text-lg tracking-tight text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-headline text-lg tracking-tight text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
          <div className="ml-4 flex items-center gap-4">
            <Link href="/login">
              <span className="material-symbols-outlined text-on-surface cursor-pointer">person</span>
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </nav>
  );
}
