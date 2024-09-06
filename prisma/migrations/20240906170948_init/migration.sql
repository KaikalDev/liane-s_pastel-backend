/*
  Warnings:

  - You are about to drop the `_PedidoProdutos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PedidoProdutos" DROP CONSTRAINT "_PedidoProdutos_A_fkey";

-- DropForeignKey
ALTER TABLE "_PedidoProdutos" DROP CONSTRAINT "_PedidoProdutos_B_fkey";

-- DropTable
DROP TABLE "_PedidoProdutos";

-- DropTable
DROP TABLE "pedidos";

-- DropTable
DROP TABLE "produto";

-- CreateTable
CREATE TABLE "pedidos_produtos" (
    "id_pedido" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "payment" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sabores_id" TEXT[],

    CONSTRAINT "pedidos_produtos_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_produtos_sabores_id_key" ON "pedidos_produtos"("sabores_id");
