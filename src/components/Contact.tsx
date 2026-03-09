import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = encodeURIComponent(
      `*नया Enquiry - Mahadev Bricks*\n\n` +
      `नाम: ${formData.name}\n` +
      `फोन: ${formData.phone}\n` +
      `ईमेल: ${formData.email || 'नहीं दिया'}\n` +
      `संदेश: ${formData.message || 'कोई संदेश नहीं'}\n\n` +
      `कृपया जल्दी कॉल बैक करें!`
    );

    const whatsappNumber = "918429345535";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Form reset + success message
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    // 5 sec baad success message hide (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-orange-100 text-orange-700 font-medium rounded-full text-sm uppercase tracking-wide">
            संपर्क करें
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-stone-800">
            आज ही कोटेशन प्राप्त करें
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            हमारे विशेषज्ञ टीम से बात करें। 24 घंटे के अंदर कॉल बैक या WhatsApp पर जवाब मिलेगा।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-600 mb-3">धन्यवाद!</h3>
                <p className="text-stone-600">
                  आपका संदेश WhatsApp पर भेज दिया गया है। हम जल्द ही संपर्क करेंगे।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    आपका नाम *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="रमेश कुमार"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    मोबाइल नंबर *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="9876543210"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    ईमेल (ऑप्शनल)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    आपकी जरूरत / मैसेज
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="मुझे 1 लाख ईंटें चाहिए, वाराणसी में डिलीवरी..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
                >
                  WhatsApp पर भेजें
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info + Map (optional) */}
          <div className="space-y-10">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">हमसे संपर्क करें</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-orange-600">📞</div>
                  <div>
                    <p className="font-medium text-stone-700">मोबाइल / WhatsApp</p>
                    <a href="tel:+918429345535" className="text-orange-600 hover:underline">+91 8429345535</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-orange-600">📍</div>
                  <div>
                    <p className="font-medium text-stone-700">पता</p>
                    <p className="text-stone-600">
                      महादेव ब्रिक्स फील्ड <br />
                      गंगा गंज  रोड, भानमऊ, उत्तर प्रदेश 225121
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-orange-600">⏰</div>
                  <div>
                    <p className="font-medium text-stone-700">समय</p>
                    <p className="text-stone-600">सोमवार से शनिवार: सुबह 8 बजे से शाम 6 बजे तक</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-stone-100 h-80">
      
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.8347325267778!2d81.14473327521378!3d26.621743676821808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be955c18ab287%3A0x745efc66e77c33c7!2sMahadev%20Brick%20Field%20II%20Red%20Brick%20II%20Brick%20Near%20Me%20II%20Brick%20In%20Barabanki%20II%20Brick%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1772800164146!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahadev Bricks Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



