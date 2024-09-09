/*
  Warnings:

  - Added the required column `emAbertos` to the `pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pedido" ADD COLUMN     "emAbertos" BOOLEAN NOT NULL;
