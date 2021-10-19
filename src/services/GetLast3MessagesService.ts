
import prismaClient from "../prisma"

class GetLast3MessagesService {
    async execute(){
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc"
            },
            include: {
                user: true
            },
        });

        // vai funcionar como sendo um select nas ultimas 3 mensagens direto no banco

        return messages;
    }
}

export { GetLast3MessagesService }