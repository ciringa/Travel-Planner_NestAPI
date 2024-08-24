-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "Name" TEXT,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "TravelList" (
    "Id" TEXT NOT NULL,
    "Title" TEXT,
    "Where" TEXT NOT NULL,
    "From" TEXT NOT NULL,
    "Notes" TEXT NOT NULL,

    CONSTRAINT "TravelList_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "TravelList"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
