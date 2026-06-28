import React, { useState } from 'react';
import PageTransition from '../layout/PageTransition'; // <-- Imported Transition

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '', 
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format the message clearly
    const whatsappMessage = `*New Website Inquiry*%0A%0A` +
                            `側 *Name:* ${formData.fullName}%0A` +
                            `透 *Email:* ${formData.email}%0A` +
                            `到 *Phone:* ${formData.phone}%0A` +
                            `召 *Company:* ${formData.companyName}%0A` +
                            `町 *Message:* ${formData.message}`;
    
    // 2. Open WhatsApp with your specific number
    const phoneNumber = "919257755177";
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Optional: Clear form after opening WhatsApp
    setFormData({ fullName: '', email: '', phone: '', companyName: '', message: '' });
  };

  return (
    <PageTransition>
      <section id="contact" className="w-full bg-white py-24 px-6 md:px-12 lg:px-20 font-sans relative z-10 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* === LEFT COLUMN: Map & Location === */}
          <div className="w-full flex flex-col gap-8">
             <div className="w-full h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.106412151047!2d74.74311107575469!3d19.20014294825972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc81335b2a0c79%3A0x6a053c0356c9a2c3!2sAmbar%20Plaza%2C%20Station%20Rd%2C%20Ahilyanagar%2C%20Maharashtra%20414001!5e0!3m2!1sen!2sin!4v1718712345678"
                  title="Global Bridge Exim Location"
                  className="grayscale-[10%] transition-all duration-700 group-hover:grayscale-0"
                ></iframe>
             </div>
             
             <div className="flex flex-col sm:flex-row justify-between gap-8 px-2">
               <div>
                 <h4 className="text-[#0C3B24] font-bold text-lg mb-2 tracking-wide">Head Office</h4>
                 <p className="text-[#4A5D53] leading-relaxed text-[15px] font-medium">
                   265, B-Wing, Station Road,<br />
                   Ambar Plaza, Ahilyanagar,<br />
                   Maharashtra, India
                 </p>
               </div>
               <div>
                 <h4 className="text-[#0C3B24] font-bold text-lg mb-2 tracking-wide">Contact Info</h4>
                 <p className="text-[#4A5D53] leading-relaxed text-[15px] font-medium mb-1">
                   <span className="font-bold text-[#0C3B24]">Phone:</span> +91 92577 55177
                 </p>
                 <p className="text-[#4A5D53] leading-relaxed text-[15px] font-medium">
                   <span className="font-bold text-[#0C3B24]">Email:</span> globalbridgeexim01@gmail.com
                 </p>
               </div>
             </div>
          </div>

          {/* === RIGHT COLUMN: Form === */}
          <div className="w-full flex flex-col">
            <div className="flex items-center gap-3 text-[#FFC72C] font-bold text-sm tracking-widest uppercase mb-4">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L0 0V12L10 6Z" fill="currentColor"/>
                <path d="M22 6L12 0V12L22 6Z" fill="currentColor"/>
                <path d="M34 6L24 0V12L34 6Z" fill="currentColor"/>
              </svg>
              <span>Contact Us</span>
            </div>
            
            <h2 className="text-[#0C3B24] text-[3rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-tight mb-10">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" name="fullName" required placeholder="Full name" value={formData.fullName} onChange={handleChange}
                  className="w-full bg-[#F5F7F2] text-[#0C3B24] placeholder-[#0C3B24]/40 px-6 py-4 rounded-xl border border-transparent focus:outline-none focus:border-[#0C3B24]/20 focus:bg-white transition-all font-medium"
                />
                <input 
                  type="email" name="email" required placeholder="Email Address" value={formData.email} onChange={handleChange}
                  className="w-full bg-[#F5F7F2] text-[#0C3B24] placeholder-[#0C3B24]/40 px-6 py-4 rounded-xl border border-transparent focus:outline-none focus:border-[#0C3B24]/20 focus:bg-white transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="tel" name="phone" required placeholder="Phone" value={formData.phone} onChange={handleChange}
                  className="w-full bg-[#F5F7F2] text-[#0C3B24] placeholder-[#0C3B24]/40 px-6 py-4 rounded-xl border border-transparent focus:outline-none focus:border-[#0C3B24]/20 focus:bg-white transition-all font-medium"
                />
                <input 
                  type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange}
                  className="w-full bg-[#F5F7F2] text-[#0C3B24] placeholder-[#0C3B24]/40 px-6 py-4 rounded-xl border border-transparent focus:outline-none focus:border-[#0C3B24]/20 focus:bg-white transition-all font-medium"
                />
              </div>

              <textarea 
                name="message" required placeholder="Message" rows="5" value={formData.message} onChange={handleChange}
                className="w-full bg-[#F5F7F2] text-[#0C3B24] placeholder-[#0C3B24]/40 px-6 py-5 rounded-xl border border-transparent focus:outline-none focus:border-[#0C3B24]/20 focus:bg-white transition-all resize-none font-medium"
              ></textarea>

              <button type="submit" className="w-full bg-[#0C3B24] text-white py-4 mt-2 rounded-xl font-bold text-lg tracking-wide hover:bg-[#0a2e1c] hover:shadow-[0_8px_20px_rgba(12,59,36,0.2)] hover:-translate-y-1 transition-all duration-300">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}