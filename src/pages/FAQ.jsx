import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What are edible cups made of?",
            answer: "Our cups are crafted from 100% natural, food-grade ingredients including wheat flour, oat bran, and natural sweeteners. They are vegan-friendly and free from artificial preservatives."
        },
        {
            question: "How long do they last with hot drinks?",
            answer: "They are designed to handle the heat! 🔥 Our cups stay crispy and leak-proof for up to 40 minutes with hot beverages like coffee or tea."
        },
        {
            question: "What do they taste like?",
            answer: "Imagine a crunchy, slightly sweet vanilla biscuit. They complement coffee perfectly but are delicious enough to eat on their own as a snack."
        },
        {
            question: "Are they gluten-free?",
            answer: "Currently, our standard cups contain wheat and oats, so they are not gluten-free. We are working on a gluten-free version, so stay tuned!"
        },
        {
            question: "What is the shelf life?",
            answer: "If kept in their sealed packaging in a cool, dry place, our cups stay fresh for up to 12 months. Once opened, we recommend consuming them within a few days for maximum crunch."
        },
        {
            question: "Can I microwave the cups?",
            answer: "No, we do not recommend microwaving the cups as it may affect their structural integrity or texture."
        },
        {
            question: "What is your Cancellation Policy?",
            answer: "You can cancel your order within 24 hours of placement for a full refund. After 24 hours, the order may have already been processed for shipping."
        },
        {
            question: "What is your Return Policy?",
            answer: "Due to the nature of edible products, we cannot accept returns for change of mind. However, if your order arrives damaged or incorrect, please contact us within 7 days for a replacement or refund."
        }
    ];

    return (
        <div className="container" style={{ padding: '120px 0', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text-light)' }}>
                Everything you need to know about sipping and snacking.
            </p>

            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="faq-item"
                        style={{
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow-md)',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            style={{
                                width: '100%',
                                padding: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: 'var(--color-text)'
                            }}
                        >
                            {faq.question}
                            {activeIndex === index ? <ChevronUp color="var(--color-primary)" /> : <ChevronDown color="var(--color-text-light)" />}
                        </button>

                        {activeIndex === index && (
                            <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
