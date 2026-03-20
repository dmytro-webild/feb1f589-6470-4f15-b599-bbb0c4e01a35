"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Zap, CheckCircle, Sparkles } from "lucide-react";

export default function StarterTierPage() {
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
            { name: "Services", id: "/" },
            { name: "Process", id: "/" },
            { name: "For", id: "/" },
            { name: "Starter Tier", id: "/starter-tier" },
            { name: "Professional Tier", id: "/professional-tier" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Starter Tier - Ad Creative Bundle"
          description="Perfect for businesses just getting started with ad creative. Get fresh, conversion-focused ad variations every month to keep your campaigns competitive and engaging."
          background={{ variant: "sparkles-gradient" }}
          tag="$200/month"
          tagIcon={Zap}
          buttons={[
            { text: "Get Started with Starter", href: "#contact-form" },
            { text: "Back to Pricing", href: "/" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-modern-clean-website-design-mockup-dis-1773240171755-25981f6a.png?_wi=1"
          imageAlt="Starter tier ad creative overview"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="What's Included in Starter Tier"
          description="Everything you need to launch your first ad creative production cycle and start testing what works for your audience."
          tag="Tier Benefits"
          tagIcon={CheckCircle}
          features={[
            {
              id: 1,
              title: "4-6 Ad Variations",              description: "Multiple creative options each month with different visual styles and messaging angles to test what resonates with your audience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/illustration-showing-website-design-elem-1773240172578-a3c8c2d4.png"
            },
            {
              id: 2,
              title: "Multiple Hooks and Angles",              description: "Different opening statements and visual approaches to capture attention and drive engagement. Perfect for A/B testing.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-audience-targ-1773240173056-7ab9eeb8.png"
            },
            {
              id: 3,
              title: "Ready-to-Upload Specs",              description: "All creatives delivered in correct ad sizes and formats optimized for Facebook and Instagram. No technical adjustments needed.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/illustration-of-creative-content-product-1773240172341-89b17938.png"
            },
            {
              id: 4,
              title: "Primary Ad Copy & Headlines",              description: "Professionally written ad text and headlines tailored to your business, with variations to test different messaging angles.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-business-grow-1773240171504-de7950b3.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="ideal-for" data-section="ideal-for">
        <FeatureCardEight
          title="Ideal For"
          description="The Starter Tier is perfect if you're just beginning your ad creative journey and want to test what works before scaling up."
          tag="Best For"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Bootstrapping Startups",              description: "Get professional creative production at a lean budget. Test campaigns with limited ad spend while validating your market.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/professional-local-contractor-standing-n-1773326968021-51e00a46.png"
            },
            {
              id: 2,
              title: "Testing New Markets",              description: "Launching in a new niche or trying new audiences? Get fresh creative angles monthly to test different approaches.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/modern-barber-or-aesthetic-professional--1773327044104-512242e1.png"
            },
            {
              id: 3,
              title: "Service Businesses",              description: "Local service providers who need consistent fresh ads without the overhead of in-house creative production.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-modern-workspace-with-product-pack-1773327115199-5b2b44d1.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactSplitForm
          title="Start with Starter Tier"
          description="Tell us about your business and what you're looking to achieve with ad creative. We'll get you set up and start producing custom creatives tailored to your brand."
          inputs={[
            { name: "businessName", type: "text", placeholder: "Business Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "industry", type: "text", placeholder: "Industry or Service", required: true }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your current ad strategy and what you hope to achieve with monthly creative production...",            rows: 5,
            required: true
          }}
          buttonText="Get Started with Starter Tier"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-gorgeous-professional-website-mockup-d-1773240173927-fb2f8a9b.png?_wi=1"
          imageAlt="Starter tier signup"
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