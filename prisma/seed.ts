import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const userId = "test-user-uuid"

  const user = await prisma.user.upsert({
    where: { id: userId },
    update: {},
    create: {
      id: userId,
    },
  })

  console.log("Created test user:", user)

  // Create a profile for the test user
  const profile = await prisma.profile.upsert({
    where: { id: userId },
    update: {},
    create: {
      id: userId,
      fullName: "Test User",
      companyName: "Test Company",
      website: "https://example.com",
      updatedAt: new Date(),
    },
  })

  console.log("Created profile:", profile)

  // Create a test contact request
  const contactRequest = await prisma.contactRequest.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
      companyName: "Acme Inc",
      messageBody: "This is a test contact request message.",
      updatedAt: new Date(),
    },
  })

  console.log("Created contact request:", contactRequest)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
