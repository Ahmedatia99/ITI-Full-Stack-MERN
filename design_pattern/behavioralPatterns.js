// Task 1 — Strategy
class DiscountStrategy {
  apply(price) {
    return price;
  }
}

class PercentageDiscount extends DiscountStrategy {
  apply(price) {
    return price * 0.9;
  }
}

class FixedDiscount extends DiscountStrategy {
  apply(price) {
    return price - 20;
  }
}

class BogoDiscount extends DiscountStrategy {
  apply(price) {
    return price / 2;
  }
}

class DiscountCalculator {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(price) {
    return this.strategy.apply(price);
  }
}

// TestCase
const calc = new DiscountCalculator(new PercentageDiscount());
console.log(calc.calculate(200)); 

calc.setStrategy(new FixedDiscount());
console.log(calc.calculate(200)); 

calc.setStrategy(new BogoDiscount());
console.log(calc.calculate(200)); 

// Task 2 — State----------------------
class State {
  press(ctx) {}
}

class PlayingState extends State {
  press(ctx) {
    console.log("Pause");
    ctx.setState(new PausedState());
  }
}

class PausedState extends State {
  press(ctx) {
    console.log("Play");
    ctx.setState(new PlayingState());
  }
}

class StoppedState extends State {
  press(ctx) {
    console.log("Play from start");
    ctx.setState(new PlayingState());
  }
}

class Player {
  constructor() {
    this.state = new StoppedState();
  }

  setState(state) {
    this.state = state;
  }

  pressButton() {
    this.state.press(this);
  }
}

// Testcase
const player = new Player();
player.pressButton(); 
player.pressButton();
player.pressButton(); 

// Task 3 — Command--------------------------
class Command {
  do() {}
  undo() {}
}

class AddCommand extends Command {
  constructor(receiver, word) {
    super();
    this.receiver = receiver;
    this.word = word;
  }

  do() {
    this.receiver.text += this.word;
  }

  undo() {
    this.receiver.text = this.receiver.text.replace(this.word, "");
  }
}

class RemoveCommand extends Command {
  constructor(receiver, word) {
    super();
    this.receiver = receiver;
    this.word = word;
  }

  do() {
    this.receiver.text = this.receiver.text.replace(this.word, "");
  }

  undo() {
    this.receiver.text += this.word;
  }
}

class TextEditor {
  constructor() {
    this.text = "";
    this.history = [];
  }

  execute(command) {
    command.do();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }

  show() {
    console.log(this.text);
  }
}

// Testcases
const editor = new TextEditor();
editor.execute(new AddCommand(editor, "Hello "));
editor.execute(new AddCommand(editor, "World"));
editor.show(); 

editor.undo();
editor.show(); 

editor.undo();
editor.show(); 
