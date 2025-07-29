import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function FAQSection() {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (questionKey: string) => {
    setOpenFAQ(openFAQ === questionKey ? null : questionKey);
  };

  const faqItems = [
    {
      key: 'whoCanApply',
      question: t.faq.questions.whoCanApply.question,
      answer: t.faq.questions.whoCanApply.answer,
    },
    {
      key: 'documents',
      question: t.faq.questions.documents.question,
      answer: t.faq.questions.documents.answer,
    },
    {
      key: 'leaveBefore',
      question: t.faq.questions.leaveBefore.question,
      answer: t.faq.questions.leaveBefore.answer,
    },
    {
      key: 'included',
      question: t.faq.questions.included.question,
      answer: t.faq.questions.included.answer,
    },
    {
      key: 'legal',
      question: t.faq.questions.legal.question,
      answer: t.faq.questions.legal.answer,
    },
    {
      key: 'registration',
      question: t.faq.questions.registration.question,
      answer: t.faq.questions.registration.answer,
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-ash-gray">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item) => (
            <div
              key={item.key}
              className="bg-ash-light rounded-lg border border-gray-200 hover:border-ash-orange transition-colors"
            >
              <button
                onClick={() => toggleFAQ(item.key)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-black">{item.question}</span>
                <ChevronDown
                  className={`text-ash-orange transition-transform w-5 h-5 ${
                    openFAQ === item.key ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === item.key && (
                <div className="px-6 pb-4">
                  <p className="text-ash-gray">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
