"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Zap, Layers, Sparkles, CheckCircle, Target, DollarSign, Quote, Rocket, Users, Star } from "lucide-react";

export default function LandingPage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Websites and Ads Built to Bring You Customers"
          description="We help service businesses and brands generate leads, booked appointments, and sales online through high-converting websites, Meta ads management, and professional ad creative production. Your complete customer acquisition system."
          background={{ variant: "sparkles-gradient" }}
          tag="Customer Acquisition Engine"
          tagIcon={Zap}
          buttons={[
            { text: "Get Your Free Demo Website", href: "/contact" },
            { text: "Schedule a meeting", href: "/contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/a-modern-clean-website-design-mockup-dis-1773240171755-25981f6a.png"
          imageAlt="High-converting website design mockup"
          mediaAnimation="slide-up"
          marqueeItems={[
            { type: "text", text: "Website Design" },
            { type: "text", text: "Meta Ads Management" },
            { type: "text", text: "Ad Creative Production" },
            { type: "text", text: "Customer Acquisition" },
            { type: "text", text: "Lead Generation" }
          ]}
          marqueeSpeed={40}
          showMarqueeCard={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Services"
          description="Three core services that work together as a complete customer acquisition system to help you grow your business online."
          tag="What We Do"
          tagIcon={Layers}
          features={[
            {
              id: 1,
              title: "Website Design",              description: "24-72 hour delivery badge: Multi-page, high-converting website designed to bring you customers. Optimized for mobile and desktop with clear CTAs, lead capture forms, and click-to-call buttons. Industry-leading turnaround time.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/illustration-showing-website-design-elem-1773240172578-a3c8c2d4.png"
            },
            {
              id: 2,
              title: "Meta Ads Management",              description: "✓ Proven results: Strategic Facebook and Instagram advertising focused on customer acquisition. We research your audience, set up campaigns, optimize for leads or sales, and continuously improve performance based on results.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-audience-targ-1773240173056-7ab9eeb8.png"
            },
            {
              id: 3,
              title: "Monthly Ad Creative",              description: "📦 Delivered monthly: Ongoing creative production to support your ad campaigns. Multiple hooks, copy variations, ad sizes, and formats delivered ready to upload. Stay competitive with fresh creative angles every month.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/illustration-of-creative-content-product-1773240172341-89b17938.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
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

      <div id="process" data-section="process">
        <FeatureCardEight
          title="How It Works"
          description="Our proven 3-step process gets you results fast and keeps things simple."
          tag="Our Process"
          tagIcon={CheckCircle}
          features={[
            {
              id: 1,
              title: "Request a Demo",              description: "Tell us about your business, what you need, and your goals. We'll ask the right questions to understand your customer acquisition challenges and opportunities.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-minimalist-illustration-showing-a--1773240172738-6c92f9a5.png"
            },
            {
              id: 2,
              title: "We Build Your Website",              description: "24-72 hour delivery: We create a customer-focused, high-converting website designed to generate leads, calls, bookings, or sales. Most agencies take 3-6 weeks. We move faster with industry-leading speed.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-a-designer-or-1773240172767-2a1dd349.png"
            },
            {
              id: 3,
              title: "Start Getting Customers",              description: "Launch your site and support it with strategic Meta ads and professional creative. Watch leads, calls, and bookings come in. We continuously optimize to improve your customer acquisition.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-illustration-showing-business-grow-1773240171504-de7950b3.png"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="for" data-section="for">
        <ProductCardFour
          title="Who This Is For"
          description="We work best with medium- to high-ticket lead generation businesses and e-commerce brands serious about customer acquisition."
          tag="Best Fit Industries"
          tagIcon={Target}
          products={[
            {
              id: "1",              name: "Service Businesses",              price: "Contractors • Landscapers • Roofers",              variant: "Handymen • Plumbers • HVAC • Remodelers",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/professional-local-contractor-standing-n-1773326968021-51e00a46.png",              imageAlt: "Service Business Logo"
            },
            {
              id: "2",              name: "Local Service Industries",              price: "Barbershops • Gyms • Salons",              variant: "Aesthetics • Hair Services • Fitness Studios",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/modern-barber-or-aesthetic-professional--1773327044104-512242e1.png",              imageAlt: "Local Service Logo"
            },
            {
              id: "3",              name: "E-Commerce Brands",              price: "Online Retail • Direct-to-Consumer",              variant: "Product-Based • Dropshipping • SaaS",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/clean-modern-workspace-with-product-pack-1773327115199-5b2b44d1.png",              imageAlt: "E-Commerce Logo"
            },
            {
              id: "4",              name: "Professional Services",              price: "Consulting • Agencies • Advisors",              variant: "Brokers • Coaches • Digital Agencies",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/tmp/confident-business-professional-working--1773327576054-cf3ce66b.png",              imageAlt: "Professional Services Logo"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          cardClassName="flex flex-col h-full overflow-hidden"
          imageClassName="w-full h-64 object-cover object-center"
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
              id: "starter",              badge: "Good for Beginners",              badgeIcon: Sparkles,
              price: "$200/mo",              subtitle: "Fresh creative angles monthly",              buttons: [{ text: "Get Started", href: "/contact" }],
              features: ["4-6 ad variations", "Multiple hooks and angles", "Primary ad text and headlines", "Correct ad sizes and formats", "Ready to upload"]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Star,
              price: "$350/mo",              subtitle: "Comprehensive creative support",              buttons: [{ text: "Get Started", href: "/contact" }],
              features: ["8-12 ad variations", "Diverse visual angles", "Copy testing variations", "Multiple formats and sizes", "Platform-optimized specs", "Priority support"]
            },
            {
              id: "enterprise",              badge: "For Scaling Brands",              badgeIcon: Zap,
              price: "$500/mo",              subtitle: "Maximum creative output and strategy",              buttons: [{ text: "Get Started", href: "/contact" }],
              features: ["15+ ad variations monthly", "A/B testing frameworks", "Video and static assets", "Campaign-specific creative", "Unlimited revisions", "Dedicated creative support", "Quarterly strategy sessions"]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialCardSixteen
          title="What Our Clients Say"
          description="Real results from businesses that trusted Convrsn to transform their customer acquisition online."
          tag="Client Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              role: "Founder & CEO",              company: "Johnson Construction",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/professional-headshot-of-a-confident-ent-1773240173131-9be7d8c7.png"
            },
            {
              id: "2",              name: "Michael Chen",              role: "Owner",              company: "Digital Marketing Agency",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/professional-headshot-of-a-business-prof-1773240172753-c1cf042a.png"
            },
            {
              id: "3",              name: "Emily Rodriguez",              role: "E-Commerce Director",              company: "Fashion & Retail Co",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/professional-headshot-of-a-female-busine-1773240171458-9b3db851.png"
            },
            {
              id: "4",              name: "David Williams",              role: "Service Business Owner",              company: "Premium Home Services",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Ai86BRUMbva0WDBhojvh7eeV0v/professional-headshot-of-a-creative-prof-1773240172454-7572c59b.png"
            }
          ]}
          kpiItems={[
            { value: "3.2x", label: "Average ROI Improvement" },
            { value: "47%", label: "Lead Generation Increase" },
            { value: "2.1x", label: "Customer Acquisition Growth" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Growing Businesses"
          description="Service companies, e-commerce brands, and agencies growing their customer acquisition with Convrsn."
          tag="Our Partners"
          tagIcon={Users}
          names={["Johnson Construction", "TechFlow Digital", "StyleAndSell Co", "Premium Home Services", "Growth Agency", "E-Commerce Brands", "Local Service Leaders"]}
          textboxLayout="default"
          useInvertedBackground={true}
          speed={40}
          showCard={true}
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