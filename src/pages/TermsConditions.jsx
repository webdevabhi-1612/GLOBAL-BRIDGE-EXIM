import React, { useEffect } from 'react';
import PageTransition from '../layout/PageTransition'; // <-- Imported Transition

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-32 pb-24 selection:bg-[#FFC72C] selection:text-black">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms and Conditions</h1>
            <p className="text-gray-500 text-sm md:text-base">Last updated: June 22, 2026</p>
          </div>

          {/* Content Body */}
          <div className="space-y-10 text-base md:text-lg text-gray-600 font-light leading-relaxed">
            
            <section>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Global Bridge Exim ("we," "us," or "our"), concerning your access to and use of the website as well as any other media form, related services, or product orders.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">1. General Terms and Compliance</h2>
              <p className="mb-4">By accessing our site and placing orders, you agree to comply with the following operational terms:</p>
              <ol className="list-decimal ml-6 space-y-4 text-gray-600">
                <li>
                  <strong className="font-medium text-gray-800">Rights and Responsibilities:</strong> Global Bridge Exim retains all rights to the products until full payment is received. Users assume all risks associated with the import regulations of their respective destination countries.
                </li>
                <li>
                  <strong className="font-medium text-gray-800">International Compliance:</strong> Redistribution or import must occur in compliance with international trade laws, including adherence to:
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Customs and Border Protection regulations of the receiving country.</li>
                    <li>Phytosanitary and agricultural standards.</li>
                  </ul>
                </li>
                <li>
                  <strong className="font-medium text-gray-800">Modification Terms:</strong> We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time. The changes will be clearly documented and updated on this page.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">2. Order and Shipping Policy</h2>
              <p className="mb-4">
                All quotes provided are subject to market fluctuations until a formal Purchase Order (PO) is finalized. Shipping timelines are estimates and are contingent upon port clearances and logistics handled by our partners, including KSR International.
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Global Bridge Exim is not liable for delays caused by force majeure events, port strikes, or customs holds.</li>
                <li>Incoterms (FOB, CIF, etc.) will be explicitly defined in individual commercial invoices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">3. Liability Disclaimer</h2>
              <p>
                NO WARRANTY OR SUPPORT is provided beyond the certified quality at the point of origin. The product is distributed "as-is" according to the agreed-upon sample specifications. Global Bridge Exim limits its liability to the replacement of defective goods verified prior to international transit. We are not liable for incidental, indirect, or consequential damages arising from the use or inability to use our products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">4. Additional Legal Items</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>Compliance with export regulations and local legal restrictions is strictly required by the buyer.</li>
                <li>Unauthorized sublicensing or misrepresentation of our brand is strictly prohibited.</li>
                <li>Failure to adhere to these terms may result in immediate termination of business relations and legal action.</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
    </PageTransition>
  );
}