/*
Write a function analyzeStudents(students) that returns a new array of objects with:

name – student name
average – average score (rounded to 2 decimal places)
grade – letter grade based on average

Grading System:

Average	Grade
90-100	A
80-89	B
70-79	C
60-69	D
Below 60	F

📥 Input Example:
const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [59, 65, 70] },
  { name: "Charlie", scores: [92, 88, 95] }
];

📤 Expected Output:
[
  { name: "Alice", average: 84.33, grade: "B" },
  { name: "Bob", average: 64.67, grade: "D" },
  { name: "Charlie", average: 91.67, grade: "A" }
]

*/

// ******************** My code ******************* 

const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [59, 65, 70] },
  { name: "Charlie", scores: [92, 88, 95] }
];

function analyzeStudents(students) {
    const studentArr = students;

   
    const results  = studentArr.map((student) => {

      let arrayLen = student.scores.length
      let avg = student.scores.reduce((val,ele) => {
          // console.log(ele)
          let total = (val + ele) 

          return total;
      },0)
      
      let totalAvg = avg / arrayLen
      // let totalAvg = 60

      let grade;
      if (totalAvg >= 90) {
        grade = "A";
      } else if (totalAvg >= 80) {
        grade = "B";
      } else if (totalAvg >= 70) {
        grade = "C"
        // console.log(totalAvg)
      } else if (totalAvg >= 60) {
        grade = "D"
      } else {  // Below 60 - no condition needed
        grade = "F";
      }
      
      return {
        name: student.name,
        average: Number(totalAvg. toFixed(2)),
        grade: grade

      }
    })
    
    // console.log(score)
    return results ;
}

console.log(analyzeStudents(students))


/*

Optimized Solution:

const students = [
  { name: "Alice", scores: [85, 90, 78] },
  { name: "Bob", scores: [59, 65, 70] },
  { name: "Charlie", scores: [92, 88, 95] }
];

// Helper function - cleaner & reusable
function getGrade(average) {
  if (average >= 90) return "A";
  if (average >= 80) return "B";
  if (average >= 70) return "C";
  if (average >= 60) return "D";
  return "F";
}

function analyzeStudents(students) {
  return students.map((student) => {
    // Calculate sum using reduce
    const sum = student.scores.reduce((total, score) => total + score, 0);
    
    // Calculate average
    const average = Number((sum / student.scores.length).toFixed(2));
    
    // Return new object
    return {
      name: student.name,
      average: average,
      grade: getGrade(average)
    };
  });
}

console.log(analyzeStudents(students));

*/