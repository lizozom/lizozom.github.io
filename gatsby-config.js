module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lizakatz.dev/`,
    // Your Name
    name: 'Liza Katz',
    alternateName: 'lizozom',
    // Main Site Title
    title: `Liza Katz | GenAI & Search Consultant | Make AI Make Sense`,
    // Description that goes under your name in main bio
    description: `Pragmatic Search & AI Engineering.`,
    subtitle: `End-to-end GenAI consulting - from use case discovery to production-ready implementation.`,
    // Optional: Twitter account handle
    author: null,
    image: 'https://lizakatz.dev/og.png',
    stackoverflow: 'https://stackoverflow.com/users/372086/lizozom',
    // Optional: Github account URL
    github: `https://github.com/lizozom`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/lizak/`,
    // Content of the About Me section
    about: `<p>Hi, I'm <b>Liza Katz</b>. (aka Lizozom)</p>
<br/>
<p>I am a Senior Software Engineer and Consultant with over 20 years of experience building large-scale backend systems.</p>
<br/>
<p>While the industry chases hype, I focus on the complex intersection of Search Infrastructure (Elasticsearch/OpenSearch) and Generative AI. I help companies move RAG and vector search from "promising POC" to scalable production architecture.</p>
<br/>
<p>Beyond consulting, I believe in demystifying technology. I created the "WTF Are Embeddings?" talk, I deliver workshops, lead hackathons and speak frequently at events like PyCon and BuildStuff.</p>
<br/>
<p>When I'm not debugging pipelines, I'm designing interiors, listening to ABBA, or negotiating with my three cats: Pita, Chooka, and Chonky.</p>`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        id: 'ai21',
        name: 'Human or Not',
        description:
          'AI21 Labs is a leading AI company building foundation models and AI systems. Human or Not is a Social Turing Game where you chat with someone for two minutes and try to figure out if it was a fellow human or an AI bot.<br/><br/>I led the development of the project and scaled the system to handle millions of conversations.<br/><br/><b>**<a href="https://winners.webbyawards.com/2024/ai-metaverse-virtual/ai-apps-and-experiences/media-entertainment/288120/human-or-not" target="_blank">Webby Award Winner!</a>**</b>',
        link: 'https://humanornot.ai/',
        image_link: "https://assets.recogmedia.net/1/139/Entry_Uploads/288120-thumb.jpg",
      },
      {
        id: 'max',
        name: 'Scout AI Agent',
        description:
          'Max Security is a global risk management and intelligence company providing geopolitical analysis and security consulting.<br/><br/>I built an AI assistant providing comprehensive threat intelligence and geo-spatial analysis. The system integrates multiple geopolitical datasets for proactive threat mitigation using AWS, OpenSearch, and Claude.<br/><br/>Presented at AWS re:Invent.',
        link: 'https://www.max-security.com/',
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84qZcNuCCk7TYFKigrt7NEYn06Az4MM7J6w&s"
      },
      {
        id: 'cover',
        name: 'AI Powered Data Analytics',
        description:
          'Cover is an Israeli insurance technology company that simplifies insurance management for consumers.<br/><br/>I designed and implemented an AI powered data analytics pipeline to enable intelligent policy analysis and customer support automation using ClickHouse and OpenAI.',
        link: 'https://www.cover.co.il/',
        image_link: "https://www.cover.co.il/wp-content/uploads/2025/03/cover-blue-logo.png"
      },
      {
        name: 'Hybrid Search Bar',
        description:
          'ScreenSteps is a knowledge base platform that helps organizations create and share documentation for employee training and support.<br/><br/>I developed hybrid search combining keyword and semantic search, significantly improving customer article discovery and support efficiency using Elasticsearch and AWS Bedrock.',
        link: 'https://www.screensteps.com/',
        image_link: "https://www.screensteps.com/hubfs/2024/Brand/Elements/2024%20Logo%20Updates/Primary%20Logos/0524-Logos-SS-Black.svg"
      },
      {
        name: 'Tube Uni',
        description:
          '<b>**<a href="https://devpost.com/software/tube-uni" target="_blank">Google AI Hackathon Winner!</a>**</b><br/><br/>Tube Uni is an AI-powered application that generates custom podcasts on any topic.<br/><br/>I built this project using Gemini 1.5 Pro, creating a system that transforms any subject into engaging audio content with natural-sounding conversations.',
        link: 'https://devpost.com/software/tube-uni',
        image_link: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/874/400/datas/medium.png"
      },
      {
        name: 'MoMa AI Assistant',
        description:
          'Nayax is a global fintech company providing cashless payment and management solutions for unattended retail and vending machines.<br/><br/>I built a ReAct AI assistant for vending machine operators, improving maintenance workflows and customer service. The solution uses a custom OpenAI deployment on Azure with prompt engineering, automation, evaluation, and monitoring.',
        link: 'https://www.nayax.com/',
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRn5BlEfjbCB1kGKNSCyeHwxyLn7tfg3Suxw&s"
      },
      {
        id: 'goods',
        name: 'Elasticsearch Analytics',
        description:
          'mygoods is an order fulfillment platform that helps e-commerce businesses manage inventory and shipping operations.<br/><br/>I developed the analytics strategy and Elasticsearch integration, building customer dashboards for inventory management and order analytics that provide real-time business insights.',
        link: 'https://mygoods.io/',
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q4dWU_TLV0PxhS10PVL8VKHQ2kDLyjJDeA&s"
      },
      {
        id: 'outburn',
        name: 'Open Source Infrastructure',
        image_link: "https://outburn.health/wp-content/uploads/Outburn-Logo.webp",
        description:
          'Outburn is a healthcare technology company specializing in FHIR-based interoperability solutions for medical data exchange.<br/><br/>I prepared their healthcare API codebase for open source contributions, building an automation pipeline with GitHub Actions, TypeScript implementation, and comprehensive contribution documentation.',
        link: 'https://github.com/Outburn-IL/fume-community',
      },
      // {
      //   name: 'Catomolo infrastructure',
      //   description:
      //     'Modernized infrastructure for Israeli Environmental Protection Agency game. Built Next.js game server and implemented comprehensive monitoring.',
      //   link: 'https://play.google.com/store/apps/details?id=com.mooistudios.dedi',
      // },
      // {
      //   name: 'ncnn WebAssembly YOLOV5',
      //   image_link: "https://avatars.githubusercontent.com/u/26833451?s=200&v=4",
      //   description:
      //     'Open source contribution enabling YOLOV5 inference directly in browsers via WebAssembly.',
      //   link: 'https://github.com/lizozom/ncnn-webassembly-YOLOV5',
      // },
      // {
      //   name: 'Custom Kibana Theme Plugin',
      //   description:
      //     'Open source Kibana plugin enabling custom themes and branding. Addresses <a href="https://github.com/elastic/kibana/issues/17879" target="_blank">long-requested feature</a> for logos, icons, and UI customization.',
      //   link: 'https://github.com/lizozom/custom-kibana-theme',
      // },
      // {
      //   name: 'Docker Elastic Observability',
      //   description:
      //     'Docker Compose setup demonstrating full observability stack. Elasticsearch, APM Server, and Node.js agents for metrics and trace reporting.',
      //   link: 'https://github.com/lizozom/docker-elastic-observability-with-apm',
      // },
      // {
      //   name: 'DjangoGirls Conference Organizer',
      //   description:
      //     'Organized 2 DjangoGirls conferences in the RedHat offices in Raanana',
      //   link: 'http://railsgirls.com/',
      // }, 
      
      
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Big Data Boutique',
        description: '<b>Gen AI Team Lead, August 2024 - Present</b><br/>Leading a team of 3 engineers (Data Science, Full Stack and DevOps). Developed several production RAG applications on top of OpenSearch\\ElasticSearch, using aws cloud tools such as Bedrock, SageMaker, EC2, AWS Lambda, ECS, S3 with all leading LLMs (Gemini, Claude, GPT-x)',
        link: 'https://bigdataboutique.com/',
      },
      {
        name: 'Independent Consultant & Developer',
        description: '<b>Consultant & Full-Stack Developer, January 2023 - Present</b><br/>Worked with several customers including AI21, mygoods.io, Outburn LTD and more. I focus on projects that focus on developing LLM-powered user experiences, powered by big data and search capabilities',
        link: 'https://lizakatz.dev/',
      },
      {
        name: 'Elastic',
        description: '<b>Principal Full-Stack Developer, Performance Area Lead, January 2019 - December 2022</b><br/>Worked on the Kibana architecture & services team, focused on delivering common services and React components to platform and solution teams. My contributions to <a href="https://github.com/elastic/kibana/pulls?q=is%3Apr+author%3Alizozom" target="_blank">Kibana</a>, <a href="https://github.com/lizozom/kibana-load-testing" target="_blank">Kibana Load Testing</a>, <a href="https://github.com/lizozom/kibana-capacity-test" target="_blank">Kibana Capacity Test</a> and more were made in private repositories. I was also the <b>Performance Area Lead for Kibana</b>, responsible for the performance of the Kibana platform.',
        link: 'https://elastic.co',
      },
      {
        name: 'ironSource [Unity]',        
        description: '<b>Full-Stack Developer, Team Lead, May 2013 - April 2018</b><br/>Developed the MobileCore SDK, a cross-platform SDK for mobile developers to monetize their apps. I was responsible for the SDK\'s architecture, design, and implementation. I then led a team of developers and QA engineers, to develop a mobile video advertising solution, supporting cutting edge ad formats, advertising standards and targeting options. A lot of my work was focused on ad serving business logic, which led to optimizations, <b>cutting upto 70% of data and traffic costs</b>.',
        link: 'https://www.is.com/',
      },
      {
        name: 'Platonix Joint Ventures',
        description: '<b>Full-Stack Developer, 2008 - 2013</b><br/>Worked as a fulltime freelance developer for a private equity firm. I was involved in multiple projects of different scales and complexities, using a variety of programming languages and environments, per customer requirements. Worked directly with customers from multiple industries, including finance, healthcare, and entertainment.',
        link: 'https://www.crunchbase.com/organization/platonix-joint-ventures',
      },
      {
        name: 'AISeek',
        description: '<b>Embedded C \\ C++ Developer, 2006 - 2008</b><br/>AISeek developed an hardware that could accelerate the execution of A* algorithms on hardware, hence allowing to improve NPC AI in games. I was involved in the development of the hardware\'s firmware, and the software that interfaced with it. I also developed a custom C++ library for the hardware\'s API.',
        link: 'https://www.calcalist.co.il/internet/articles/0,7340,L-3252723,00.html',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, (ES6+), TypeScript,  Next.js, Node.js',
      },
      {
        name: 'Databases',
        description: 'Elasticsearch, OpenSearch, Redis, PostreSQL, BigQuery, RedShift',
      },
      {
        name: 'Other',
        description:
          'GCP, Vertex AI, AWS, Bedrock, Docker, Roboflow, Vercel, Github Actions',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/dev-404-page/`, `/404/`, `/404.html`, `/offline-plugin-app-shell-fallback/`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark {
              nodes {
                fields {
                  slug
                }
                frontmatter {
                  date
                }
              }
            }
          }
        `,
        serialize: ({ path, ...rest }) => {
          return {
            url: path,
            changefreq: `daily`,
            priority: path === `/` ? 1.0 : path.includes(`/blog/`) ? 0.8 : 0.5,
            lastmod: new Date().toISOString(),
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                name
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.description || node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(
                sort: { frontmatter: { date: DESC } }
              ) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    description
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Liza Katz's Blog RSS Feed",
            description: "Latest blog posts about AI, search technologies, and software engineering",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
