"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function AboutPage() {
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
          ctaTitle="Professional Plan Contact"
          ctaDescription="Ready for comprehensive creative support? Our $350/mo Professional Plan is designed for businesses scaling their ad campaigns. Get in touch to learn more."
          ctaButton={{ text: "Send Message", href: "#" }}
          ctaIcon={MessageCircle}
          faqs={[
            {
              id: "1",              title: "What's included in the Professional Plan?",              content: "The Professional Plan includes 8-12 ad variations monthly, diverse visual angles, copy testing variations, multiple formats and sizes, platform-optimized specifications, and priority support. This is our most popular plan for growing businesses."
            },
            {
              id: "2",              title: "How is this different from the Starter Plan?",              content: "The Professional Plan offers double the creative output, more diverse visual approaches, built-in copy variations for A/B testing, and priority support to ensure your creative needs are always met quickly."
            },
            {
              id: "3",              title: "Do you provide platform optimization?",              content: "Yes, all creative is optimized for platform specifications. We ensure every ad is formatted correctly for Facebook, Instagram, Reels, and other Meta platforms."
            },
            {
              id: "4",              title: "Can I request specific creative themes?",              content: "Absolutely. We work with you to understand your campaign goals and audience, then tailor creative themes and hooks to maximize your ad performance."
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
