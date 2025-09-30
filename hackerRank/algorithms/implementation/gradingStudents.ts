function gradingStudents(grades: number[]): number[] {
   return grades.map(grade => {
    if (grade < 38) return grade;
    const newGrade: number = Math.ceil(grade / 5) * 5;
    const difference: number = newGrade - grade;
    
    return difference < 3 ? newGrade : grade; 
   })
}