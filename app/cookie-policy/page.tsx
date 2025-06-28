import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter mb-8">Cookie Policy</h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p>Fivi Technologies uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Help us improve our services by collecting anonymous usage data</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Essential Cookies</h3>
              <p>These cookies are necessary for the website to function and cannot be switched off. They include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Session cookies for maintaining your login state</li>
                <li>Security cookies for fraud prevention</li>
                <li>Load balancing cookies for optimal performance</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Performance Cookies</h3>
              <p>These cookies help us understand how you use our platform:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Page load time tracking</li>
                <li>Error message tracking</li>
                <li>User interaction analytics</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Functionality Cookies</h3>
              <p>These cookies enable enhanced functionality:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Language preferences</li>
                <li>Time zone settings</li>
                <li>Display preferences</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
              <p>We may use third-party services that set their own cookies, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Customer support chat services</li>
                <li>Social media integration (if you choose to connect)</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookie Duration</h2>
              <p>Cookies can be either:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Managing Cookies</h2>
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Cookie preferences: We provide options to manage non-essential cookies</li>
                <li>Device settings: Mobile devices offer cookie control options</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Impact of Disabling Cookies</h2>
              <p>Please note that disabling certain cookies may:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Limit functionality of our platform</li>
                <li>Prevent you from accessing certain features</li>
                <li>Affect your user experience</li>
                <li>Require you to re-enter information more frequently</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes through our platform or via email.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us at:</p>
              <p className="mt-2">
                Email: contact@fivitechnologies.com<br />
                Phone: +971 56 881 9915<br />
                Address: Office: 1F 2696, Building: C1, Fivitech Office, Ajman Free Zone, United Arab Emirates
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. More Information</h2>
              <p>For more information about cookies and how to manage them, you can visit:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youronlinechoices.com</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}