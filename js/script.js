function calculateGrade() {

    let sub1 = parseFloat(prompt("Enter marks for Subject 1:"));
    let sub2 = parseFloat(prompt("Enter marks for Subject 2:"));
    let sub3 = parseFloat(prompt("Enter marks for Subject 3:"));
    let sub4 = parseFloat(prompt("Enter marks for Subject 4:"));
    let sub5 = parseFloat(prompt("Enter marks for Subject 5:"));

    // Validation
    if (
        isNaN(sub1) || isNaN(sub2) || isNaN(sub3) ||
        isNaN(sub4) || isNaN(sub5)
    ) {
        alert("❌ Please enter valid numbers!");
        return;
    }

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let average = total / 5;

    let grade;

    if (average >= 90) grade = "A+ 🏆";
    else if (average >= 80) grade = "A 🎉";
    else if (average >= 70) grade = "B 👍";
    else if (average >= 60) grade = "C 🙂";
    else if (average >= 50) grade = "D ⚠️";
    else grade = "F ❌";

    alert(
        "📊 RESULT\n\n" +
        "Total Marks: " + total +
        "\nAverage: " + average.toFixed(2) +
        "\nGrade: " + grade
    );
}