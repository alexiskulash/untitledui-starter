import { BookOpen01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const GettingStartedPage = () => {
    return (
        <section className="flex flex-col gap-6">
            <header className="flex items-center gap-3">
                <BookOpen01 className="size-6 text-fg-brand-primary" />
                <h1 className="text-display-sm font-semibold text-primary">Getting started</h1>
            </header>

            <p className="text-lg text-tertiary">
                This is an example page. Use it as a reference for registering routes and composing layouts with the application shell.
            </p>

            <div className="flex gap-3">
                <Button href="/" size="lg">Go to Home</Button>
                <Button href="/components" color="secondary" size="lg">View Components</Button>
            </div>
        </section>
    );
};
