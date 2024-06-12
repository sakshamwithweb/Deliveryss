const { user, pass } = process.env;

export const connectionStr = `mongodb+srv://${user}:${pass}@fordelivery.gjz07n6.mongodb.net/Deliverys?retryWrites=true&w=majority&appName=fordelivery`;
