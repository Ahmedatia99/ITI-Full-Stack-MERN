// Old API (string-based)
class LegacyPayment {
  pay(amount, currency) {
    return `Paid ${amount} ${currency}`;
  }
}

// new api
class ModernPayment {
  process({ amount, currency, userId }) {
    return `Processed ${amount} ${currency} for user ${userId}`;
  }
}

// Adapter
class LegacyAdapter {
  constructor(legacyPayment) {
    this.legacyPayment = legacyPayment;
  }

  process({ amount, currency }) {
    // ignores userId because legacy doesn’t support it
    return this.legacyPayment.pay(amount, currency);
  }
}

// cases to testing
const legacy = new LegacyPayment();
const modern = new ModernPayment();
const adapted = new LegacyAdapter(legacy);

console.log(modern.process({ amount: 100, currency: "USD", userId: 42 }));
console.log(adapted.process({ amount: 50, currency: "EUR", userId: 42 }));

//------------------------------task 2 — decorator

class Logger {
  log(message) {
    console.log(message);
  }
}

class TimestampDecorator {
  constructor(logger) {
    this.logger = logger;
  }

  log(message) {
    const timestamped = `[${new Date().toISOString()}] ${message}`;
    this.logger.log(timestamped);
  }
}

class UpperCaseDecorator {
  constructor(logger) {
    this.logger = logger;
  }

  log(message) {
    const upper = message.toUpperCase();
    this.logger.log(upper);
  }
}

// combine decorators
const logger = new Logger();
const upperLogger = new UpperCaseDecorator(logger);
const timestampedLogger = new TimestampDecorator(upperLogger);

timestampedLogger.log("system started");

// ----------------------task 3 — flyweight
class TextStyle {
  constructor(font, size) {
    this.font = font;
    this.size = size;
  }
}

class StyleFactory {
  constructor() {
    this.styles = {};
  }

  getStyle(font, size) {
    const key = `${font}_${size}`;
    if (!this.styles[key]) {
      this.styles[key] = new TextStyle(font, size);
    }
    return this.styles[key];
  }
}

// cases for trying
const factory = new StyleFactory();

const text1 = { content: "Hello", style: factory.getStyle("Arial", 12) };
const text2 = { content: "World", style: factory.getStyle("Arial", 12) };
const text3 = { content: "Hi", style: factory.getStyle("Roboto", 14) };

console.log(text1.style === text2.style);
console.log(text1.style === text3.style);
