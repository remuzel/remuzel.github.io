import Link from "next/link";
import { ERRORS, NAV } from "@/constants/strings";

export default function NotFound() {
  return (
    <main className="pt-24 pb-20 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-alexa-blue mb-4">{ERRORS.notFound.code}</h1>
        <h2 className="text-2xl font-semibold mb-6">{ERRORS.notFound.title}</h2>
        <p className="text-muted max-w-md mx-auto mb-8">
          {ERRORS.notFound.message}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background py-2 px-6 rounded-lg hover:bg-alexa-blue transition-colors"
          >
            {NAV.viewAllProjects}
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-border py-2 px-6 rounded-lg hover:border-alexa-blue hover:text-alexa-blue transition-colors"
          >
            {NAV.backToHome}
          </Link>
        </div>
      </div>
    </main>
  );
}