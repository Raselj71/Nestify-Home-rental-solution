-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('house', 'unit', 'room', 'flat', 'floor', 'apartment', 'seat');

-- CreateEnum
CREATE TYPE "PriceType" AS ENUM ('daily', 'weekly', 'monthly');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "WalletTransactionType" AS ENUM ('RECHARGE', 'BOOKING', 'REFUND', 'ADJUSTMENT');

-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "point" INTEGER NOT NULL DEFAULT 200,
    "fullName" TEXT,
    "fcm_token" TEXT,
    "avatar" TEXT,
    "role" "user_role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saveProperty" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,

    CONSTRAINT "saveProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyCategory" TEXT NOT NULL,
    "gender" TEXT,
    "propertySeat" TEXT,
    "propertyDivision" TEXT NOT NULL,
    "propertyDistrict" TEXT NOT NULL,
    "propertyUpzila" TEXT NOT NULL,
    "propertySectorNo" TEXT,
    "propertyRoadNo" TEXT,
    "propertyHouseNo" TEXT,
    "propertyShortAddress" TEXT NOT NULL,
    "propertyAvailable" TEXT NOT NULL,
    "propertyType" "PropertyType" NOT NULL,
    "propertyBedroom" TEXT NOT NULL,
    "propertyBathroom" TEXT NOT NULL,
    "propertyBalcony" TEXT,
    "propertyFloor" TEXT,
    "propertySize" TEXT,
    "propertyPrice" TEXT NOT NULL,
    "propertyPriceType" "PriceType" NOT NULL,
    "propertyInclude" TEXT[],
    "propertyImages" TEXT[],
    "propertyDescription" TEXT,
    "propertyBookingStatus" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "propertyId" UUID NOT NULL,
    "pointsUsed" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletTransaction" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "type" "WalletTransactionType" NOT NULL,
    "points" INTEGER NOT NULL,
    "reason" TEXT,
    "meta" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "saveProperty_propertyId_key" ON "saveProperty"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_propertyId_key" ON "Booking"("propertyId");

-- AddForeignKey
ALTER TABLE "saveProperty" ADD CONSTRAINT "saveProperty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saveProperty" ADD CONSTRAINT "saveProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
