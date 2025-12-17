module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://lizozom.com/`,
    // Your Name
    name: 'Liza Katz',
    alternateName: 'lizozom',
    // Main Site Title
    title: `Liza Katz (lizozom) | AI Engineer & GenAI Consultant | Make AI Make Sense`,
    // Description that goes under your name in main bio
    description: `Helping teams and audiences make AI make sense through public speaking, workshops and hands-on Big Data & GenAI consulting.`,
    subtitle: `Public speaking, workshops and hands-on Big Data & GenAI consulting.`,
    // Optional: Twitter account handle
    author: null,
    image: 'https://lizozom.com/og.png',
    stackoverflow: 'https://stackoverflow.com/users/372086/lizozom',
    // Optional: Github account URL
    github: `https://github.com/lizozom`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/lizak/`,
    // Content of the About Me section
    about: `Seasoned software engineer and team lead specializing in GenAI, search, and scalable systems. I build RAG applications, AI agents, and hybrid search solutions using Python, TypeScript, Next.js, and modern frameworks.
    <br/><br/>
    As a consultant, I've delivered end-to-end GenAI projects for clients across industries. My background spans ad-tech, finance, and big data with deep expertise in Elasticsearch, OpenSearch, and LLM-powered applications.
    <br/><br/>
    Recent wins: <a href="https://winners.webbyawards.com/2024/ai-metaverse-virtual/ai-apps-and-experiences/media-entertainment/288120/human-or-not" target="_blank">Webby Award</a> for "Human or Not" and Google AI Hackathon winner for "Tube Uni."
    <br/><br/>
    <b>Available for GenAI consulting, partnerships, public speaking, and private workshops.</b>`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        id: 'ai21',
        name: 'Human or Not [AI21]',
        description:
          '<b>**<a href="https://winners.webbyawards.com/2024/ai-metaverse-virtual/ai-apps-and-experiences/media-entertainment/288120/human-or-not" target="_blank">Webby Award Winner!</a>**</b> A Social Turing Game. Chat with someone for two minutes, and try to figure out if it was a fellow human or an AI bot. Think you can tell the difference?',
        link: 'https://humanornot.ai/',
        image_link: "https://assets.recogmedia.net/1/139/Entry_Uploads/288120-thumb.jpg",
      },
      {
        id: 'max',
        name: 'Scout AI Agent',
        description:
          'Built an AI assistant providing comprehensive threat intelligence and geo-spatial analysis. Integrates multiple geopolitical datasets for proactive threat mitigation. AWS, OpenSearch, Claude.',
        link: 'https://www.max-security.com/',
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84qZcNuCCk7TYFKigrt7NEYn06Az4MM7J6w&s"
      },
      {
        id: 'cover',
        name: 'AI Powered Data Analytics',
        description:
          'Designed data analytics pipelines and RAG architecture for an insurance AI agent. OpenSearch, OpenAI, n8n.',
        link: 'https://www.cover.co.il/',
        image_link: "https://www.cover.co.il/wp-content/uploads/2025/03/cover-blue-logo.png"
      },
      {
        name: 'Hybrid Search optimization',
        description:
          'Developed hybrid search combining keyword and semantic search for knowledge base platform. Improved customer article discovery and support efficiency. Elasticsearch, AWS Bedrock.',
        link: 'https://www.screensteps.com/',
        image_link: "https://www.screensteps.com/hubfs/2024/Brand/Elements/2024%20Logo%20Updates/Primary%20Logos/0524-Logos-SS-Black.svg"
      },
      {
        name: 'Tube Uni',
        description:
          '<b>**<a href="https://devpost.com/software/tube-uni" target="_blank">Google AI Hackathon Winner!</a>**</b> An AI-powered application that generates custom podcasts on any topic, using Gemini 1.5 Pro.',
        link: 'https://tubeuni.app/',
        image_link: "https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/874/400/datas/medium.png"
      },
      {
        name: 'MoMa AI Assistant',
        description:
          'Built ReAct AI assistant for vending machine operators, improving maintenance and customer service. Custom OpenAI deployment on Azure with <b>prompt engineering, automation, evaluation and monitoring</b>.',
        link: 'https://www.nayax.com/',
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRn5BlEfjbCB1kGKNSCyeHwxyLn7tfg3Suxw&s"
      },
      {
        id: 'goods',
        name: 'Elasticsearch integration and analytics',
        description:
          'Developed analytics strategy and Elasticsearch integration for order fulfillment platform. Built customer dashboards for inventory management and order analytics.',
        link: 'https://mygoods.io/',
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q4dWU_TLV0PxhS10PVL8VKHQ2kDLyjJDeA&s"
      },
      {
        id: 'outburn',
        name: 'Automation and OpenSource infra',
        image_link: "https://outburn.health/wp-content/uploads/2022/01/outburn-logo-white-medium.png",
        description:
          'Prepared FHIR-based healthcare API codebase for open source contributions. Built automation pipeline with GitHub Actions, TypeScript implementation, and contribution documentation.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      // {
      //   name: 'Catomolo infrastructure',
      //   description:
      //     'Modernized infrastructure for Israeli Environmental Protection Agency game. Built Next.js game server and implemented comprehensive monitoring.',
      //   link: 'https://play.google.com/store/apps/details?id=com.mooistudios.dedi',
      // },
      {
        name: 'ncnn WebAssembly YOLOV5',
        image_link: "https://avatars.githubusercontent.com/u/26833451?s=200&v=4",
        description:
          'Open source contribution enabling YOLOV5 inference directly in browsers via WebAssembly.',
        link: 'https://github.com/lizozom/ncnn-webassembly-YOLOV5',
      },
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
        link: 'https://lizozom.com/',
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
