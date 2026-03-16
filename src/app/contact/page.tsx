"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplit from '@/components/sections/contact/ContactSplit';
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
        <ContactSplit
          tag="Get In Touch"
          title="Let's Talk About Your Project"
          description="We'd love to hear from you. Reach out to us directly with any questions or to discuss how we can help grow your business."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-modern-clean-website-design-mockup-dis-1773240171755-25981f6a.png?_wi=2"
          imageAlt="Contact form illustration"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Send Message"
          termsText="By contacting us, you agree to our Terms and Conditions."
          onSubmit={(email) => console.log('Contact form submitted:', email)}
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
          copyrightText="© 2026 Convrsn. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}