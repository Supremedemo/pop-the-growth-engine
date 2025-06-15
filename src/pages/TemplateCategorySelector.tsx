
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Popcorn, Mail, Layers } from "lucide-react"; // Use correct PascalCase icon names
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "pops",
    title: "Pops",
    icon: Popcorn,
    description: "Gamified templates to boost engagement (Spin the Wheel, Trivia, Scratch Card, and more).",
    route: "/template-gallery/pops",
    image: "/lovable-uploads/01b275f3-962e-49f3-bc04-9696b715d718.png"
  },
  {
    id: "emails",
    title: "Emails",
    icon: Mail,
    description: "Beautiful, drag-and-drop editable email templates for your campaigns.",
    route: "/template-gallery/emails",
    image: undefined,
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    icon: Layers,
    description: "Full-page campaign microsites & lead capture landing pages.",
    route: "/template-gallery/landing-pages",
    image: undefined,
  }
];

export const TemplateCategorySelector = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-16 animate-fade-in">
      <h1 className="text-3xl font-bold mb-2 text-center text-foreground">
        Choose a Template Type
      </h1>
      <p className="mb-8 text-muted-foreground text-center max-w-screen-sm">
        What would you like to create today? Select a template category to explore our best-in-class designs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {categories.map(({ id, title, icon: LucideIcon, description, route, image }) => (
          <Card
            key={id}
            className={cn(
              "relative cursor-pointer hover-scale shadow-lg group transition-all border-primary/10 hover:ring-2 ring-primary bg-gradient-to-br from-card to-accent/30",
              "focus-within:ring-2 focus-within:ring-primary"
            )}
            tabIndex={0}
            onClick={() => navigate(route)}
            onKeyPress={e => (e.key === "Enter" ? navigate(route) : undefined)}
          >
            <CardContent className="p-7 flex flex-col items-center transition-colors">
              <div className="mb-4">
                {image ? (
                  <img src={image} alt={title} className="w-16 h-16 rounded-lg shadow object-cover" />
                ) : (
                  <LucideIcon className="w-14 h-14 mb-1 text-primary group-hover:text-accent transition" />
                )}
              </div>
              <h2 className="text-xl font-bold mb-2 text-primary text-center">{title}</h2>
              <p className="text-base text-muted-foreground text-center mb-6">{description}</p>
              <Button
                variant="outline"
                className="mt-auto transition hover:bg-primary hover:text-primary-foreground border-0 ring-1 ring-border/50"
                tabIndex={-1}
              >
                Browse {title}
              </Button>
            </CardContent>
            <span className="pointer-events-none absolute inset-0 ring-0 ring-primary group-hover:ring-4 opacity-10 rounded-xl transition"></span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateCategorySelector;
