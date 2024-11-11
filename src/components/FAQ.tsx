import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/faqData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="font-light text-xl text-gray-300">
            Everything you need to know about the retreat
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="group transform transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Gradient Border */}
              <div className="relative">
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 opacity-20 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Container */}
                <div className="relative bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-xl rounded-xl overflow-hidden border border-gold-500/10">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
                  >
                    <h3 className="font-display text-lg md:text-xl font-medium text-gray-100 group-hover:text-gold-300 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 transition-all duration-300 ease-in-out transform group-hover:scale-110">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 p-[1px]">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                          {openIndex === index ? (
                            <Minus className="w-4 h-4 text-gold-400" />
                          ) : (
                            <Plus className="w-4 h-4 text-gold-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 md:p-8 pt-0">
                      <div className="bg-gradient-to-r from-gold-500/5 via-gold-400/5 to-gold-500/5 rounded-lg p-6">
                        <p className="text-gray-300 font-light leading-relaxed tracking-wide">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}