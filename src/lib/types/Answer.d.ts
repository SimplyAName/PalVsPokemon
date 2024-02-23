import type { Creature } from '@prisma/client';

export type Answer = { creature: Creature; correct: boolean? };