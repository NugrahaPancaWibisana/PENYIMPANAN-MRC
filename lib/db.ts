import { PrismaClient } from "@prisma/client";
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const Database = globalThis.prismaGlobal ?? prismaClientSingleton();

export default Database;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = Database;
