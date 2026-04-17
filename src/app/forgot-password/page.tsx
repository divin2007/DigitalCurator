import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-8 max-w-xl mx-auto min-h-screen">
        <h1 className="font-headline text-5xl mb-8">Password Recovery</h1>
        <p className="font-body text-on-secondary-container mb-12 text-lg">
          Enter the email address associated with your account, and we will send you instructions to reset your password.
        </p>
        <form className="space-y-12">
          <div className="relative group">
            <label className="font-label text-[0.75rem] text-neutral-400 mb-1 block uppercase tracking-widest" htmlFor="email">Email Address</label>
            <input
              className="w-full bg-transparent border-0 border-b border-neutral-300 py-3 px-0 focus:ring-0 focus:border-neutral-800 font-body text-on-background transition-all placeholder:text-neutral-200"
              id="email"
              name="email"
              placeholder="john.dean@gmail.com"
              type="email"
            />
          </div>
          <div className="pt-6">
            <Button className="w-full">Reset Password</Button>
          </div>
        </form>
        <div className="mt-12 text-center">
          <Link href="/login" className="font-body text-sm text-primary hover:underline underline-offset-4">
            Back to Login
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
