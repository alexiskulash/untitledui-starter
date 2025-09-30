import { Cube01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";

export const ComponentsExamplePage = () => {
    return (
        <section className="flex flex-col gap-6">
            <header className="flex items-center gap-3">
                <Cube01 className="size-6 text-fg-brand-primary" />
                <h1 className="text-display-sm font-semibold text-primary">Components example</h1>
            </header>

            <p className="text-lg text-tertiary">A simple showcase using components from this starter kit.</p>

            <div className="flex flex-wrap items-center gap-3">
                <Button size="lg">Primary Button</Button>
                <Button color="secondary" size="lg">Secondary Button</Button>
                <Badge type="modern" color="success">Success</Badge>
                <Badge type="modern" color="warning">Warning</Badge>
            </div>
        </section>
    );
};
