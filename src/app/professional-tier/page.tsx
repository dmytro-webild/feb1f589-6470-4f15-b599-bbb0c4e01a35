"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Zap, CheckCircle, Sparkles } from "lucide-react";

export default function ProfessionalTierPage() {
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
          title="Professional Tier - Ad Creative Bundle"
          description="Our most popular package for growing brands. Get comprehensive ad creative support with double the variations, copy testing, and priority support to scale your campaigns."
          background={{ variant: "sparkles-gradient" }}
          tag="$350/month"
          tagIcon={Zap}
          buttons={[
            { text: "Get Started with Professional", href: "#contact-form" },
            { text: "Back to Pricing", href: "/" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-modern-clean-website-design-mockup-dis-1773240171755-25981f6a.png?_wi=1"
          imageAlt="Professional tier ad creative overview"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="What's Included in Professional Tier"
          description="Double the creative output, comprehensive testing frameworks, and priority support to help you scale your ad campaigns confidently."
          tag="Tier Benefits"
          tagIcon={CheckCircle}
          features={[
            {
              id: 1,
              title: "8-12 Ad Variations Monthly",              description: "Nearly double the creative options from Starter. Get more testing possibilities and maintain campaign freshness across multiple audience segments.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/illustration-showing-website-design-elem-1773240172578-a3c8c2d4.png"
            },
            {
              id: 2,
              title: "Diverse Visual Angles",              description: "Multiple photography styles, design approaches, and visual treatments to appeal to different audience segments and preferences.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-audience-targ-1773240173056-7ab9eeb8.png"
            },
            {
              id: 3,
              title: "Copy Testing Variations",              description: "Multiple ad copy and headline variations designed to test different value propositions, pain points, and CTAs with your audience.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/illustration-of-creative-content-product-1773240172341-89b17938.png"
            },
            {
              id: 4,
              title: "Platform-Optimized Specs",              description: "Creatives optimized for all major ad platforms and placements. Facebook, Instagram, Reels - all delivered in perfect specifications.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-business-grow-1773240171504-de7950b3.png"
            },
            {
              id: 5,
              title: "Multiple Formats & Sizes",              description: "Static images, carousel ads, video ads in multiple formats to test what drives best performance for your specific campaigns.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/professional-local-contractor-standing-n-1773326968021-51e00a46.png"
            },
            {
              id: 6,
              title: "Priority Support",              description: "Direct line to your creative team. Fast turnarounds on revisions and ongoing strategic guidance to optimize your ad performance.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/modern-barber-or-aesthetic-professional--1773327044104-512242e1.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="ideal-for" data-section="ideal-for">
        <FeatureCardEight
          title="Ideal For"
          description="The Professional Tier is designed for growing businesses ready to scale their ad spend and need comprehensive creative support."
          tag="Best For"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Scaling E-Commerce Brands",              description: "Running consistent ad budgets and ready to test multiple creative approaches? Get the variety and support you need to find winning ads.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-modern-workspace-with-product-pack-1773327115199-5b2b44d1.png"
            },
            {
              id: 2,
              title: "Growth-Phase Agencies",              description: "Serve multiple clients with consistent monthly creative delivery. Get reliable, quality output to maintain client satisfaction and retention.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/confident-business-professional-working--1773327576054-cf3ce66b.png"
            },
            {
              id: 3,
              title: "Businesses with Proven PMF",              description: "You know your model works. Now you need professional creative support to scale acquisition without bottlenecking on in-house production.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-business-grow-1773240171504-de7950b3.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactSplitForm
          title="Start with Professional Tier"
          description="Ready to level up your ad creative? Tell us about your campaigns and goals. We'll work with you to develop a comprehensive creative strategy tailored to your business."
          inputs={[
            { name: "businessName", type: "text", placeholder: "Business Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "currentAdSpend", type: "text", placeholder: "Current Monthly Ad Spend (optional)", required: false }
          ]}
          textarea={{
            name: "message",            placeholder: "Describe your current ad campaigns, what's working, and where you need more creative options...",            rows: 5,
            required: true
          }}
          buttonText="Get Started with Professional Tier"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-gorgeous-professional-website-mockup-d-1773240173927-fb2f8a9b.png?_wi=1"
          imageAlt="Professional tier signup"
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