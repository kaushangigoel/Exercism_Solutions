export class Bowling {
  private rolls : number[]=[];
  
public roll(pins: number) {
  if (pins < 0) 
    throw new Error("Negative roll is invalid");
 
  if (pins > 10) 
    throw new Error("Pin count exceeds pins on the lane");
  
  if (this.isGameOver()) 
    throw new Error("Cannot roll after game is over");
  
  const frame = this.getCurrentFrame();

  // Frames 1-9
  if (frame.frameNumber < 10) {
    if (frame.rolls.length === 1 && frame.rolls[0] + pins > 10) 
      throw new Error("Pin count exceeds pins on the lane");
    
    this.rolls.push(pins);
    return;
  }

  // 10th frame
  const rolls = frame.rolls;

  // First roll of 10th frame.
  if (rolls.length === 0) {
    this.rolls.push(pins);
    return;
  }

  // First roll wasn't a strike.
  // There can only be a second roll, and it must respect
  // the remaining pins.
  if (rolls.length === 1 && rolls[0] !== 10) {
    if (rolls[0] + pins > 10) 
      throw new Error("Pin count exceeds pins on the lane");
    
    this.rolls.push(pins);
    return;
  }

  // First roll was a strike.
  // Second roll can be anything.
  if (rolls.length === 1 && rolls[0] === 10) {
    this.rolls.push(pins);
    return;
  }

  // We are on the third ball of the 10th frame.
  if (rolls.length === 2) {
    // 10, 10, X -> valid
    if (rolls[0] === 10 && rolls[1] === 10) {
      this.rolls.push(pins);
      return;
    }

    // 10, X, X -> valid
    if (rolls[0] === 10 && rolls[1] !== 10) {
      if (rolls[1] + pins > 10) 
        throw new Error("Pin count exceeds pins on the lane");
      
      this.rolls.push(pins);
      return;
    }
  }

  // Should never be reached because isGameOver() prevents
  // additional rolls.
}

  public score(): number {
    if (!this.isGameOver()) 
      throw new Error('Score cannot be taken until the end of the game');
    
    let total=0;
    let i=0;
    //strike
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i]==10) {
        total+=this.rolls[i] + this.rolls[i+1] + this.rolls[i+2];
        i++;
      }
        //spare
      else if(this.rolls[i]+ this.rolls[i+1] == 10){
        total+= 10+ this.rolls[i+2];
        i+=2;
      }
      else{
        total+= this.rolls[i]+this.rolls[i+1];
        i+=2;
      }
    }
    return total;
  }

  private getCurrentFrame(): { frameNumber: number; rolls: number[] } {
  let i = 0;

  for (let frame = 1; frame <= 10; frame++) {
    // Strike
    if (this.rolls[i] === 10) {
      if (frame === 10) 
        return {frameNumber: 10,rolls: this.rolls.slice(i)};
      
      i++;
    } else {
      // Incomplete frame
      if (i + 1 >= this.rolls.length) 
        return {frameNumber: frame,rolls: this.rolls.slice(i)};
      
      i += 2;
    }
  }

  return {frameNumber: 10, rolls: this.rolls.slice(i)};
}

  private isGameOver(): boolean {
    let i = 0;

    // Frames 1-9
    for (let frame = 0; frame < 9; frame++) {
      if (i >= this.rolls.length) 
        return false;
    
      if (this.rolls[i] === 10) 
        i++;
      else {
        if (i + 1 >= this.rolls.length) 
          return false;
        
        i += 2;
      }
    }

    // Frame 10
    if (i >= this.rolls.length) 
      return false;
    
    // Strike in 10th: needs 2 fill balls
    if (this.rolls[i] === 10) 
      return i + 2 < this.rolls.length;
    
    // Spare in 10th: needs 1 fill ball
    if (i + 1 >= this.rolls.length) 
      return false;
    
    if (this.rolls[i] + this.rolls[i + 1] === 10) 
      return i + 2 < this.rolls.length;
    
    // Open 10th: two rolls are enough
    return true;
  }
}

