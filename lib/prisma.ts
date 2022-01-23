/* eslint-disable no-var */
import { Env, isNull } from '@fullstacksjs/toolbox';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient; // eslint-disable-line
}

if (Env.isDev && isNull(global.prisma)) {
  global.prisma = new PrismaClient();
}

const prisma: PrismaClient = Env.isProd ? new PrismaClient() : global.prisma;

export default prisma;
