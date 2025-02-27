import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-24 pb-20 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-alexa-blue mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Project Not Found</h2>
        <p className="text-muted max-w-md mx-auto mb-8">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background py-2 px-6 rounded-lg hover:bg-alexa-blue transition-colors"
          >
            View All Projects
          </Link>
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-border py-2 px-6 rounded-lg hover:border-alexa-blue hover:text-alexa-blue transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}