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

    alternatives: ["Claude", "GitHub Copilot"],

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

    alternatives: ["ChatGPT", "GitHub Copilot"],

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

    alternatives: ["Runway", "ChatGPT"],

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

    alternatives: ["Midjourney", "ElevenLabs"],

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

    alternatives: ["Runway", "ChatGPT"],

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
];