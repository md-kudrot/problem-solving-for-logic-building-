# 🎓 Student Grade Analyzer

A JavaScript function that analyzes student scores and calculates their average grades with letter grade assignments.

---

## 📌 Project Overview

This project contains a function `analyzeStudents(students)` that takes an array of student objects and returns a new array with: 

- **name** – Student's name
- **average** – Average score (rounded to 2 decimal places)
- **grade** – Letter grade based on the average score

---

## 📊 Grading System

| Average Score | Grade |
|---------------|-------|
| 90 - 100      | A     |
| 80 - 89       | B     |
| 70 - 79       | C     |
| 60 - 69       | D     |
| Below 60      | F     |

---

## 📥 Input Format

The function expects an array of student objects with the following structure:

```javascript
const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [59, 65, 70] },
  { name: "Charlie", scores: [92, 88, 95] }
];
```

### Input Object Properties: 
| Property | Type     | Description                    |
|----------|----------|--------------------------------|
| name     | String   | Name of the student            |
| scores   | Array    | Array of numerical test scores |

---

## 📤 Expected Output

```javascript
[
  { name: "Alice", average: 84.33, grade: "B" },
  { name: "Bob", average: 64.67, grade: "D" },
  { name: "Charlie", average: 91.67, grade: "A" }
]