const questions = {
  types: ['short', 'long', 'trueFalse', 'MCQ', 'programming'],
  categories: ['general', 'loops', 'variables', 'classes'],
  questions: [
    {
      id: 1,
      statement: "what is JavaScript",
      type: "short",
      category: "general",
      marks: 2,
      answer: "javaScript is programming language"
    },
    {
      id: 2,
      statement: "what is for loop",
      type: "short",
      category: "loops",
      marks: 2,
      answer:
        "to repeat set of instructions based on condition for loop is usually used"
    },
    {
      id: 3,
      statement: "what is variable",
      type: "short",
      category: "variables",
      marks: 2,
      answer: "to store a value or an object we use variables"
    }
  ]
};

export default questions;
