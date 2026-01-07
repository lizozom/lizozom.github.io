import React, { useState } from 'react';
import Section from '../section';

const classes = {
  form: 'space-y-6',
  fieldGroup: 'space-y-2',
  label: 'block text-sm font-medium text-gray-700',
  input: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-gray-900 placeholder-gray-400',
  select: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-gray-900 bg-white appearance-none cursor-pointer',
  selectWrapper: 'relative',
  selectIcon: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500',
  textarea: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-gray-900 placeholder-gray-400 min-h-[150px] resize-y',
  button: 'w-full sm:w-auto px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 focus:ring-4 focus:ring-primary-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
  successMessage: 'p-4 bg-green-50 border border-green-200 rounded-lg text-green-800',
  errorMessage: 'p-4 bg-red-50 border border-red-200 rounded-lg text-red-800',
};

const topics = [
  { value: '', label: 'Select a topic...' },
  { value: 'ai-engineering', label: 'AI Engineering' },
  { value: 'ai-consulting', label: 'AI Consulting' },
  { value: 'workshops', label: 'Workshops' },
  { value: 'public-speaking', label: 'Public Speaking' },
];

const SectionContact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section title="Get In Touch" id="contact">
      <div className="max-w-xl">
        {status === 'success' ? (
          <div className={classes.successMessage}>
            <p className="font-medium">Thank you for your message!</p>
            <p className="mt-1 text-sm">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xeeoyzkj"
            method="POST"
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <div className={classes.fieldGroup}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className={classes.input}
              />
            </div>

            <div className={classes.fieldGroup}>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@email.com"
                className={classes.input}
              />
            </div>

            <div className={classes.fieldGroup}>
              <label htmlFor="topic" className={classes.label}>
                Topic
              </label>
              <div className={classes.selectWrapper}>
                <select
                  id="topic"
                  name="topic"
                  required
                  className={classes.select}
                >
                  {topics.map((topic) => (
                    <option key={topic.value} value={topic.value} disabled={topic.value === ''}>
                      {topic.label}
                    </option>
                  ))}
                </select>
                <div className={classes.selectIcon}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={classes.fieldGroup}>
              <label htmlFor="message" className={classes.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project or inquiry..."
                className={classes.textarea}
              />
            </div>

            {status === 'error' && (
              <div className={classes.errorMessage}>
                <p>Something went wrong. Please try again or email me directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className={classes.button}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};

export default SectionContact;
