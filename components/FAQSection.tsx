'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How long does a dental implant procedure take?',
    answer: 'The entire process can take a few months from start to finish. Placing the implant itself usually takes 1-2 hours per implant. Afterward, it takes 3-6 months for the implant to fuse with your jawbone before the final crown can be placed.',
  },
  {
    question: 'Is root canal treatment painful?',
    answer: 'Modern root canal treatments are remarkably painless and are designed to relieve the pain you are experiencing due to infection. We use local anesthesia to ensure you are completely comfortable throughout the procedure.',
  },
  {
    question: 'At what age should children first visit a dentist?',
    answer: 'We recommend that a child\'s first dental visit occur within 6 months after the presence of the first tooth or by their first birthday. Early visits help establish a dental home and prevent future problems.',
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-gray-100 shadow-sm rounded-lg overflow-hidden">
          <button
            suppressHydrationWarning
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005b82]"
          >
            <span className="font-medium text-gray-900 text-lg">{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-[#00b4d8] transition-transform duration-300",
                openIndex === index ? "transform rotate-180" : ""
              )}
            />
          </button>
          <div
            className={cn(
              "px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden h-0",
              openIndex === index ? "h-auto pb-6 opacity-100" : "opacity-0"
            )}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
