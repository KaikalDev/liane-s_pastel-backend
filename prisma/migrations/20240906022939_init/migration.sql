-- CreateTable
CREATE TABLE "pedidos" (
    "id_pedido" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "payment" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "id_produto" TEXT NOT NULL,
    "sabor" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidoProdutos" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "produto_id_key" ON "produto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "produto_id_produto_key" ON "produto"("id_produto");

-- CreateIndex
CREATE UNIQUE INDEX "_PedidoProdutos_AB_unique" ON "_PedidoProdutos"("A", "B");

-- CreateIndex
CREATE INDEX "_PedidoProdutos_B_index" ON "_PedidoProdutos"("B");

-- AddForeignKey
ALTER TABLE "_PedidoProdutos" ADD CONSTRAINT "_PedidoProdutos_A_fkey" FOREIGN KEY ("A") REFERENCES "pedidos"("id_pedido") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoProdutos" ADD CONSTRAINT "_PedidoProdutos_B_fkey" FOREIGN KEY ("B") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
