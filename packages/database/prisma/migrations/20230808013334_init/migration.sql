-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
