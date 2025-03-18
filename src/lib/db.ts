import { prisma } from "$lib/prisma"
import type { PrismaClient } from "@prisma/client"

// Types inferred from Prisma client
type User = Awaited<ReturnType<PrismaClient["user"]["findUnique"]>>
type Profile = Awaited<ReturnType<PrismaClient["profile"]["findUnique"]>>
type StripeCustomer = Awaited<
  ReturnType<PrismaClient["stripeCustomer"]["findUnique"]>
>
type ContactRequest = Awaited<
  ReturnType<PrismaClient["contactRequest"]["findUnique"]>
>

// User functions
export async function getUserById(userId: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { id: userId },
  })
}

export async function getUserWithProfile(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    include: { profile: true },
  })
}

// Profile functions
export async function getProfileById(userId: string): Promise<Profile | null> {
  return prisma.profile.findUnique({
    where: { id: userId },
  })
}

export async function createOrUpdateProfile(
  userId: string,
  data: Partial<Omit<Profile, "id" | "updatedAt">>,
) {
  return prisma.profile.upsert({
    where: { id: userId },
    update: {
      ...data,
      updatedAt: new Date(),
    },
    create: {
      id: userId,
      ...data,
      updatedAt: new Date(),
    },
  })
}

// Stripe customer functions
export async function getStripeCustomer(
  userId: string,
): Promise<StripeCustomer | null> {
  return prisma.stripeCustomer.findUnique({
    where: { userId },
  })
}

export async function createOrUpdateStripeCustomer(
  userId: string,
  stripeCustomerId: string,
) {
  return prisma.stripeCustomer.upsert({
    where: { userId },
    update: {
      stripeCustomerId,
      updatedAt: new Date(),
    },
    create: {
      userId,
      stripeCustomerId,
      updatedAt: new Date(),
    },
  })
}

// Contact request functions
export async function createContactRequest(
  data: Omit<ContactRequest, "id" | "updatedAt">,
) {
  return prisma.contactRequest.create({
    data: {
      ...data,
      updatedAt: new Date(),
    },
  })
}

export async function getContactRequests() {
  return prisma.contactRequest.findMany({
    orderBy: { updatedAt: "desc" },
  })
}
