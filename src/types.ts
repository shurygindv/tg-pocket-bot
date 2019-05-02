export interface Controller {
    onInit(): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Service {}

export const Tokens = {
    Application: Symbol.for('Application'),

    Telegram: Symbol.for('TelegramService'),
    DatabaseService: Symbol.for('DatabaseService'),

    // pocket
    PocketController: Symbol.for('PocketController'),
    WelcomeController: Symbol.for('P_WelcomeController'),
    TopicController: Symbol.for('P_TopicController'),
    TopicService: Symbol.for('P_TopicService'),
};
