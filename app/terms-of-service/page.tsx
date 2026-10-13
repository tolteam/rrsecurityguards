import { buildPageMetadata } from '@/lib/seo';
import Link from 'next/link';

export const metadata = buildPageMetadata({
  title: 'Terms of Service | Rapid Response Security Guards',
  description: 'Read the terms of service for Rapid Response Security Guards — rrsecurityguards.com',
});

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-dark text-white pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto max-w-4xl px-6 prose prose-lg prose-gray">
          <h2 className="text-2xl font-bold text-[#101212] mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing and using the Rapid Response Security Guards website (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">2. Use of Site</h2>
          <p className="text-gray-600 mb-6">
            You are permitted to use our Site for your personal, non-commercial use, or legitimate business purposes relating to your role as a potential or current client of Rapid Response Security Guards. You must not misuse this Site by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">3. No Warranty</h2>
          <p className="text-gray-600 mb-6">
            The information and materials on this website are provided "as is" and without warranties of any kind, either express or implied. Rapid Response Security Guards disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the functions contained in the materials will be uninterrupted or error-free.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            Under no circumstances, including, but not limited to, negligence, shall Rapid Response Security Guards be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, the materials on this site, even if Rapid Response Security Guards or a Rapid Response Security Guards authorized representative has been advised of the possibility of such damages.
          </p>
          
          <h2 className="text-2xl font-bold text-[#101212] mb-4">5. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            Any claim relating to Rapid Response Security Guards's website shall be governed by the laws of the State of California without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-[#101212] mb-4">6. Contact Information</h2>
          <p className="text-gray-600 mb-8">
            If you have any questions about these Terms of Service, please contact us at:
            <br/><br/>
            <strong>Rapid Response Security Guards</strong><br/>
            2050 W Chapman Ave Ste 277<br/>
            Orange, CA 92868<br/>
            Phone: (949) 992-8491<br/>
            Email: <a href="mailto:info@rrsecurityguards.com" className="text-[#BF4524] hover:underline">info@rrsecurityguards.com</a><br/>
            License: PPO #121228
          </p>
          
          <div className="pt-6 border-t border-gray-200">
             <Link href="/" className="text-[#BF4524] hover:underline font-medium">&larr; Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
