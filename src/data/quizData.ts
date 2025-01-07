export const quizData = [
  {
    id: 1,
    question: "What is Redux?",
    options: [
      "A JavaScript library for managing state",
      "A database management system",
      "A front-end framework",
      "A styling library",
    ],
    correctAnswer: "A JavaScript library for managing state",
  },
  {
    id: 2,
    question: "Which library is commonly used with Redux?",
    options: ["React", "Vue", "Angular", "jQuery"],
    correctAnswer: "React",
  },
  {
    id: 3,
    question: "What is the main principle of Redux?",
    options: [
      "Single source of truth",
      "Two-way data binding",
      "Event delegation",
      "Server-side rendering",
    ],
    correctAnswer: "Single source of truth",
  },
  {
    id: 4,
    question: "Which method is used to update the state in Redux?",
    options: ["dispatch", "setState", "useState", "emit"],
    correctAnswer: "dispatch",
  },
  {
    id: 5,
    question: "What is the purpose of Redux middleware?",
    options: [
      "To log actions and state changes",
      "To handle asynchronous logic",
      "To enhance dispatch functionality",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    id: 6,
    question: "What does the `createSlice` function in Redux Toolkit do?",
    options: [
      "Creates actions and reducers",
      "Manages side effects",
      "Handles database connections",
      "Enables two-way binding",
    ],
    correctAnswer: "Creates actions and reducers",
  },
  {
    id: 7,
    question: "What is the default state management flow in Redux?",
    options: [
      "Action → Reducer → Store → View",
      "Reducer → Store → Action → View",
      "View → Action → Reducer → Store",
      "Action → Store → Reducer → View",
    ],
    correctAnswer: "Action → Reducer → Store → View",
  },
  {
    id: 8,
    question: "Which of the following is a core concept of Redux?",
    options: [
      "Middleware",
      "Reducers",
      "Store",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    id: 9,
    question: "How is immutability maintained in Redux?",
    options: [
      "Directly modifying the state",
      "Using a new state object with changes",
      "By using `setState`",
      "By calling `this.state` directly",
    ],
    correctAnswer: "Using a new state object with changes",
  },
  {
    id: 10,
    question: "Which function is used to combine multiple reducers in Redux?",
    options: [
      "combineReducers",
      "mergeReducers",
      "createReducers",
      "aggregateReducers",
    ],
    correctAnswer: "combineReducers",
  },
];

// export const quizData = [
//     {
//       id: 1,
//       question: "‘নাটক কম করো পিও’ এই সংলাপটি কোথায় শোনা হয়েছিল?",
//       options: [
//         "কুমিল্লার এক কিশোরের মুখে",
//         "শেখ হাসিনার বক্তিতায়",
//         "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে",
//         "কক্সবাজারে",
//       ],
//       correctAnswer: "কুমিল্লার এক কিশোরের মুখে",
//     },
//     {
//       id: 2,
//       question: "‘চালাইদেন’ এই সংলাপটি কী কারণে ভাইরাল হয়েছিল?",
//       options: [
//         "পলকের মজার পোস্টে",
//         "রাজনৈতিক বক্তিতায়",
//         "আনসার আন্দোলনের সময়",
//         "কোটা আন্দোলনে",
//       ],
//       correctAnswer: "কোটা আন্দোলনে",
//     },
//     {
//       id: 3,
//       question:
//         "'নাইস অ্যান্ড অ্যাট্রাকটিভ' এই জনপ্রিয় মন্তব্যটি কোন ঘটনার পর ভাইরাল হয়েছিল?",
//       options: [
//         "রাষ্ট্রপতি মোহাম্মদ সাহাবুদ্দিনের মন্তব্যের পর",
//         "রাষ্ট্রপতি একটি মেয়ের ছবিতে কমেন্ট করার পর",
//         "অভিযুক্ত ব্যক্তির বক্তব্যের পর",
//         "ডিবি পুলিশের শীর্ষ কর্মকর্তার বক্তব্যের পর",
//       ],
//       correctAnswer: "রাষ্ট্রপতি একটি মেয়ের ছবিতে কমেন্ট করার পর",
//     },
  
//     {
//       id: 4,
//       question: "‘মুরুব্বি, উহু উহু’ এই সংলাপটি কোথায় শোনা গিয়েছিল?",
//       options: [
//         "মাওলানা মোস্তাক ফয়েজীর ওয়াজে",
//         "হাউন আক্কেলের বক্তব্যে",
//         "আন্তর্জাতিক অপরাধ ট্রাইব্যুনালের বক্তব্যে",
//         "কোটা আন্দোলনকারীদের বক্তব্যে",
//       ],
//       correctAnswer: "মাওলানা মোস্তাক ফয়েজীর ওয়াজে",
//     },
//     {
//       id: 5,
//       question:
//         "‘এই ওয়েট ওয়েট, ইটস মাই টার্ন’ এই সংলাপটি কী কারণে ভাইরাল হয়েছিল?",
//       options: [
//         "কাদের কাকুর বক্তিতায়",
//         "কোটা আন্দোলনকারী ফারজানা সিঁথির ভিডিওতে",
//         "বিচারপতি শামসুদ্দিন চৌধুরী মানিকের বক্তব্যে",
//         "ডিবি পুলিশের কর্মকর্তার বক্তব্যে",
//       ],
//       correctAnswer: "কোটা আন্দোলনকারী ফারজানা সিঁথির ভিডিওতে",
//     },
//     {
//       id: 6,
//       question: "‘আপনি রাবিশ কথা বলবেন না’ এই মন্তব্যটি কে বলেছেন?",
//       options: [
//         "শেখ হাসিনা",
//         "মাওলানা মোস্তাক ফয়েজী",
//         "বিচারপতি শামসুদ্দিন চৌধুরী মানিক",
//         "ওবায়দুল কাদের",
//       ],
//       correctAnswer: "বিচারপতি শামসুদ্দিন চৌধুরী মানিক",
//     },
//     {
//       id: 7,
//       question: "‘শেখ হাসিনা পালায় না’ এই বিখ্যাত সংলাপটি কোথায় শোনা গিয়েছিল?",
//       options: [
//         "আন্তর্জাতিক আদালতের মামলার সময়ে",
//         "নির্বাচনী প্রচারণায়",
//         "গণঅভ্যুত্থানের সময়",
//         "ওবায়দুল কাদেরের বক্তিতায়",
//       ],
//       correctAnswer: "গণঅভ্যুত্থানের সময়",
//     },
//     {
//       id: 8,
//       question: "‘পালাব না, কোথায় পালাব’ এই সংলাপটি কার বক্তিতায় শোনা গিয়েছিল?",
//       options: ["শেখ হাসিনা", "খালেদা জিয়া", "হাউন আংকেল", "ওবায়দুল কাদের"],
//       correctAnswer: "ওবায়দুল কাদের",
//     },
//     {
//       id: 9,
//       question: "‘হাউন আংকেল’ এই সংলাপটি কার মুখে শোনা গিয়েছিল?",
//       options: ["হারুন অর রশীদ", "শেখ হাসিনা", "সিমরিন লুবাবা", "ওবায়দুল কাদের"],
//       correctAnswer: "সিমরিন লুবাবা",
//     },
//     {
//       id: 10,
//       question:
//         "‘আবেগ কাজ করেছে, বিবেক কাজ করেনি’ এই বিতর্কিত মন্তব্যটি কোন ঘটনার পর ব্যাপকভাবে আলোচিত হয়েছিল?",
//       options: [
//         "বিশ্ববিদ্যালয়ের আন্দোলনের সময়",
//         "গণঅভ্যুত্থানের পর",
//         "একটি নৃশংস হত্যাকাণ্ডের পর",
//         "সাবেক প্রধানমন্ত্রীর বক্তিতায়",
//       ],
//       correctAnswer: "একটি নৃশংস হত্যাকাণ্ডের পর",
//     },
//   ];