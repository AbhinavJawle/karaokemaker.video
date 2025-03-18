import { redirect } from "@sveltejs/kit"
import type { ServerLoad } from "@sveltejs/kit"

export const load: ServerLoad = async ({ locals }: { locals: App.Locals }) => {
  // Ensure user is authenticated
  const { session, user } = await locals.safeGetSession()

  if (!session || !user) {
    throw redirect(303, "/login")
  }

  // You can fetch data from your database here if needed
  // For now, we'll just return empty data since we're using static data in the component

  return {
    // You could return database items here
  }
}
