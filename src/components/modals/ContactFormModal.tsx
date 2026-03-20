"use client"

import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  planName: string | null;
  onClose: () => void;
}

export default function ContactFormModal({ planName, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    websiteOrInstagram: '',
    businessGoal: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        ...formData,
        selectedPlan: planName,
        timestamp: new Date().toISOString()
      };

      // Send to your backend or email service
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          websiteOrInstagram: '',
          businessGoal: '',
          projectDetails: ''
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getModalTitle = () => {
    if (planName === 'Starter Plan') return 'Starter Plan Inquiry';
    if (planName === 'Growth Plan') return 'Growth Plan Inquiry';
    if (planName === 'Premium Plan') return 'Premium Plan Inquiry';
    return 'Contact Us';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg bg-[var(--card)] rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between border-b border-[var(--accent)] p-6 bg-[var(--card)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">
            {getModalTitle()}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[var(--accent)]/20 rounded transition"
            aria-label="Close modal"
          >
            <X size={24} className="text-[var(--foreground)]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="mb-4 text-4xl">✓</div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                Thank you!
              </h3>
              <p className="text-[var(--foreground)]/70">
                Your {planName} inquiry has been received. We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary-cta)] transition"
                  placeholder="Your full name"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary-cta)] transition"
                  placeholder="Your business name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary-cta)] transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Instagram or Website Link */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Instagram or Website Link *
                </label>
                <input
                  type="text"
                  name="websiteOrInstagram"
                  value={formData.websiteOrInstagram}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary-cta)] transition"
                  placeholder="https://instagram.com/yourprofile or yourwebsite.com"
                />
              </div>

              {/* Business Goal */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Business Goal *
                </label>
                <input
                  type="text"
                  name="businessGoal"
                  value={formData.businessGoal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary-cta)] transition"
                  placeholder="e.g., Generate leads, increase sales, build brand awareness"
                />
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                  Project Details *
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg text-[var(--foreground)] placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary-cta)] transition resize-none"
                  placeholder="Tell us about your project, timeline, and what you're looking to achieve..."
                />
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-500 text-sm">
                  There was an error submitting your form. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[var(--primary-cta)] text-[var(--primary-cta-text)] rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : `Submit ${planName} Request`}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}