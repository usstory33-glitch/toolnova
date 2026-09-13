export const tools = [
  {
    id: 1,
    name: "ChatGPT",
    logo: "/logos/chatgpt.png",
    featured: true,
    popular: true,
    editorsChoice: true,
    category: "AI Writing",
    rating: "4.9",
    users: "2M+",
    description:
      "AI assistant for writing, coding, research, learning, and everyday tasks.",
    website: "https://chatgpt.com",
    pricing: "Free & Paid",

    overview:
      "ChatGPT is a general-purpose AI assistant that can help users write and edit content, understand complex topics, generate ideas, work with code, summarize information, and complete everyday tasks. It is designed for both beginners and experienced users who want an AI assistant for a wide range of activities.",

    useCases: [
      "Writing and editing articles, emails, and documents",
      "Learning and explaining difficult topics",
      "Generating and improving code",
      "Brainstorming ideas and creating outlines",
      "Summarizing and organizing information",
    ],

    bestFor: [
      "Students and learners",
      "Content writers",
      "Developers",
      "Researchers",
      "Professionals and everyday users",
    ],

    pros: [
      "Wide range of use cases",
      "Useful for writing and coding",
      "Simple conversational interface",
      "Helpful for brainstorming and learning",
    ],

    cons: [
      "AI responses may require fact checking",
      "Some advanced features require a paid plan",
      "Response quality can vary depending on the prompt",
    ],

    pricingDetails:
      "ChatGPT offers free access with additional features and capabilities available through paid plans. Available features and limits can vary by plan.",

    featureDetails: [
      {
        name: "Content Writing",
        description:
          "Helps create, rewrite, expand, and improve different types of written content.",
      },
      {
        name: "Coding Help",
        description:
          "Can explain code, suggest solutions, identify potential problems, and help developers work through programming tasks.",
      },
      {
        name: "Research",
        description:
          "Can help organize information, compare ideas, summarize material, and support research workflows.",
      },
      {
        name: "Translation",
        description:
          "Can translate and rewrite text across multiple languages while helping preserve context and meaning.",
      },
    ],

    faq: [
      {
        question: "What is ChatGPT used for?",
        answer:
          "ChatGPT can be used for writing, coding, learning, brainstorming, research support, summarization, translation, and many everyday tasks.",
      },
      {
        question: "Is ChatGPT free?",
        answer:
          "ChatGPT has a free option as well as paid plans with additional capabilities.",
      },
      {
        question: "Can ChatGPT help with coding?",
        answer:
          "Yes. ChatGPT can explain programming concepts, review code, suggest solutions, and help troubleshoot coding problems.",
      },
    ],

    alternatives: ["Claude", "Gemini"],

    features: [
      "Content Writing",
      "Coding Help",
      "Research",
      "Translation",
    ],
  },

  {
    id: 2,
    name: "Claude",
    logo: "/logos/claude.png",
    featured: true,
    popular: true,
    editorsChoice: true,
    category: "AI Writing",
    rating: "4.9",
    users: "2M+",
    description:
      "Advanced AI assistant for writing, research, analysis, coding, and long-form content.",
    website: "https://claude.ai",
    pricing: "Free & Paid",

    overview:
      "Claude is an AI assistant designed for writing, analysis, research support, coding, summarization, and working with long-form information. Its conversational approach makes it useful when users need help understanding or organizing detailed material.",

    useCases: [
      "Writing and editing long-form content",
      "Summarizing large amounts of text",
      "Analyzing documents and information",
      "Generating and reviewing code",
      "Brainstorming and structured problem solving",
    ],

    bestFor: [
      "Writers and editors",
      "Students and researchers",
      "Developers",
      "Professionals working with documents",
      "Users handling long-form content",
    ],

    pros: [
      "Strong long-form writing support",
      "Useful for analysis and summarization",
      "Can assist with coding tasks",
      "Clean conversational workflow",
    ],

    cons: [
      "Some capabilities depend on the selected plan",
      "AI-generated information still needs verification",
      "Availability of features can change over time",
    ],

    pricingDetails:
      "Claude provides free access with paid options that can provide additional usage and capabilities. Plans and limits may change over time.",

    featureDetails: [
      {
        name: "Long-form Writing",
        description:
          "Helps users draft, rewrite, organize, and improve longer pieces of content.",
      },
      {
        name: "Research",
        description:
          "Supports research workflows by helping organize information, summarize material, and explore ideas.",
      },
      {
        name: "Summarization",
        description:
          "Can turn lengthy text into shorter summaries and structured explanations.",
      },
      {
        name: "Coding",
        description:
          "Can explain programming concepts, review code, and assist with development tasks.",
      },
    ],

    faq: [
      {
        question: "What is Claude used for?",
        answer:
          "Claude can help with writing, analysis, summarization, research support, coding, and other knowledge-based tasks.",
      },
      {
        question: "Is Claude free?",
        answer:
          "Claude offers a free option as well as paid plans with additional capabilities.",
      },
      {
        question: "Can Claude help with long documents?",
        answer:
          "Claude is designed to work with detailed information and can help users analyze and summarize long-form content.",
      },
    ],

    alternatives: ["ChatGPT", "Gemini"],

    features: [
      "Long-form Writing",
      "Research",
      "Summarization",
      "Coding",
    ],
  },

  {
    id: 3,
    name: "Midjourney",
    logo: "/logos/midjourney.png",
    featured: true,
    popular: true,
    editorsChoice: false,
    category: "AI Image",
    rating: "4.9",
    users: "2M+",
    description:
      "AI image generator for creating high-quality artwork, illustrations, and creative visuals.",
    website: "https://www.midjourney.com",
    pricing: "Paid",

    overview:
      "Midjourney is an AI image generation platform focused on creating artistic and creative visuals from text prompts. It can be useful for concept development, illustrations, visual experimentation, and other creative projects.",

    useCases: [
      "Creating AI-generated artwork",
      "Developing visual concepts",
      "Creating illustrations",
      "Exploring creative styles",
      "Generating ideas for design projects",
    ],

    bestFor: [
      "Digital artists",
      "Designers",
      "Creative professionals",
      "Content creators",
      "Users exploring AI-generated visuals",
    ],

    pros: [
      "Strong focus on creative image generation",
      "Useful for visual experimentation",
      "Good for concept and illustration workflows",
      "Large range of creative possibilities",
    ],

    cons: [
      "Paid service",
      "Results depend heavily on prompt quality",
      "Generated images may require multiple attempts",
      "AI-generated results may not always match the exact request",
    ],

    pricingDetails:
      "Midjourney is a paid AI image generation service. Current plans, features, and usage limits should be checked on its official website.",

    featureDetails: [
      {
        name: "AI Art",
        description:
          "Creates artistic visuals based on user-provided prompts and creative directions.",
      },
      {
        name: "Image Generation",
        description:
          "Generates images from text descriptions for a variety of creative purposes.",
      },
      {
        name: "Concept Design",
        description:
          "Can help users explore early visual concepts and creative directions.",
      },
      {
        name: "Illustrations",
        description:
          "Useful for generating illustrated and stylized visual concepts.",
      },
    ],

    faq: [
      {
        question: "What is Midjourney used for?",
        answer:
          "Midjourney is primarily used to create AI-generated artwork, illustrations, concepts, and other creative visuals.",
      },
      {
        question: "Is Midjourney free?",
        answer:
          "Midjourney is listed as a paid AI image generation service.",
      },
      {
        question: "Who can benefit from Midjourney?",
        answer:
          "Artists, designers, content creators, and other creative users can use Midjourney for visual experimentation and image creation.",
      },
    ],

    alternatives: ["Leonardo AI", "Canva AI"],

    features: [
      "AI Art",
      "Image Generation",
      "Concept Design",
      "Illustrations",
    ],
  },

  {
    id: 4,
    name: "Runway",
    logo: "/logos/runway.png",
    featured: true,
    popular: true,
    editorsChoice: false,
    category: "AI Video",
    rating: "4.8",
    users: "1.5M+",
    description:
      "AI video creation and editing platform for generating videos, visual effects, and creative content.",
    website: "https://runwayml.com",
    pricing: "Free & Paid",

    overview:
      "Runway is an AI-powered creative platform focused on video generation and editing. It provides tools that can help creators experiment with generated video, visual effects, background removal, and other video production workflows.",

    useCases: [
      "Creating AI-generated video content",
      "Editing and enhancing videos",
      "Creating visual effects",
      "Removing backgrounds",
      "Experimenting with creative video concepts",
    ],

    bestFor: [
      "Video creators",
      "Filmmakers",
      "Content creators",
      "Designers",
      "Creative teams",
    ],

    pros: [
      "Focused on AI-powered video workflows",
      "Useful for creative experimentation",
      "Includes video editing capabilities",
      "Can assist with visual effects",
    ],

    cons: [
      "Some features may require paid access",
      "AI video generation can require experimentation",
      "Generated results may vary by prompt",
    ],

    pricingDetails:
      "Runway offers free and paid access options. Features and usage limits depend on the selected plan and may change over time.",

    featureDetails: [
      {
        name: "Video Editing",
        description:
          "Provides tools for editing and working with video content in an AI-assisted workflow.",
      },
      {
        name: "Text to Video",
        description:
          "Allows users to explore video generation based on written descriptions.",
      },
      {
        name: "AI Effects",
        description:
          "Helps creators experiment with AI-assisted visual effects and transformations.",
      },
      {
        name: "Background Removal",
        description:
          "Can assist with separating subjects from backgrounds in visual content.",
      },
    ],

    faq: [
      {
        question: "What is Runway used for?",
        answer:
          "Runway is used for AI-assisted video creation, editing, visual effects, and other creative video workflows.",
      },
      {
        question: "Does Runway have a free option?",
        answer:
          "Runway offers free and paid access options, with capabilities depending on the selected plan.",
      },
      {
        question: "Who should use Runway?",
        answer:
          "Runway can be useful for video creators, filmmakers, designers, and content creators interested in AI-assisted video production.",
      },
    ],

    alternatives: ["Descript", "Midjourney"],

    features: [
      "Video Editing",
      "Text to Video",
      "AI Effects",
      "Background Removal",
    ],
  },

  {
    id: 5,
    name: "ElevenLabs",
    logo: "/logos/elevenlabs.png",
    featured: false,
    popular: true,
    editorsChoice: false,
    category: "AI Audio",
    rating: "4.8",
    users: "1M+",
    description:
      "AI voice platform for realistic text-to-speech, voice generation, dubbing, and voice cloning.",
    website: "https://elevenlabs.io",
    pricing: "Free & Paid",

    overview:
      "ElevenLabs is an AI audio platform focused on speech and voice generation. It can be used for text-to-speech, voice creation, dubbing, and other audio production workflows.",

    useCases: [
      "Creating AI voiceovers",
      "Converting text into speech",
      "Creating voice-based content",
      "Dubbing content into other languages",
      "Experimenting with synthetic voices",
    ],

    bestFor: [
      "Content creators",
      "Video creators",
      "Podcasters",
      "Developers",
      "Audio production teams",
    ],

    pros: [
      "Focused on AI voice generation",
      "Useful for voiceover workflows",
      "Supports text-to-speech use cases",
      "Useful for multilingual audio projects",
    ],

    cons: [
      "Some capabilities require paid access",
      "Voice generation should be used responsibly",
      "Results can vary depending on text and settings",
    ],

    pricingDetails:
      "ElevenLabs provides free and paid options for AI voice and audio services. Current plans and usage limits should be checked on the official website.",

    featureDetails: [
      {
        name: "Text to Speech",
        description:
          "Converts written text into generated speech for different content workflows.",
      },
      {
        name: "Voice Cloning",
        description:
          "Provides technology for creating synthetic versions of voices, subject to the platform's requirements and policies.",
      },
      {
        name: "AI Voices",
        description:
          "Provides generated voices that can be used in audio and content creation workflows.",
      },
      {
        name: "Dubbing",
        description:
          "Can assist with creating spoken versions of content for different languages and audiences.",
      },
    ],

    faq: [
      {
        question: "What is ElevenLabs used for?",
        answer:
          "ElevenLabs is used for AI-generated speech, voiceovers, voice creation, and dubbing workflows.",
      },
      {
        question: "Does ElevenLabs have a free option?",
        answer:
          "ElevenLabs offers free and paid options, with usage and capabilities depending on the plan.",
      },
      {
        question: "Can ElevenLabs create voiceovers?",
        answer:
          "Yes. Its text-to-speech capabilities can be used to create generated voiceovers from written text.",
      },
    ],

    alternatives: ["Descript", "Runway"],

    features: [
      "Text to Speech",
      "Voice Cloning",
      "AI Voices",
      "Dubbing",
    ],
  },

  {
    id: 6,
    name: "GitHub Copilot",
    logo: "/logos/github-copilot.png",
    featured: false,
    popular: true,
    editorsChoice: false,
    category: "AI Coding",
    rating: "4.7",
    users: "1.3M+",
    description:
      "AI coding assistant that helps developers write, understand, improve, and debug code.",
    website: "https://github.com/features/copilot",
    pricing: "Paid",

    overview:
      "GitHub Copilot is an AI coding assistant designed to support developers during software development. It can help generate code suggestions, explain code, assist with debugging, and support common programming workflows.",

    useCases: [
      "Generating code suggestions",
      "Understanding existing code",
      "Finding and fixing potential bugs",
      "Writing documentation",
      "Learning programming concepts",
    ],

    bestFor: [
      "Software developers",
      "Web developers",
      "Programming students",
      "Development teams",
      "Engineers working with large codebases",
    ],

    pros: [
      "Designed specifically for coding workflows",
      "Can speed up repetitive programming tasks",
      "Useful for code explanations",
      "Can assist with debugging and documentation",
    ],

    cons: [
      "Primarily focused on programming workflows",
      "Paid access may be required",
      "Generated code should be reviewed before use",
      "Suggestions can sometimes require correction",
    ],

    pricingDetails:
      "GitHub Copilot is available through paid plans, with plan features and pricing subject to change. Check the official GitHub website for current details.",

    featureDetails: [
      {
        name: "Code Completion",
        description:
          "Provides AI-generated suggestions while developers write code.",
      },
      {
        name: "Bug Fixing",
        description:
          "Can help developers understand potential problems and work through possible fixes.",
      },
      {
        name: "Code Suggestions",
        description:
          "Generates programming suggestions based on the surrounding code and developer instructions.",
      },
      {
        name: "Documentation",
        description:
          "Can help developers create explanations and documentation for software projects.",
      },
    ],

    faq: [
      {
        question: "What is GitHub Copilot used for?",
        answer:
          "GitHub Copilot helps developers write, understand, improve, and debug code using AI-assisted programming features.",
      },
      {
        question: "Is GitHub Copilot free?",
        answer:
          "GitHub Copilot is listed as a paid AI coding service, although GitHub may offer different plans or eligibility options over time.",
      },
      {
        question: "Who should use GitHub Copilot?",
        answer:
          "It is mainly useful for software developers, programmers, students, and teams working on software projects.",
      },
    ],

    alternatives: ["ChatGPT", "Claude"],

    features: [
      "Code Completion",
      "Bug Fixing",
      "Code Suggestions",
      "Documentation",
    ],
  },

  {
    id: 7,
    name: "Perplexity",
    logo: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
    featured: true,
    popular: true,
    editorsChoice: true,
    category: "AI Writing",
    rating: "4.8",
    users: "10M+",
    description:
      "AI-powered search and research assistant for finding information and exploring topics.",
    website: "https://www.perplexity.ai",
    pricing: "Free & Paid",

    overview:
      "Perplexity is an AI-powered search and research platform designed to help users explore questions and topics through conversational searches. It can be useful for researching subjects, comparing information, and discovering sources.",

    useCases: [
      "Researching topics and questions",
      "Finding information quickly",
      "Comparing different ideas",
      "Exploring current topics",
      "Creating research summaries",
    ],

    bestFor: [
      "Students",
      "Researchers",
      "Writers",
      "Professionals",
      "People who want AI-assisted search",
    ],

    pros: [
      "Combines search with AI responses",
      "Useful for research workflows",
      "Helpful for exploring unfamiliar topics",
      "Conversational search experience",
    ],

    cons: [
      "Important information should still be verified",
      "Some advanced capabilities may require a paid plan",
      "Search results can vary depending on the query",
    ],

    pricingDetails:
      "Perplexity offers free access along with paid options that provide additional capabilities. Current plans and limits should be checked on the official website.",

    featureDetails: [
      {
        name: "AI Search",
        description:
          "Uses AI-assisted search to help users explore questions and find relevant information.",
      },
      {
        name: "Research",
        description:
          "Helps users investigate topics and organize information for research workflows.",
      },
      {
        name: "Question Answering",
        description:
          "Provides conversational answers to questions while helping users explore related information.",
      },
      {
        name: "Source Discovery",
        description:
          "Helps users discover sources and information related to their searches.",
      },
    ],

    faq: [
      {
        question: "What is Perplexity used for?",
        answer:
          "Perplexity can be used for AI-assisted search, research, question answering, and exploring information.",
      },
      {
        question: "Is Perplexity free?",
        answer:
          "Perplexity offers a free option as well as paid plans with additional capabilities.",
      },
      {
        question: "Is Perplexity useful for research?",
        answer:
          "Yes. It can help users explore topics, find information, and organize research material.",
      },
    ],

    alternatives: ["ChatGPT", "Gemini"],

    features: [
      "AI Search",
      "Research",
      "Question Answering",
      "Source Discovery",
    ],
  },

  {
    id: 8,
    name: "Canva AI",
    logo: "https://www.google.com/s2/favicons?domain=canva.com&sz=128",
    featured: true,
    popular: true,
    editorsChoice: true,
    category: "AI Image",
    rating: "4.7",
    users: "170M+",
    description:
      "AI-powered design tools for creating graphics, presentations, images, and visual content.",
    website: "https://www.canva.com",
    pricing: "Free & Paid",

    overview:
      "Canva is a visual design platform that includes AI-powered features for creating and editing graphics, presentations, social media content, and other visual materials. It is designed to make visual content creation accessible to a wide range of users.",

    useCases: [
      "Creating social media graphics",
      "Designing presentations",
      "Creating posters and flyers",
      "Generating visual content",
      "Editing images and designs",
    ],

    bestFor: [
      "Students",
      "Content creators",
      "Small businesses",
      "Marketers",
      "Design beginners",
    ],

    pros: [
      "Easy-to-use design interface",
      "Large range of design templates",
      "Useful AI-assisted design features",
      "Suitable for beginners",
    ],

    cons: [
      "Some features require a paid plan",
      "Advanced users may prefer specialized design software",
      "Available features can change over time",
    ],

    pricingDetails:
      "Canva provides free access with paid plans that unlock additional features, assets, and capabilities. Current pricing and plan limits should be checked on the official website.",

    featureDetails: [
      {
        name: "AI Design",
        description:
          "Helps users create and improve visual designs using AI-assisted tools.",
      },
      {
        name: "Image Creation",
        description:
          "Provides tools for creating and working with visual content.",
      },
      {
        name: "Presentations",
        description:
          "Helps users create visual presentations and supporting graphics.",
      },
      {
        name: "Social Media Design",
        description:
          "Provides templates and design tools for social media content.",
      },
    ],

    faq: [
      {
        question: "What is Canva AI used for?",
        answer:
          "Canva AI can help users create graphics, presentations, images, social media content, and other visual designs.",
      },
      {
        question: "Is Canva free?",
        answer:
          "Canva offers free access along with paid plans that provide additional features and resources.",
      },
      {
        question: "Is Canva good for beginners?",
        answer:
          "Yes. Canva is designed with an accessible interface that makes visual design easier for beginners.",
      },
    ],

    alternatives: ["Midjourney", "Leonardo AI"],

    features: [
      "AI Design",
      "Image Creation",
      "Presentations",
      "Social Media Design",
    ],
  },

  {
    id: 9,
    name: "Gemini",
    logo: "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128",
    featured: true,
    popular: true,
    editorsChoice: true,
    category: "AI Writing",
    rating: "4.8",
    users: "10M+",
    description:
      "Google AI assistant for writing, learning, brainstorming, coding, and everyday tasks.",
    website: "https://gemini.google.com",
    pricing: "Free & Paid",

    overview:
      "Gemini is an AI assistant from Google that can help users with writing, brainstorming, learning, coding, summarization, and other information-based tasks. It is designed for both everyday users and people working with more advanced AI-assisted workflows.",

    useCases: [
      "Writing and editing content",
      "Learning and explaining concepts",
      "Brainstorming ideas",
      "Getting help with coding",
      "Summarizing information",
    ],

    bestFor: [
      "Students",
      "Writers",
      "Developers",
      "Professionals",
      "Everyday AI users",
    ],

    pros: [
      "Wide range of everyday use cases",
      "Useful for writing and learning",
      "Can assist with coding",
      "Simple conversational workflow",
    ],

    cons: [
      "AI responses may need verification",
      "Some features depend on plan or availability",
      "Capabilities can change over time",
    ],

    pricingDetails:
      "Gemini provides free access with additional capabilities available through paid options. Current features and plan limits should be checked on the official Google website.",

    featureDetails: [
      {
        name: "Writing",
        description:
          "Helps users draft, rewrite, summarize, and improve written content.",
      },
      {
        name: "Learning",
        description:
          "Can explain concepts and help users explore educational topics.",
      },
      {
        name: "Coding",
        description:
          "Can help explain programming concepts and work through coding tasks.",
      },
      {
        name: "Brainstorming",
        description:
          "Helps users generate ideas, outlines, and possible approaches to problems.",
      },
    ],

    faq: [
      {
        question: "What is Gemini used for?",
        answer:
          "Gemini can help with writing, learning, brainstorming, coding, summarization, and everyday information-based tasks.",
      },
      {
        question: "Is Gemini free?",
        answer:
          "Gemini has free access options, with additional capabilities available through paid plans.",
      },
      {
        question: "Can Gemini help with coding?",
        answer:
          "Yes. Gemini can explain programming concepts and assist with coding-related tasks.",
      },
    ],

    alternatives: ["ChatGPT", "Claude"],

    features: [
      "Writing",
      "Learning",
      "Coding",
      "Brainstorming",
    ],
  },

  {
    id: 10,
    name: "Notion AI",
    logo: "https://www.google.com/s2/favicons?domain=notion.so&sz=128",
    featured: false,
    popular: true,
    editorsChoice: true,
    category: "AI Writing",
    rating: "4.6",
    users: "5M+",
    description:
      "AI-powered workspace features for writing, summarizing, organizing, and managing information.",
    website: "https://www.notion.so/product/ai",
    pricing: "Free & Paid",

    overview:
      "Notion AI adds AI-powered capabilities to the Notion workspace. It can help users write and edit content, summarize information, organize notes, and work with knowledge inside their workspace.",

    useCases: [
      "Writing and editing notes",
      "Summarizing documents",
      "Creating project content",
      "Organizing information",
      "Generating ideas and outlines",
    ],

    bestFor: [
      "Students",
      "Writers",
      "Project teams",
      "Knowledge workers",
      "Productivity-focused users",
    ],

    pros: [
      "Integrated into a productivity workspace",
      "Useful for organizing information",
      "Helpful for writing and summaries",
      "Supports collaborative workflows",
    ],

    cons: [
      "Some AI features require paid access",
      "Best suited to users already using a workspace",
      "AI output should still be reviewed",
    ],

    pricingDetails:
      "Notion provides workspace plans with AI capabilities that may depend on the selected plan. Current pricing and AI availability should be checked on the official website.",

    featureDetails: [
      {
        name: "AI Writing",
        description:
          "Helps users draft, rewrite, improve, and organize written content.",
      },
      {
        name: "Summarization",
        description:
          "Can create shorter summaries from notes and longer pieces of information.",
      },
      {
        name: "Workspace Assistance",
        description:
          "Provides AI assistance within a workspace for information and productivity tasks.",
      },
      {
        name: "Brainstorming",
        description:
          "Can help generate ideas, outlines, and starting points for projects.",
      },
    ],

    faq: [
      {
        question: "What is Notion AI used for?",
        answer:
          "Notion AI can help with writing, summarization, brainstorming, organization, and productivity tasks inside Notion.",
      },
      {
        question: "Is Notion AI free?",
        answer:
          "Notion offers different plans and AI availability can depend on the selected plan.",
      },
      {
        question: "Who should use Notion AI?",
        answer:
          "It can be useful for students, writers, project teams, professionals, and people who organize information in Notion.",
      },
    ],

    alternatives: ["ChatGPT", "Claude"],

    features: [
      "AI Writing",
      "Summarization",
      "Workspace Assistance",
      "Brainstorming",
    ],
  },

  {
    id: 11,
    name: "Descript",
    logo: "https://www.google.com/s2/favicons?domain=descript.com&sz=128",
    featured: false,
    popular: true,
    editorsChoice: false,
    category: "AI Audio",
    rating: "4.6",
    users: "1M+",
    description:
      "AI-powered audio and video editor for podcasts, videos, transcripts, and content creation.",
    website: "https://www.descript.com",
    pricing: "Free & Paid",

    overview:
      "Descript is a media editing platform designed for audio and video workflows. It combines transcription with editing tools and AI-assisted features that can help creators produce podcasts, videos, and other media content.",

    useCases: [
      "Editing podcasts",
      "Creating and editing videos",
      "Generating transcripts",
      "Cleaning up recorded content",
      "Creating content from spoken recordings",
    ],

    bestFor: [
      "Podcasters",
      "YouTubers",
      "Video creators",
      "Content teams",
      "Media professionals",
    ],

    pros: [
      "Combines transcription and media editing",
      "Useful for podcast workflows",
      "Supports video and audio projects",
      "Designed for content creators",
    ],

    cons: [
      "Some advanced features require paid access",
      "Media editing can require learning the workflow",
      "AI-generated results should be reviewed",
    ],

    pricingDetails:
      "Descript offers free and paid plans with different editing and AI capabilities. Current plans and usage limits should be checked on the official website.",

    featureDetails: [
      {
        name: "Transcription",
        description:
          "Converts recorded speech into text that can be used during editing workflows.",
      },
      {
        name: "Video Editing",
        description:
          "Provides tools for editing video content alongside transcripts and audio.",
      },
      {
        name: "Podcast Editing",
        description:
          "Helps creators edit and prepare podcast and spoken-audio content.",
      },
      {
        name: "AI Editing",
        description:
          "Provides AI-assisted tools for improving and working with recorded media.",
      },
    ],

    faq: [
      {
        question: "What is Descript used for?",
        answer:
          "Descript is used for audio and video editing, transcription, podcasts, and other content creation workflows.",
      },
      {
        question: "Does Descript have a free plan?",
        answer:
          "Descript offers free and paid options with different features and usage limits.",
      },
      {
        question: "Is Descript useful for podcasts?",
        answer:
          "Yes. Descript provides transcription and editing tools that can be useful for podcast production.",
      },
    ],

    alternatives: ["Runway", "ElevenLabs"],

    features: [
      "Transcription",
      "Video Editing",
      "Podcast Editing",
      "AI Editing",
    ],
  },

  {
    id: 12,
    name: "Leonardo AI",
    logo: "https://www.google.com/s2/favicons?domain=leonardo.ai&sz=128",
    featured: true,
    popular: true,
    editorsChoice: true,
    category: "AI Image",
    rating: "4.7",
    users: "20M+",
    description:
      "AI image generation platform for creating artwork, illustrations, concepts, and visual assets.",
    website: "https://leonardo.ai",
    pricing: "Free & Paid",

    overview:
      "Leonardo AI is an AI-powered image generation platform designed for creating visual assets, artwork, illustrations, and creative concepts. It can be useful for designers, artists, game creators, and content creators.",

    useCases: [
      "Generating AI images",
      "Creating illustrations",
      "Developing visual concepts",
      "Creating game and creative assets",
      "Exploring different visual styles",
    ],

    bestFor: [
      "Digital artists",
      "Designers",
      "Game creators",
      "Content creators",
      "Creative professionals",
    ],

    pros: [
      "Focused on AI image generation",
      "Useful for creative projects",
      "Supports visual experimentation",
      "Suitable for different types of creators",
    ],

    cons: [
      "Some capabilities require paid access",
      "Image quality depends on prompts and settings",
      "Generated images may require multiple attempts",
    ],

    pricingDetails:
      "Leonardo AI offers free and paid options with different features and usage limits. Current plans should be checked on the official website.",

    featureDetails: [
      {
        name: "AI Image Generation",
        description:
          "Creates visual content from user-provided prompts and creative directions.",
      },
      {
        name: "Creative Assets",
        description:
          "Can help create visual assets for creative and design projects.",
      },
      {
        name: "Illustration",
        description:
          "Useful for generating illustrated and stylized visual concepts.",
      },
      {
        name: "Concept Creation",
        description:
          "Helps users explore ideas and visual directions for creative projects.",
      },
    ],

    faq: [
      {
        question: "What is Leonardo AI used for?",
        answer:
          "Leonardo AI can be used for generating artwork, illustrations, concepts, and other AI-generated visual assets.",
      },
      {
        question: "Is Leonardo AI free?",
        answer:
          "Leonardo AI offers free and paid options with different capabilities and usage limits.",
      },
      {
        question: "Who should use Leonardo AI?",
        answer:
          "It can be useful for artists, designers, game creators, content creators, and other visual professionals.",
      },
    ],

    alternatives: ["Midjourney", "Canva AI"],

    features: [
      "AI Image Generation",
      "Creative Assets",
      "Illustration",
      "Concept Creation",
    ],
  },
];