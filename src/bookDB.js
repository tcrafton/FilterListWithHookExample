const BookDB = [
  {
    id: 1,
    title: "Atomic Habits",
    description:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    authorID: 1,
    link:
      "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_2?crid=2336M1A51YXXM&dchild=1&keywords=atomic+habits+james+clear&qid=1594128332&sprefix=atomic+h%2Caps%2C171&sr=8-2",
    imgLocation:
      "https://images-na.ssl-images-amazon.com/images/I/51Eqf-URhoL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "Barking Up the Wrong Tree",
    description:
      "Much of the advice we’ve been told about achievement is logical, earnest…and downright wrong. In Barking Up the Wrong Tree, Eric Barker reveals the extraordinary science behind what actually determines success and most importantly, how anyone can achieve it.",
    authorID: 2,
    link:
      "https://www.amazon.com/Barking-Wrong-Tree-Surprising-Everything/dp/0062416057/ref=sr_1_1?crid=190DQMKIN8S9G&dchild=1&keywords=barking+up+the+wrong+tree+by+eric+barker&qid=1594128357&sprefix=barking+up+the+%2Caps%2C168&sr=8-1",
    imgLocation:
      "data:image/webp;base64,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",
  },
  {
    id: 3,
    title: "Educated",
    description:
      "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University",
    authorID: 3,
    link:
      "https://www.amazon.com/Educated-Memoir-Tara-Westover/dp/0399590501/ref=sr_1_2?crid=1HYD5E6CIC4ZU&dchild=1&keywords=educated&qid=1594128452&sprefix=educ%2Caps%2C169&sr=8-2",
    imgLocation:
      "https://images-na.ssl-images-amazon.com/images/I/41+aN7ZbS9L._SX327_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    title: "World Order",
    description:
      "Henry Kissinger offers in World Order a deep meditation on the roots of international harmony and global disorder.",
    authorID: 4,
    link:
      "https://www.amazon.com/World-Order-Henry-Kissinger/dp/0143127713/ref=sr_1_2?crid=1YCU2X1Z4KBJS&dchild=1&keywords=world+order+henry+kissinger&qid=1594381805&sprefix=world+order%2Caps%2C156&sr=8-2",
    imgLocation:
      "data:image/webp;base64,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",
  },
];

export default BookDB;
