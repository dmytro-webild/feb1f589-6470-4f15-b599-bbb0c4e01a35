"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function EnterprisePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="compact"
      sizing="mediumLarge"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Convrsn"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Process", id: "process" },
            { name: "For", id: "for" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Enterprise Plan Contact"
          ctaDescription="Our $500/mo Enterprise Plan is designed for scaling brands that need maximum creative output and strategic support. Let's discuss how we can fuel your growth."
          ctaButton={{ text: "Send Message", href: "#" }}
          ctaIcon={MessageCircle}
          faqs={[
            {
              id: "1",              title: "What's included in the Enterprise Plan?",              content: "The Enterprise Plan includes 15+ ad variations monthly, A/B testing frameworks, both video and static assets, campaign-specific creative tailored to your offer and audience, dedicated creative support, and structured revision rounds included. This is our premium offering for brands serious about scaling."
            },
            {
              id: "2",              title: "Do you create video content?",              content: "Yes, the Enterprise Plan includes video and static assets. We produce professional video ads alongside static creative to give you diverse formats for testing and optimization."
            },
            {
              id: "3",              title: "What does A/B testing framework mean?",              content: "We structure your creative with A/B testing in mind, providing variations that test different hooks, angles, headlines, and visuals. This helps you identify what resonates best with your audience and optimize your ad spend."
            },
            {
              id: "4",              title: "How does dedicated support work?",              content: "You get a dedicated creative team member who understands your business, audience, and goals. They're your point of contact for faster turnarounds, strategic recommendations, and priority revision rounds."
            },
            {
              id: "5",              title: "Can creative be tailored to specific campaigns?",              content: "Absolutely. With the Enterprise Plan, we create campaign-specific creative tailored to your particular offer and target audience. Every variation is strategically designed for maximum impact."
            }
          ]}
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Convrsn"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Terms of Service", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
