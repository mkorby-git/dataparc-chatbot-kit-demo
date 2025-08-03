class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleDemo = () => {
    const message = this.createChatBotMessage("You can schedule a demo here: https://dataparc.com/contact");
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handlePricing = () => {
    const message = this.createChatBotMessage("You can find pricing info here: https://dataparc.com/pricing");
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };

  handleUnknown = () => {
    const message = this.createChatBotMessage("Let me connect you with someone who can help. Can I get your email?");
    this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
  };
}

export default ActionProvider;