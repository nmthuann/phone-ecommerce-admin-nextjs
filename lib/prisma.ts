// import { PrismaClient } from '@prisma/client'

// declare global {
//   let prisma: PrismaClient | undefined
// }

// const prismadb = globalThis.prisma || new PrismaClient()
// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb

// export default prismadb

import { PrismaClient } from '@prisma/client/edge'

const prisma = new PrismaClient()

const globalForPrisma = global as unknown as { prisma: typeof prisma }

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
