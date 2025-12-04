import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Eassy Bot. 🤖 I know everything about edible cups. Ask me anything!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate AI response (Mock logic for now)
        setTimeout(() => {
            let botResponse = "I'm still learning! 🧠 Try asking about 'flavors' or 'shelf life'.";
            const lowerInput = userMessage.text.toLowerCase();

            if (lowerInput.includes('flavor') || lowerInput.includes('taste')) {
                botResponse = "They taste like a crunchy vanilla biscuit! 🍪 Delicious with coffee.";
            } else if (lowerInput.includes('hot') || lowerInput.includes('heat')) {
                botResponse = "Don't worry, I can handle the heat! 🔥 I stay crispy for 40 minutes with hot drinks.";
            } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
                botResponse = "Check out our Shop page for the latest deals! 💸";
            } else if (lowerInput.includes('joke')) {
                botResponse = "Why did the coffee file a police report? It got mugged! ☕😂";
            }

            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <div className="chatbot-widget" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--color-accent)',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MessageCircle size={32} />
                </button>
            )}

            {isOpen && (
                <div className="chat-window" style={{
                    width: '350px',
                    height: '500px',
                    background: 'white',
                    borderRadius: '20px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                    <div className="chat-header" style={{
                        padding: '1rem',
                        background: 'var(--color-primary-dark)',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>🤖</span>
                            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Eassy Bot</h3>
                        </div>
                        <button onClick={toggleChat} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={20} /></button>
                    </div>

                    <div className="chat-messages" style={{ flex: 1, padding: '1rem', overflowY: 'auto', background: '#f9f9f9', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                background: msg.sender === 'user' ? 'var(--color-accent)' : 'white',
                                color: msg.sender === 'user' ? 'white' : '#333',
                                padding: '10px 15px',
                                borderRadius: '15px',
                                maxWidth: '80%',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                borderBottomRightRadius: msg.sender === 'user' ? '2px' : '15px',
                                borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '15px'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid #eee', display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            style={{ flex: 1, padding: '10px', borderRadius: '20px', border: '1px solid #ddd', outline: 'none' }}
                        />
                        <button type="submit" style={{ background: 'var(--color-primary-dark)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
