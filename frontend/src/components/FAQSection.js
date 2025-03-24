import React, { useState } from 'react';

const faqs = [
  {
    question: "What is the use of this medicine?",
    answer: "It is commonly used for fever and mild to moderate pain relief."
  },
  {
    question: "Are there any side effects?",
    answer: "Usually mild — may include nausea or stomach upset."
  },
  {
    question: "Can I take it without food?",
    answer: "It is generally recommended to take it with food to avoid gastric irritation."
  },
  {
    question: "Is it safe for children?",
    answer: "Consult your doctor. Dosage varies based on age."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h3>❓ Frequently Asked Questions</h3>
      {faqs.map((faq, idx) => (
        <div key={idx} style={{ marginBottom: '12px' }}>
          <div
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              background: '#f0f0f0',
              padding: '10px',
              borderRadius: '6px'
            }}
            onClick={() => toggle(idx)}
          >
            {faq.question}
          </div>
          {openIndex === idx && (
            <div style={{ padding: '8px 12px', background: '#fafafa' }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
