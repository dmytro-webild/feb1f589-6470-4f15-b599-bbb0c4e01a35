"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Mail } from "lucide-react";

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
            { name: "About", id: "about" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          tag="Get In Touch"
          tagIcon={Mail}
          title="See What's Possible for Your Business "
          description="Ready to grow your business? Share your information and let's schedule a call to discuss your needs. Whether you're looking for a website, ads management, creative production, or a complete customer acquisition system."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          onSubmit={(formData) => console.log('Contact form submitted:', formData)}
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