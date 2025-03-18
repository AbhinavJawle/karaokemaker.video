import { json } from "@sveltejs/kit"
import type { RequestEvent } from "@sveltejs/kit"

export async function GET({ locals }: RequestEvent) {
  try {
    // Use Prisma to fetch all profiles
    const profiles = await locals.prisma.profile.findMany({
      take: 10,
      orderBy: {
        updatedAt: "desc",
      },
    })

    return json({ profiles })
  } catch (error) {
    console.error("Error fetching profiles:", error)
    return json({ error: "Failed to fetch profiles" }, { status: 500 })
  }
}
