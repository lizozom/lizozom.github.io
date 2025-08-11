---
title: "Introducing Shraga: A Minimal RAG Framework for Production"
date: "2025-04-16"
author: "Liza Katz"
description: "I published an article about Shraga, an open-source RAG framework I created with Big Data Boutique - designed to build production-ready GenAI applications without the bloat."
---

I'm excited to share that I've published an article on the [Big Data Boutique blog](https://bigdataboutique.com/blog/building-rag-apps-without-the-bloat-meet-shraga-c6cb31) introducing **Shraga**, an open-source RAG framework that I created together with the team at Big Data Boutique.

## The Problem We Solved

The article, titled **"Building RAG Apps Without the Bloat: Meet Shraga"**, addresses a common challenge we've encountered across multiple client projects: existing RAG frameworks often abstract too much, come with heavy dependencies, and become obstacles when you need to understand what's happening under the hood or ship something reliable to production.

Shraga was born from our real-world experience building RAG systems across different industries and use cases. We needed something that could serve us in both prototyping and production environments.

## What Makes Shraga Different

Shraga is designed around key principles that emerged from our production experience:

- **Minimal dependencies** - Start quickly without heavyweight abstractions
- **Flow-based architecture** - Modular, composable units that are easy to test and debug
- **Multiple provider support** - Works with different LLM providers, embedders, and retrievers
- **Built-in production features** - Authentication, logging, analytics, and cost tracking from day one
- **Progressive complexity** - Start simple and evolve to clean, modular, well-typed code as projects mature

## The Core Architecture

The framework centers around **Flows** - modular units of logic that receive input, perform actions (which may or may not involve an LLM), and return responses. This design treats everything consistently: answering questions, fetching data, or chaining other flows.

The article includes detailed code examples showing how to:
- Build custom flows that integrate with any service (AWS Knowledge Bases, Pinecone, OpenSearch, Elasticsearch)
- Use the FastAPI layer for production concerns (auth, logging, performance tracking)
- Handle ingestion and embedding with pluggable components
- Deploy with the included React UI or use the API headlessly

## From Prototype to Production

One aspect I'm particularly proud of is how Shraga supports the complete RAG application lifecycle:

1. **POC/Prototyping** - Start with Jupyter notebooks or simple Python scripts
2. **Internal testing** - Use the built-in UI for design partner feedback
3. **Production deployment** - Leverage security, analytics, and cost optimization features
4. **Iteration and improvement** - Built-in tools for evaluation and user feedback collection

## Open Source and Available Now

Shraga is completely open source and available on GitHub:
- **Main framework**: [github.com/ShragaAI/shraga](https://github.com/ShragaAI/shraga)
- **UI components**: [github.com/ShragaAI/shraga-ui](https://github.com/ShragaAI/shraga-ui)
- **Working tutorial**: [github.com/ShragaAI/shraga-tutorial](https://github.com/ShragaAI/shraga-tutorial)

## Why We Built This

As someone who's been working with search technologies for years and now focuses heavily on GenAI applications, I've seen firsthand how the gap between demo and production can derail projects. Shraga represents our opinionated take on what a production-ready RAG framework should look like - minimal enough to understand, powerful enough to scale.

## Read the Full Article

Dive into the complete framework overview and implementation details: [Building RAG Apps Without the Bloat: Meet Shraga](https://bigdataboutique.com/blog/building-rag-apps-without-the-bloat-meet-shraga-c6cb31)

The article includes detailed architecture explanations, code examples, and practical guidance for getting started. Whether you're evaluating RAG frameworks or looking for alternatives to heavier solutions, Shraga offers a fresh perspective on building GenAI applications that can actually make it to production.
