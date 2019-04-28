export interface Controller {
    onInit(): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Service {}

export const Tokens = {
    Application: Symbol.for('Application'),

    TelegramApi: Symbol.for('TelegramService'),
    DatabaseService: Symbol.for('DatabaseService'),

    NoteController: Symbol.for('NoteController'),
    NoteService: Symbol.for('NoteService'),

    SectionController: Symbol.for('SectionController'),
    SectionService: Symbol.for('SectionService'),

    WelcomeController: Symbol.for('WelcomeController'),
};
