export type EventCard = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventCard[] = [
  {
    title: "React Summit 2024",
    image: "/images/event1.png",
    slug: "react-summit-2024",
    location: "Amsterdam, Netherlands",
    date: "June 14-15, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Next.js Conf 2024",
    image: "/images/event2.png",
    slug: "nextjs-conf-2024",
    location: "San Francisco, CA",
    date: "October 25-26, 2024",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "DevOps World Hackathon",
    image: "/images/event3.png",
    slug: "devops-world-hackathon",
    location: "Austin, Texas",
    date: "September 8-10, 2024",
    time: "24/7 Hackathon",
  },
  {
    title: "AI & Machine Learning Summit",
    image: "/images/event4.png",
    slug: "ai-ml-summit-2024",
    location: "London, UK",
    date: "November 12-14, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Web3 Developers Meetup",
    image: "/images/event5.png",
    slug: "web3-developers-meetup",
    location: "Berlin, Germany",
    date: "August 20, 2024",
    time: "6:00 PM - 9:00 PM",
  },
  {
    title: "Full Stack Conference 2024",
    image: "/images/event6.png",
    slug: "full-stack-conference-2024",
    location: "New York, NY",
    date: "December 5-7, 2024",
    time: "9:00 AM - 5:00 PM",
  },
];
