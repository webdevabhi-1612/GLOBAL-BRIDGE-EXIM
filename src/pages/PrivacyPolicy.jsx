import React, { useEffect } from 'react';
import PageTransition from '../layout/PageTransition'; // <-- Imported Transition

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-32 pb-24 selection:bg-[#FFC72C] selection:text-black">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm md:text-base">Last updated: June 22, 2026</p>
          </div>

          {/* Content Body */}
          <div className="space-y-10 text-base md:text-lg text-gray-600 font-light leading-relaxed">
            
            <section>
              <p>
                Global Bridge Exim ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Global Bridge Exim. This policy applies to our website and any associated services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">1. Information We Collect</h2>
              <p className="mb-4">We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, or fill out a form. The data collected includes:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li><strong className="font-medium text-gray-800">Personal Data:</strong> Name, email address, phone number, and shipping address.</li>
                <li><strong className="font-medium text-gray-800">Business Data:</strong> Company name, registration details, and import/export licenses if applicable.</li>
                <li><strong className="font-medium text-gray-800">Usage Data:</strong> IP address, browser type, operating system, and interaction with our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">2. How We Use Your Information</h2>
              <p className="mb-4">The information we collect from you may be used in one of the following ways:</p>
              <ol className="list-decimal ml-6 space-y-2 text-gray-600">
                <li>To personalize your experience and respond better to your individual needs.</li>
                <li>To improve our website functionality based on the information and feedback we receive from you.</li>
                <li>To process global transactions securely and efficiently.</li>
                <li>To send periodic emails regarding your order, company news, updates, or related product/service information.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">3. Data Protection and Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our gateway providers' database only to be accessible by those authorized with special access rights to such systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">4. Third-Party Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. These trusted partners include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>KSR International for global logistics and shipping coordination.</li>
                <li>Secure payment gateway providers.</li>
                <li>Government customs and border protection agencies as required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">5. Contacting Us</h2>
              <p>
                If there are any questions regarding this privacy policy, you may contact us using the information on our Contact page or email us directly at <a href="mailto:legal@globalbridge.com" className="text-blue-600 underline hover:text-blue-800 transition-colors">legal@globalbridge.com</a>.
              </p>
            </section>

          </div>
        </div>
      </main>
    </PageTransition>
  );
}