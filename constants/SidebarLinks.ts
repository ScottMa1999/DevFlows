// types
export type sidebarLinkType = {
  imgURL: string;
  route: string;
  label: string;
};

export type topQuestionsType = {
  id: number;
  question: string;
  route: string;
};

export type tagType = {
  id: number;
  topic: string;
  posts: number;
  route: string;
};

export const sidebarLinks: sidebarLinkType[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const sidebarLinksHome: sidebarLinkType[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const topQuestions: topQuestionsType[] = [
  {
    id: 1,
    question:
      "Would it be appropriate to point out an error in another page during a referee report?",
    route: "/",
  },
  {
    id: 2,
    question:
      "Would it be appropriate to point out an error in another page during a referee report?",
    route: "/",
  },
  {
    id: 3,
    question:
      "Would it be appropriate to point out an error in another page during a referee report?",
    route: "/",
  },
  {
    id: 4,
    question:
      "Would it be appropriate to point out an error in another page during a referee report?",
    route: "/",
  },
  {
    id: 5,
    question:
      "Would it be appropriate to point out an error in another page during a referee report?",
    route: "/",
  },
];

export const popularTags: tagType[] = [
  {
    id: 1,
    topic: "JavaScript",
    route: "/",
    posts: 99,
  },
  {
    id: 2,
    topic: "HTML",
    route: "/",
    posts: 99,
  },
  {
    id: 3,
    topic: "CSS",
    route: "/",
    posts: 99,
  },
  {
    id: 4,
    topic: "TypeScript",
    route: "/",
    posts: 99,
  },
  {
    id: 5,
    topic: "React",
    route: "/",
    posts: 99,
  },
  {
    id: 6,
    topic: "NextJS",
    route: "/",
    posts: 99,
  },
];
