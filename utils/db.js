const { user, pass } = process.env;

export const connectionStr = `mongodb+srv://${user}:${pass}@deliverss.5r3je3e.mongodb.net/Deliverss?retryWrites=true&w=majority&appName=Deliverss`;
