/*
  Warnings:

  - You are about to drop the `pedidos_produtos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "pedidos_produtos";

-- CreateTable
CREATE TABLE "pedidos" (
    "id_pedido" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "payment" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sabores_id" TEXT[],

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_sabores_id_key" ON "pedidos"("sabores_id");
