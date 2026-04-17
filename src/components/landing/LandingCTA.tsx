import Button from "@/components/ui/Button";

export default function LandingCTA() {
  return (
    <section className="mt-32 bg-surface-container-highest p-12 md:p-20 text-center rounded-sm max-w-screen-2xl mx-auto mb-24">
      <h2 className="font-headline text-4xl md:text-5xl mb-8">Ready to define your legacy?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <Button variant="dark" href="/contact">Request a Consultation</Button>
        <Button variant="outline" href="/guide">Download Guide</Button>
      </div>
    </section>
  );
}
