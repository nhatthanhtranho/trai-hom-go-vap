'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  align: 'left' | 'center' | 'right';
}

export default function FaqSection({
  align = 'center',
  title = 'Looking for answers?',
  faqs,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="w-full">
        <div className={`mb-2 text-${align}`}>
          <h2 className="text-4xl font-bold text-gray-900 leading-[3rem]">
            {title}
          </h2>
        </div>

        <div className="accordion-group divide-y divide-gray-200">
          {faqs.map((item, index) => (
            <div key={index} className="accordion py-6">
              <button
                onClick={() => toggleAccordion(index)}
                className={`accordion-toggle group inline-flex items-center justify-between w-full text-left transition duration-300 ${
                  openIndex === index
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-indigo-600' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 22 22"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`accordion-content overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                }`}
              >
                <p className="text-base text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
