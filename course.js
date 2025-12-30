const course = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  level: i < 10 ? "Beginner" : i < 20 ? "Intermediate" : "Advanced",
  lesson: `Day ${i + 1} lesson: Practice English sentences.`
}));
