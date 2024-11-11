import React, { useState } from 'react';
import { X, Send, ArrowRight, Sparkles } from 'lucide-react';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  experience: string;
  expectations: string;
  challenges: string;
}

export default function ApplicationForm({ isOpen, onClose }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    experience: '',
    expectations: '',
    challenges: ''
  });

  const steps = [
    {
      title: "Let's start with the basics",
      fields: ['name', 'email', 'phone'],
      description: "We're excited to learn about you!"
    },
    {
      title: "Tell us about your business journey",
      fields: ['company', 'role', 'experience'],
      description: "Your professional story matters to us"
    },
    {
      title: "Share your vision",
      fields: ['expectations', 'challenges'],
      description: "Help us understand how we can create value together"
    }
  ];

  const fieldLabels: Record<string, string> = {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    company: 'Company Name',
    role: 'Your Role',
    experience: 'Years of Experience',
    expectations: 'What do you expect from the retreat?',
    challenges: 'Top business challenges you want to solve'
  };

  const validateStep = (stepIndex: number): boolean => {
    const currentFields = steps[stepIndex].fields;
    return currentFields.every(field => formData[field as keyof FormData].trim() !== '');
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    if (!allFieldsFilled) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      alert('Please fill in all fields before proceeding.');
      return;
    }

    if (currentStep === 0 && !validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div 
          className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          style={{ 
            boxShadow: '0 0 100px rgba(191, 149, 63, 0.2)',
          }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {isSubmitted ? (
            <div className="p-6 sm:p-8 text-center">
              <div className="mb-6 relative">
                <div className="absolute inset-0 animate-ping">
                  <Sparkles className="w-16 h-16 text-gold-400 mx-auto" />
                </div>
                <Sparkles className="w-16 h-16 text-gold-400 mx-auto relative" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
                <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
                  Application Submitted Successfully!
                </span>
              </h3>
              <p className="text-gray-300 mb-8">
                We'll review your application and get back to you within 48 hours.
              </p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-3 rounded-full font-medium hover:from-gold-500 hover:to-gold-400 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 left-0 right-0 h-1 bg-gray-800 z-10">
                <div 
                  className="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="text-center mb-8">
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
                      {steps[currentStep].title}
                    </span>
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {steps[currentStep].description}
                  </p>
                </div>

                <div className="space-y-6">
                  {steps[currentStep].fields.map((field) => (
                    <div key={field} className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/50 via-gold-300/50 to-gold-500/50 rounded-lg opacity-0 group-focus-within:opacity-100 transition duration-500 blur"></div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {fieldLabels[field]}
                        </label>
                        {field === 'expectations' || field === 'challenges' ? (
                          <textarea
                            value={formData[field as keyof FormData]}
                            onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors text-sm sm:text-base"
                            rows={4}
                            placeholder={`Enter your ${field}`}
                            required
                          />
                        ) : (
                          <input
                            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                            value={formData[field as keyof FormData]}
                            onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors text-sm sm:text-base"
                            placeholder={`Enter your ${field}`}
                            required
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-6 py-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                    >
                      Back
                    </button>
                  )}
                  <div className="ml-auto">
                    {currentStep < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:from-gold-500 hover:to-gold-400 transition-all flex items-center gap-2 text-sm sm:text-base"
                      >
                        Continue <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:from-gold-500 hover:to-gold-400 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="sticky bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? 'w-8 bg-gradient-to-r from-gold-600 to-gold-400' 
                        : index < currentStep 
                          ? 'bg-gold-600' 
                          : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}