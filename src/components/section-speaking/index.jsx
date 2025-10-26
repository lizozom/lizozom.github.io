import React from 'react';
import Section from '../section';

const classes = {
  grid: 'grid md:grid-cols-2 gap-6 lg:gap-8',
  card: 'group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-neutral-200 hover:border-primary-300 hover:-translate-y-1',
  title: 'text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors duration-200',
  description: 'text-neutral-600 leading-relaxed text-sm mb-4',
  list: 'list-disc pl-5 text-neutral-600 space-y-2 text-sm leading-relaxed',
  ctaWrapper: 'mt-8 text-center',
  ctaText: 'text-neutral-600 mb-4 text-sm',
  cta: 'inline-flex items-center justify-center gap-3 bg-primary-500 text-white px-9 py-3.5 rounded-full font-semibold text-base tracking-wide hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1',
};

const SectionSpeaking = () => {
  return (
    <Section 
      title="Public Speaking & Workshops" 
      id="speaking"
    >
      <div className={classes.grid}>
        <div className={classes.card}>
          <h3 className={classes.title}>🎤 Public Speaking</h3>
          <p className={classes.description}>
            Available for conference talks, meetups, and panel discussions on:
          </p>
          <ul className={classes.list}>
            <li>RAG (Retrieval-Augmented Generation) systems</li>
            <li>AI Agents and LLM applications</li>
            <li>Search technologies (Elasticsearch, OpenSearch)</li>
            <li>Vector databases and embeddings</li>
            <li>GenAI in production</li>
          </ul>
        </div>

        <div className={classes.card}>
          <h3 className={classes.title}>🛠️ Private Workshops</h3>
          <p className={classes.description}>
            Hands-on training sessions tailored for your team:
          </p>
          <ul className={classes.list}>
            <li>Building production-ready RAG applications</li>
            <li>Implementing hybrid search solutions</li>
            <li>LLM integration and prompt engineering</li>
            <li>Evaluation and monitoring of AI systems</li>
            <li>Custom workshops based on your needs</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default SectionSpeaking;
