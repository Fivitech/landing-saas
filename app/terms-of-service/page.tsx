import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter mb-8">Terms of Service</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using Fivi Technologies' forex trading platform services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Description</h2>
              <p>Fivi Technologies provides a comprehensive forex brokerage platform including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Client relationship management (CRM) system</li>
                <li>Trading platform integration</li>
                <li>Client portal access</li>
                <li>IB (Introducing Broker) management tools</li>
                <li>Mobile trading applications</li>
                <li>Reporting and analytics tools</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Be at least 18 years old</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use our services for any illegal purposes</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Transmit any malicious code or viruses</li>
                <li>Engage in any form of market manipulation</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
              <p>All content, features, and functionality of our platform are owned by Fivi Technologies and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Payment Terms</h2>
              <p>Subscription fees and payment terms are as follows:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Fees are billed according to your selected plan</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Late payments may result in service suspension</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data and Privacy</h2>
              <p>Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimers and Limitations</h2>
              <p>Our services are provided "as is" without warranties of any kind. We do not guarantee:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uninterrupted or error-free service</li>
                <li>Accuracy or reliability of information</li>
                <li>Specific trading results or profits</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, Fivi Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Fivi Technologies from any claims, damages, or expenses arising from your use of our services or violation of these terms.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Termination</h2>
              <p>We reserve the right to terminate or suspend your account at any time for violation of these terms. You may cancel your subscription at any time according to your plan terms.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law</h2>
              <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of the UAE.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Changes to Terms</h2>
              <p>We may update these terms from time to time. We will notify you of any material changes via email or through our platform.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">14. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us at:</p>
              <p className="mt-2">
                Email: contact@fivitechnologies.com<br />
                Phone: +971 56 881 9915<br />
                Address: Office: 1F 2696, Building: C1, Fivitech Office, Ajman Free Zone, United Arab Emirates
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}