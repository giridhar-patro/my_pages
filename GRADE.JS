function calculateTotalMarks() {
    // Get marks obtained in each subject
    const mathsMarks = parseInt(document.getElementById("maths").value);
    const scienceMarks = parseInt(document.getElementById("science").value);
    const englishMarks = parseInt(document.getElementById("english").value);
    const historyMarks = parseInt(document.getElementById("history").value);
  
    // Calculate total marks
    let totalMarks = mathsMarks + scienceMarks + englishMarks + historyMarks;
  
    // Check if the student has taken the final exam
    const hasTakenFinalExam = document.getElementById("final_exam").checked;
  
    // If the student has taken the final exam, and their total marks are less than 90, they cannot get an A+ grade.
    if (hasTakenFinalExam && totalMarks < 90) {
      document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + ", Grade: Not Eligible for A+";
      return false;
    }
  
    // Check if the student has scored in the A+ grade range
    if (totalMarks >= 89 && totalMarks <= 100) {
      document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + ", Grade: A+";
      return true;
    } else {
      document.getElementById("result").innerHTML = "Total Marks: " + totalMarks + ", Grade: Not Eligible for A+";
      return false;
    }
  }
  