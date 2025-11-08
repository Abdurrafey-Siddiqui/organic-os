import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQSection() {
  const items: FaqItem[] = [
    {
      id: "faq-1",
      question: "How long does it take to see results?",
      answer:
        "Some of our clients have generated millions of views within the first few weeks. Authority building is a longer-term game, but with our proven system, you'll start seeing traction quickly — and momentum compounds over time.",
    },
    {
      id: "faq-2",
      question: "What's your content production process?",
      answer:
        "We handle everything: strategy, filming, editing, hooks, storytelling, posting, and growth. You show up for filming sessions, and we take care of the rest. It's a true done-for-you system.",
    },
    {
      id: "faq-3",
      question: "Do I need to have an existing audience to work with you?",
      answer:
        "Not at all. We've helped clients go from zero to millions of views and thousands of leads. Whether you're starting from scratch or already have traction, we build systems that scale.",
    },
    {
      id: "faq-4",
      question: "How is OrganicOS different from other content agencies?",
      answer:
        "Most agencies deliver content. We deliver outcomes. We're not just a service provider — we're your media partner. We handle strategy, videography, editing, posting, AND connect everything to revenue-driving funnels. Plus, we think like owners, not vendors.",
    },
    {
      id: "faq-5",
      question: "What industries do you work with?",
      answer:
        "We specialize in real estate, finance, automotive, tech, and entrepreneurship — but we've achieved success across 5+ industries. If you're an entrepreneur, thought leader, or brand looking to build authority and inbound demand, we can help.",
    },
    {
      id: "faq-6",
      question: "Do you only work with clients in the UAE?",
      answer:
        "Our primary focus is the UAE and Saudi Arabia, but we work with clients internationally. We're willing to fly out for projects anywhere in the world if the partnership is the right fit.",
    },
  ];

  return (
    <section className="py-20 md:py-32 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Questions?{" "}
              <span className="text-primary">We've Got Answers.</span>
            </h2>
          </div>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold text-foreground text-2xl pb-8 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
