import { buildPageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = buildPageMetadata({
  title: 'Privacy Policy | Rapid Response Security Guards',
  description: 'Read the privacy policy for Rapid Response Security Guards — rrsecurityguards.com',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-dark text-white pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto max-w-4xl px-6 prose prose-lg prose-gray">
          <h2 className="text-2xl font-bold text-[#101212] mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Rapid Response Security Guards ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">2. Data We Collect</h2>
          <div className="text-gray-600 mb-6">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">3. How We Use Your Data</h2>
          <div className="text-gray-600 mb-6">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing a security quote).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">4. Cookies</h2>
          <p className="text-gray-600 mb-6">
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">5. Third Parties</h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">6. Contact Info</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us at:
            <br/><br/>
            <strong>Rapid Response Security Guards</strong><br/>
            2050 W Chapman Ave Ste 277<br/>
            Orange, CA 92868<br/>
            Phone: (949) 992-8491<br/>
            Email: <a href="mailto:info@rrsecurityguards.com" className="text-[#BF4524] hover:underline">info@rrsecurityguards.com</a>
          </p>
          
          <div className="pt-6 border-t border-gray-200">
             <Link href="/" className="text-[#BF4524] hover:underline font-medium">&larr; Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
