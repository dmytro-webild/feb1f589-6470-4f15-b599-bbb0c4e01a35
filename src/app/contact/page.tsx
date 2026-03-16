"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

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
        <ContactText
          text="See What's Possible for Your Business"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Get In Touch", onClick: () => console.log('Contact clicked') }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "#" },
                { label: "Services", href: "#" },
                { label: "Contact", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Convrsn. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}