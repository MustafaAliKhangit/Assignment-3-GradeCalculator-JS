function calculateGrade() {

    let score = prompt("Enter the student's score (0-100):");
    score = parseInt(score); 


    if (isNaN(score) || score < 0 || score > 100) {
        alert("Invalid input! Please enter a score between 0 and 100.");
        return;
    }

    let grade;


    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }


    alert("The student's grade is " + grade + ".");
}

calculateGrade();
