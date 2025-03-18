import { error } from "@sveltejs/kit"
import type { RequestEvent } from "@sveltejs/kit"

export async function load(event: RequestEvent) {
  // Check if user is authenticated
  const { session } = await event.locals.safeGetSession()

  try {
    // Use Prisma to fetch all profiles
    const profiles = await event.locals.prisma.profile.findMany({
      take: 10,
      orderBy: {
        updatedAt: "desc",
      },
    })

    return {
      profiles,
      user: session?.user || null,
    }
  } catch (err) {
    console.error("Error loading profiles:", err)
    throw error(500, "Error loading profiles")
  }
}
