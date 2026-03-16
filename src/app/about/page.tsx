"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Sparkles } from "lucide-react";

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

      <div id="demo-website" data-section="demo-website">
        <MetricSplitMediaAbout
          tag="Low-Friction Path to Results"
          tagIcon={Sparkles}
          title="See a Free Demo Website for Your Business"
          description="We'll create a quick demo website concept tailored to your business to show you what's possible. No commitment needed. Just give us your business name and city, we'll build a sample website in our style, and walk you through it. See your potential before deciding to move forward."
          metrics={[
            { value: "24-48 hrs", title: "Turnaround Time" },
            { value: "Free", title: "Demo Website" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-gorgeous-professional-website-mockup-d-1773240173927-fb2f8a9b.png?_wi=1"
          imageAlt="Demo website preview mockup"
          useInvertedBackground={true}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
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