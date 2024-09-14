import { faker } from "@faker-js/faker"
import {prisma as ps} from "../src/lib/prisma.service.ts"
const prisma = new ps()
const f = async()=>{
    //deleta a tabela usuarios
    await prisma.$queryRaw`
    DELETE FROM User;
    `
    //deleta a tabela travelList
    await prisma.$queryRaw`
    DELETE FROM TravelList;
    `
    await prisma.travelList.createMany({
        data:[
            {From:faker.location.city(),Where:faker.location.city(),Notes:faker.lorem.paragraph(),TravelDate:faker.date.anytime(),Title:faker.word.words()},
            {From:faker.location.city(),Where:faker.location.city(),Notes:faker.lorem.paragraph(),TravelDate:faker.date.anytime(),Title:faker.word.words()},
            {From:faker.location.city(),Where:faker.location.city(),Notes:faker.lorem.paragraph(),TravelDate:faker.date.anytime(),Title:faker.word.words()}
        ]
    })
    const travelList = await prisma.travelList.findMany()
    await prisma.user.createMany({
        data:[
            {Email:faker.internet.email(),Password:faker.internet.password(),travelId:travelList[0].Id,Name:faker.word.noun()},
            {Email:faker.internet.email(),Password:faker.internet.password(),travelId:travelList[1].Id,Name:faker.word.noun()},
            {Email:faker.internet.email(),Password:faker.internet.password(),travelId:travelList[2].Id,Name:faker.word.noun()},
            {Email:faker.internet.email(),Password:faker.internet.password(),travelId:travelList[3].Id,Name:faker.word.noun()},
            {Email:faker.internet.email(),Password:faker.internet.password(),travelId:travelList[1].Id,Name:faker.word.noun()},
            {Email:faker.internet.email(),Password:faker.internet.password(),travelId:travelList[2].Id,Name:faker.word.noun()}
        ]
    })
}
await f()