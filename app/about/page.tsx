import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';
import { Shield, Target, Users, Map, Clock, CheckCircle, Award, Star } from 'lucide-react';

export const metadata = buildPageMetadata({
  title: 'About Rapid Response Security Guards | Licensed California Security Company',
  description: 'Learn about Rapid Response Security Guards — a licensed (PPO #121228) California security company providing armed guards, mobile patrol, fire watch, and event security across Southern California.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-dark text-white pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-screen-xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6">About Rapid Response Security Guards</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            A trusted, licensed California security company committed to providing rapid, reliable, and professional protection for your property and personnel.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 bg-[#BF4524]">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">7+</p>
              <p className="text-sm uppercase tracking-wider">Counties Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-sm uppercase tracking-wider">Availability</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-sm uppercase tracking-wider">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">100s</p>
              <p className="text-sm uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-[#F7F7F7]">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold font-poppins text-[#101212] mb-6">Our Mission & Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a mission to provide rapid, reliable security solutions across California, Rapid Response Security Guards stands out for our commitment to excellence and professional integrity.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that every client has unique security needs. Whether it's a large-scale event, ongoing construction site monitoring, or retail loss prevention, our tailored approach ensures maximum protection.
              </p>
              <p className="text-gray-600 font-semibold">
                Licensed (BSIS PPO #121228), fully insured, and highly trained.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col items-center text-center">
                 <Shield className="w-10 h-10 text-[#BF4524] mb-3" />
                 <h3 className="font-bold text-[#101212] mb-1">Integrity</h3>
               </div>
               <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col items-center text-center">
                 <Target className="w-10 h-10 text-[#BF4524] mb-3" />
                 <h3 className="font-bold text-[#101212] mb-1">Precision</h3>
               </div>
               <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col items-center text-center">
                 <Users className="w-10 h-10 text-[#BF4524] mb-3" />
                 <h3 className="font-bold text-[#101212] mb-1">Teamwork</h3>
               </div>
               <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col items-center text-center">
                 <Map className="w-10 h-10 text-[#BF4524] mb-3" />
                 <h3 className="font-bold text-[#101212] mb-1">Coverage</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-[#101212] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide elite protection through rigorous training and strategic deployment.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-hover bg-[#F7F7F7] p-6 rounded">
              <CheckCircle className="w-8 h-8 text-[#BF4524] mb-4" />
              <h3 className="text-lg font-bold mb-2">Licensed & Certified</h3>
              <p className="text-gray-600 text-sm">Fully compliant with BSIS regulations and highly certified professionals.</p>
            </div>
            <div className="card-hover bg-[#F7F7F7] p-6 rounded">
              <Clock className="w-8 h-8 text-[#BF4524] mb-4" />
              <h3 className="text-lg font-bold mb-2">Rapid Deployment</h3>
              <p className="text-gray-600 text-sm">Fast response times to ensure your property is secured when it matters most.</p>
            </div>
            <div className="card-hover bg-[#F7F7F7] p-6 rounded">
              <Award className="w-8 h-8 text-[#BF4524] mb-4" />
              <h3 className="text-lg font-bold mb-2">Experienced Officers</h3>
              <p className="text-gray-600 text-sm">Our guards undergo extensive training and background checks.</p>
            </div>
            <div className="card-hover bg-[#F7F7F7] p-6 rounded">
              <Map className="w-8 h-8 text-[#BF4524] mb-4" />
              <h3 className="text-lg font-bold mb-2">Full Coverage</h3>
              <p className="text-gray-600 text-sm">Serving Southern California with comprehensive security solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* License & Compliance */}
      <section className="section-sm bg-[#101212] text-white">
        <div className="container mx-auto max-w-screen-xl px-6 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">License & Compliance</h2>
            <p className="text-gray-300">We are a fully licensed and insured security provider in the State of California.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="text-[#BF4524] w-5 h-5"/> BSIS PPO License: #121228</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-[#BF4524] w-5 h-5"/> Fully Insured & Bonded</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-[#BF4524] w-5 h-5"/> Rigorously Background-Checked Officers</li>
            </ul>
          </div>
          <div className="bg-white/10 p-6 rounded border border-white/20 text-center">
             <Shield className="w-12 h-12 text-[#BF4524] mx-auto mb-3" />
             <p className="font-bold text-xl">PPO #121228</p>
             <p className="text-sm text-gray-300 mt-1">Verified California License</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#BF4524] text-white text-center">
        <div className="container mx-auto max-w-screen-xl px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Property?</h2>
          <p className="mb-8 text-lg text-white/90 max-w-2xl mx-auto">Get a free, custom security quote within 24 hours. Serving Orange County, LA County, and across Southern California.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#hero" className="btn btn-dark px-8 py-3 rounded font-bold">
              Get a Free Quote
            </Link>
            <a href="tel:19499928491" className="btn btn-outline px-8 py-3 rounded font-bold bg-white text-[#BF4524] border-transparent hover:bg-gray-100">
              Call (949) 992-8491
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
