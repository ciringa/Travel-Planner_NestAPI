import { TravelList, User } from "@prisma/client";

export interface PutUsersInTravelResponse {
    userAdded:User,
    TravelRefered:TravelList
}