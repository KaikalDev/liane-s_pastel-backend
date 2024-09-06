/*
  Warnings:

  - The primary key for the `pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id_pedido` column on the `pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pedido" DROP CONSTRAINT "pedido_pkey",
DROP COLUMN "id_pedido",
ADD COLUMN     "id_pedido" SERIAL NOT NULL,
ADD CONSTRAINT "pedido_pkey" PRIMARY KEY ("id_pedido");
