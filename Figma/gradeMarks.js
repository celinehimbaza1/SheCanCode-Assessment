let prompt = require("prompt-sync")();

function getGrade(marks) {
  if (marks >= 80 && marks <= 100) {
    return "A";
  } else if (marks >= 70 && marks < 80) {
    return "B";
  } else if (marks >= 60 && marks < 70) {
    return "C";
  } else if (marks >= 50 && marks < 60) {
    return "D";
  } else if (marks >= 0 && marks < 50) {
    return "E";
  } else {
    return "Unclassified";
  }
}

function calculateGrade() {
  for (let i = 0; i <= 6; i++) {
    let marks = prompt("enter student mark:");
    let grade = getGrade(marks);
    console.log(`Marks: ${marks}, Grade: ${grade}`);
  }
}

calculateGrade();
