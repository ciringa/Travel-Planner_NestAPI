import { Prisma, User } from "@prisma/client"

export interface UserRepositorie{
    create(data:Prisma.UserUncheckedCreateInput):Promise<User>
    findById(UserId:string):Promise<User | null>
}