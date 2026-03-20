"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
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
          ctaTitle="Request Starter Plan"
          ctaDescription="Interested in our $200/mo ad creative package? Fill out the form below and we'll get back to you within 24 hours."
          ctaButton={{ text: "Request Starter Plan", href: "#" }}
          ctaIcon={MessageCircle}
          faqs={[
            {
              id: "1",              title: "What's included in the Starter Plan?",              content: "The Starter Plan includes 4-6 ad variations monthly with multiple hooks and angles, primary ad text and headlines, correct ad sizes and formats, and assets ready to upload. Perfect for businesses just getting started with paid advertising."
            },
            {
              id: "2",              title: "How often do I receive new creative?",              content: "New creative is delivered monthly, giving you fresh angles and variations to test different messaging and visual approaches with your audience."
            },
            {
              id: "3",              title: "Can I upgrade or downgrade anytime?",              content: "Yes, you can upgrade to our Professional or Growth plans at any time, or downgrade as needed. We offer flexible month-to-month billing."
            },
            {
              id: "4",              title: "What if I need revisions?",              content: "We include revision rounds in our service. Let us know what adjustments you need and we'll refine the creative to better match your vision."
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