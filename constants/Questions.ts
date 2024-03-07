export type QuestionTagType = {
  _id: number;
  name: string;
};

export type QuestionType = {
  _id: number;
  title: string;
  tags: QuestionTagType[];
  author: string;
  upvotes: number;
  views: number;
  answers: number;
  createdAt: string;
  authorImgSrc: string;
};

export const QuestionCards: QuestionType[] = [
  // {
  //   _id: 1,
  //   title: "Cascading Deletes in SQLAlchemy?",
  //   tags: [
  //     { _id: 1, name: "python" },
  //     { _id: 2, name: "sql" },
  //   ],
  //   author: "John Doe",
  //   upvotes: 10,
  //   views: 500000,
  //   answers: 2,
  //   createdAt: "2021-09-01T12:00:00.000Z",
  //   authorImgSrc:
  //     "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYXRFU3NXSnp0MnY5TzF1SDRDbjNFUXU2YWQifQ?width=160",
  // },
  // {
  //   _id: 2,
  //   title: "How to handle data fetching in Next.js?",
  //   tags: [
  //     { _id: 1, name: "TypeScript" },
  //     { _id: 2, name: "Next" },
  //   ],
  //   author: "John Doe",
  //   upvotes: 10,
  //   views: 100,
  //   answers: 2,
  //   createdAt: "2021-09-01T12:00:00.000Z",
  //   authorImgSrc:
  //     "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yYXRFU3NXSnp0MnY5TzF1SDRDbjNFUXU2YWQifQ?width=160",
  // },
];
