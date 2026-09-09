import React from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

interface PricingSinglePlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period?: { monthly: string; yearly: string };
  features: string[];
  button: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
  featureListLabel?: string;
  image?: string;
  badge?: string;
  priceNote?: string;
}

interface PricingSingleProps {
  heading: string;
  description: string;
  plan: PricingSinglePlan;
  className?: string;
  id?: string;
}

interface Pricing6Props extends PricingSingleProps {
  /** Grouped features rendered as separated sections instead of a flat list. */
  featureGroups?: string[][];
}
type Props = Partial<Pricing6Props>;

const defaultProps: Pricing6Props = {
  heading: "Our Pricing",
  description: "One plan with the tools you need to ship interfaces faster.",
  plan: {
    name: "Pro",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
    description:
      "For individual developers and side projects shipping real interfaces.",
    monthlyPrice: "$49",
    yearlyPrice: "$129",
    period: { monthly: "/month", yearly: "/year" },
    badge: "Most popular",
    featureListLabel: "Includes",
    features: [
      "Up to 5 team members",
      "Advanced components library",
      "Priority support",
      "2GB storage space",
      "Team collaboration",
      "Custom branding",
    ],
    button: {
      text: "Get started",
      url: "#",
    },
    secondaryButton: {
      text: "Talk to sales",
      url: "#",
    },
  },
  featureGroups: [
    ["Unlimited", "Integrations", "24/7 support"],
    ["Live collaborations", "Unlimited storage", "30-day money back"],
    ["Unlimited members", "Customization", "Unlimited users"],
  ],
};

const Pricing6 = (props: Props) => {
  const { heading, description, plan, featureGroups, className, id } = {
    ...defaultProps,
    ...props,
  };
  const periodMonthly = plan.period?.monthly ?? "/mo";
  const isInternalLink = plan.button.url.startsWith("#");

  return (
    <section id={id ?? "pricing"} className={cn("py-24 sm:py-32 border-t border-border", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty lg:text-5xl font-heading text-foreground">
            {heading}
          </h2>
          <p className="max-w-md text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="mx-auto mt-4 flex w-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 sm:w-fit sm:min-w-[26rem] shadow-sm">
            <div className="flex justify-center items-baseline">
              <span className="text-lg font-semibold text-foreground">$</span>
              <span className="text-6xl font-medium tracking-tighter lg:text-7xl text-foreground font-heading">
                {plan.monthlyPrice.replace(/^\$/, "")}
              </span>
              <span className="self-end text-muted-foreground text-sm font-medium ml-1">
                {periodMonthly}
              </span>
            </div>
            <div className="my-6">
              {(featureGroups ?? [plan.features]).map((featureGroup, idx) => (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    {featureGroup.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between gap-4 text-sm font-medium text-foreground text-left"
                      >
                        <span>{feature}</span>
                        <Check className="inline size-4 shrink-0 text-primary" />
                      </li>
                    ))}
                  </ul>
                  {idx < (featureGroups ?? [plan.features]).length - 1 && (
                    <Separator className="my-6" />
                  )}
                </div>
              ))}
            </div>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 shadow-md transition-all active:scale-[0.98]"
            >
              <a
                href={plan.button.url}
                target={isInternalLink ? undefined : "_blank"}
                rel={isInternalLink ? undefined : "noreferrer"}
              >
                {plan.button.text}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing6 };
