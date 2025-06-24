/*
  Warnings:

  - Added the required column `statusCode` to the `TimeCheck` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusText` to the `TimeCheck` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TimeCheck" ADD COLUMN     "statusCode" INTEGER NOT NULL,
ADD COLUMN     "statusText" TEXT NOT NULL;
