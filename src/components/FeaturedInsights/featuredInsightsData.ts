
export type FeaturedInsightItem = {
  id: string;
  categoryTitle: string;
  heading: string;
  description: string;
  image: string;
  href: string;
};

export const featuredInsightsData: FeaturedInsightItem[] = [
  {
    id: "mindset-matters",
    categoryTitle: "MINDSET MATTERS ™",
    heading:
      "An Edition on Technology, Business, Behaviour and Markets.",
    description:
      "A short crisp presentation with a brief explanation on a framework, methodology, corporate behavior, Strategy and management. This is purely focused around the Enterprises and Industry and experiences during such initiatives.",
    image: "/images/featured-insights-network.png",
    href: "/featured-insights/mindset-matters",
  },
  {
    id: "thought-leadership",
    categoryTitle: "THOUGHT LEADERSHIP PAPERS",
    heading:
      "Management Overview of a Situation and an Approach That Could Be a Perspective or a Tested Formula",
    description:
      "Experiences and expertise articulated to present an situation and solution. This also can be a futuristic, and novel approach to organization challenges. Thought Leadership articles are usually applicative in nature.",
    image: "/images/featured-insights-network-2.png",
    href: "/featured-insights/thought-leadership-papers",
  },
  {
    id: "research-market-study",
    categoryTitle: "RESEARCH & MARKET STUDY",
    heading:
      "Well Studied, Backed with Data or a Case Study, Qualitative & Quantitative Analysis of a Product, Solution, Service or an Enterprise.",
    description:
      "Research notes are technical and informative in nature catering patterns, insights, capabilities or a competitive study. Knowledge articles are referring to a specific subject and then a deep dive analysis is presented to the open audience for consumption. Usually these papers are referred, quoted and used during many activities like sourcing, vendor evaluation, shortlisting and RFP processes.",
    image: "/images/featured-insights-network-3.png",
    href: "/featured-insights/research-market-study",
  },
];

