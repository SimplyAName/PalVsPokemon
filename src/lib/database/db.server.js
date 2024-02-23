import { PrismaClient } from '@prisma/client';

// Singleton to stop multiple clients being created on reload etc
const prisma = new PrismaClient();
export default prisma;
