import { CtaButton } from "./CtaButton";

const testimonials = [
  {
    quote: "I can finally have my browser open while gaming without worrying about frame drops. The CPU limiter is a game-changer.",
    name: "Alex M.",
    context: "Illustrative user feedback",
  },
  {
    quote: "Switched from my old browser and immediately noticed smoother gameplay. The RAM controls really work.",
    name: "Jordan K.",
    context: "Illustrative user feedback",
  },
  {
    quote: "Simple to set up and the dark theme looks great with my setup. Feels like it was made for gamers.",
    name: "Sam T.",
    context: "Illustrative user feedback",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            What Gamers Are Saying
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            * Illustrative feedback representing typical user experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground mb-4">
                "{testimonial.quote}"
              </p>
              <div className="text-sm">
                <span className="text-foreground font-medium">{testimonial.name}</span>
                <span className="text-muted-foreground"> · {testimonial.context}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
