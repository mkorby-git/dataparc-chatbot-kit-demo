class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();
    if (lower.includes("demo") || lower.includes("schedule")) {
      this.actionProvider.handleDemo();
    } else if (lower.includes("pricing")) {
      this.actionProvider.handlePricing();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;