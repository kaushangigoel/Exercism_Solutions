export class Robot {
  private static usedNames = new Set<string>();
  private robotName?: string;

  public get name(): string {
    if (!this.robotName) 
      this.robotName = this.generateName();
    
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = undefined;
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private generateName(): string {
    let name: string;

    do {
      name = this.randomName();
    } while (Robot.usedNames.has(name));

    Robot.usedNames.add(name);
    return name;
  }

  private randomName(): string {
    const letter = () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const digit = () =>
      Math.floor(Math.random() * 10);

    return `${letter()}${letter()}${digit()}${digit()}${digit()}`;
  }
}