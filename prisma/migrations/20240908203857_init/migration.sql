-- CreateTable
CREATE TABLE "pedido" (
    "id_pedido" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "payment" TEXT NOT NULL,
    "cash" DOUBLE PRECISION,
    "address" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sabores_id" TEXT[],

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id_pedido")
);
