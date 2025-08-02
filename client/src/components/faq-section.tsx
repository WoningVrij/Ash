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
    {
      key: 'canIRegister',
      question: t.faq.questions.canIRegister.question,
      answer: t.faq.questions.canIRegister.answer,
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-ash-dark mb-6 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-xl md:text-2xl text-ash-gray leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {faqItems.map((item) => (
            <div
              key={item.key}
              className="bg-gradient-modern rounded-2xl border border-gray-200 hover:border-ash-orange transition-all duration-300 card-hover shadow-modern"
            >
              <button
                onClick={() => toggleFAQ(item.key)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-xl font-bold text-ash-dark tracking-tight">{item.question}</span>
                <ChevronDown
                  className={`text-ash-orange transition-transform w-6 h-6 ${
                    openFAQ === item.key ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === item.key && (
                <div className="px-8 pb-6">
                  <p className="text-ash-gray text-lg leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
