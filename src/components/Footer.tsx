import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-zinc-900 dark:bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="font-headline text-xl font-bold text-white mb-2">The Digital Curator</div>
          <p className="font-headline text-sm tracking-wide text-zinc-400">© 2024 The Digital Curator. Curating Rwandan Legacies.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link
            className="font-headline text-sm tracking-wide text-zinc-400 hover:text-white transition-all opacity-80 hover:opacity-100"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            className="font-headline text-sm tracking-wide text-zinc-400 hover:text-white transition-all opacity-80 hover:opacity-100"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="font-headline text-sm tracking-wide text-zinc-400 hover:text-white transition-all opacity-80 hover:opacity-100"
            href="/guide"
          >
            Investment Guide
          </Link>
          <Link
            className="font-headline text-sm tracking-wide text-zinc-400 hover:text-white transition-all opacity-80 hover:opacity-100"
            href="/press"
          >
            Press
          </Link>
        </div>
      </div>
    </footer>
  );
}
