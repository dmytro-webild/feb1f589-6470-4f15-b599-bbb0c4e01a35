"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { DollarSign, Sparkles, Star, Zap, Rocket } from "lucide-react";

export default function PricingPage() {
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
            { name: "Pricing", id: "/pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Ad Creative Pricing"
          description="Professional monthly ad creative packages to keep your campaigns fresh and competitive. These plans cover ad creative production only. For website design and Meta ads management, please contact us for a custom quote or book a strategy call."
          tag="Transparent Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",              price: "$200/mo",              subtitle: "Fresh creative angles monthly",              buttons: [{ text: "Get Started", href: "/contact" }],
              features: ["4-6 ad variations", "Multiple hooks and angles", "Primary ad text and headlines", "Correct ad sizes and formats", "Ready to upload"]
            },
            {
              id: "professional",              price: "$350/mo",              subtitle: "Comprehensive creative support",              buttons: [{ text: "Get Started", href: "/contact" }],
              features: ["8-12 ad variations", "Diverse visual angles", "Copy testing variations", "Multiple formats and sizes", "Platform-optimized specs", "Priority support"]
            },
            {
              id: "enterprise",              price: "$500/mo",              subtitle: "Maximum creative output and strategy",              buttons: [{ text: "Get Started", href: "/contact" }],
              features: ["15+ ad variations monthly", "A/B testing frameworks", "Video and static assets", "Campaign-specific creative", "Unlimited revisions", "Dedicated creative support"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing-nine" data-section="pricing-nine">
        <PricingCardNine
          title="Service Packages"
          description="Comprehensive solutions tailored to your business needs with flexible pricing options."
          tag="Our Services"
          tagIcon={DollarSign}
          plans={[
            {
              id: "website",              price: "Starting at $2,500",              subtitle: "High-converting website design",              buttons: [{ text: "Learn More", href: "/contact" }],
              features: ["24-72 hour delivery", "Mobile optimized", "Lead capture forms", "Click-to-call buttons", "SEO ready"]
            },
            {
              id: "ads",              price: "Starting at $1,000",              subtitle: "Strategic Facebook & Instagram ads",              buttons: [{ text: "Learn More", href: "/contact" }],
              features: ["Audience research", "Campaign setup", "Lead optimization", "Performance tracking", "Monthly reporting"]
            },
            {
              id: "creative",              price: "Starting at $200/mo",              subtitle: "Professional monthly ad creative",              buttons: [{ text: "Learn More", href: "/contact" }],
              features: ["Multiple variations", "Various formats", "Copy testing", "Platform specs", "Ready to launch"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Grow?"
          tagIcon={Rocket}
          title="Start Getting More Customers Today"
          description="Let's discuss your customer acquisition goals and build a strategy that brings you results. Whether you need a website, ads, creative, or a complete system, we're ready to help."
          buttons={[
            { text: "Request Your Free Demo Website", href: "/contact" },
            { text: "Schedule a Call", href: "/contact" }
          ]}
          background={{ variant: "sparkles-gradient" }}
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