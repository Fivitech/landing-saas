import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter mb-8">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>Fivi Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our forex trading platform services.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company information</li>
                <li>Trading account details</li>
                <li>Financial information necessary for trading activities</li>
                <li>Communication history and support tickets</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and maintain our services</li>
                <li>Process transactions and trading activities</li>
                <li>Send administrative information and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our services and develop new features</li>
                <li>Comply with legal obligations and regulations</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>End-to-end encryption for sensitive data</li>
                <li>Secure data centers with 24/7 monitoring</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication protocols</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Sharing and Disclosure</h2>
              <p>We do not sell or rent your personal information. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>With service providers who assist in our operations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience on our platform. You can manage cookie preferences through your browser settings.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes via email or through our platform.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
              <p>If you have questions about this privacy policy or our data practices, please contact us at:</p>
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