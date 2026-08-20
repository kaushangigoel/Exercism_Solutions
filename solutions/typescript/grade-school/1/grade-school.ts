export class GradeSchool {
  private gradeRoster: Record<number, string[]> = {};  
  roster() {
    return Object.fromEntries(
  Object.entries(this.gradeRoster).map(([grade, students]) => [
    grade,
    [...students]
  ])
);
  }

  add(name:string, grade:number) {
    //check existing Grade
    for (const currentGrade in this.gradeRoster) {
      this.gradeRoster[currentGrade] =
        this.gradeRoster[currentGrade].filter(
          student => student !== name
        );
    }
    
    //add new student
    if(!this.gradeRoster[grade])
      this.gradeRoster[grade]=[];
    this.gradeRoster[grade].push(name);
    this.gradeRoster[grade].sort();
  }

  grade(grade: number) {
    return [...(this.gradeRoster[grade]??[])];
  }
}
