type Frame = number[];

export class Bowling {
  private readonly frames: Frame[] =
    Array.from({ length: 10 }, () => []);

  private currentFrame = 0;

  public roll(pins: number): void {
    this.validatePins(pins);

    if (this.isGameOver()) 
      throw new Error("Cannot roll after game is over");
    
    if (this.currentFrame < 9) 
      this.rollRegularFrame(pins);
    else 
      this.rollFinalFrame(pins);
  }

  public score(): number {
    if (!this.isGameOver()) 
      throw new Error("Score cannot be taken until the end of the game");
    
    const rolls = this.frames.flat();
    let total = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      // Strike
      if (rolls[rollIndex] === 10) {
        total += rolls[rollIndex] + rolls[rollIndex + 1] + rolls[rollIndex + 2];
        rollIndex++;
      }
      // Spare
      else if (rolls[rollIndex] + rolls[rollIndex + 1] === 10) {
        total += 10 + rolls[rollIndex + 2];
        rollIndex += 2;
      }
      // Open frame
      else {
        total += rolls[rollIndex] + rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }
    return total;
  }

  private rollRegularFrame(pins: number): void {
    const frame = this.frames[this.currentFrame];

    if (frame.length === 1 && frame[0] + pins > 10) 
      throw new Error("Pin count exceeds pins on the lane");
    
    frame.push(pins);

    const isStrike = frame[0] === 10;
    const hasTwoRolls = frame.length === 2;

    if (isStrike || hasTwoRolls) 
      this.currentFrame++;
  }

  private rollFinalFrame(pins: number): void {
    const frame = this.frames[9];

    // First roll
    if (frame.length === 0) {
      frame.push(pins);
      return;
    }

    // Second roll
    if (frame.length === 1) {
      if (frame[0] !== 10 && frame[0] + pins > 10) 
        throw new Error("Pin count exceeds pins on the lane");
      
      frame.push(pins);

      // Open frame: game is finished.
      // Strike/spare gets a third roll.
      return;
    }

    // Third roll
    if (frame[0] === 10 && frame[1] !== 10 && frame[1] + pins > 10) 
      throw new Error("Pin count exceeds pins on the lane");
    
    frame.push(pins);
  }

  private isGameOver(): boolean {
    if (this.currentFrame < 9) 
      return false;
    
    const frame = this.frames[9];

    // No rolls in 10th frame
    if (frame.length === 0) 
      return false;
    
    // First roll is not a strike.
    if (frame[0] !== 10) {
      // Need second roll
      if (frame.length < 2) 
        return false;
      // Open frame
      if (frame[0] + frame[1] < 10) 
        return true;
      // Spare needs fill ball
      return frame.length >= 3;
    }

    // First roll is a strike, so two additional balls are required.
    return frame.length >= 3;
  }

  private validatePins(pins: number): void {
    if (pins < 0)
      throw new Error("Negative roll is invalid");

    if (pins > 10) 
      throw new Error("Pin count exceeds pins on the lane");
  }
}