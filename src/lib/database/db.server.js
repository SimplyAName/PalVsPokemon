import { PrismaClient } from '@prisma/client';

// expose a singleton
const prisma = new PrismaClient();
export default prisma;
