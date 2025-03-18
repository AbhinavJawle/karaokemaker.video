<script lang="ts">
  import { page } from "$app/stores"

  let profiles = $derived($page.data.profiles || [])
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-6">User Profiles</h1>

  {#if profiles.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each profiles as profile}
        <div class="p-4 bg-card rounded-lg shadow">
          <div class="flex items-center space-x-4">
            {#if profile.avatarUrl}
              <img
                src={profile.avatarUrl}
                alt="Profile avatar"
                class="w-12 h-12 rounded-full"
              />
            {:else}
              <div
                class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
              >
                {profile.fullName ? profile.fullName[0].toUpperCase() : "?"}
              </div>
            {/if}

            <div>
              <h3 class="font-semibold">
                {profile.fullName || "Anonymous User"}
              </h3>
              {#if profile.companyName}
                <p class="text-sm text-muted-foreground">
                  {profile.companyName}
                </p>
              {/if}
            </div>
          </div>

          {#if profile.website}
            <div class="mt-3">
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-blue-500 hover:underline"
              >
                {profile.website}
              </a>
            </div>
          {/if}

          <div class="mt-2 text-xs text-muted-foreground">
            Last updated: {profile.updatedAt
              ? new Date(profile.updatedAt).toLocaleDateString()
              : "Never"}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="p-8 text-center bg-muted rounded-lg">
      <p>No profiles found.</p>
    </div>
  {/if}
</div>
