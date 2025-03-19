<script lang="ts">
  import "../../../../app.css"
  import { writable } from "svelte/store"
  import { setContext } from "svelte"
  import { WebsiteName } from "../../../../config"
  import ProfileDropdown from "../../../../components/ProfileDropdown.svelte"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  const adminSectionStore = writable("")
  setContext("adminSection", adminSectionStore)
  let adminSection: string | undefined = $state()
  adminSectionStore.subscribe((value) => {
    adminSection = value
  })
</script>

<div class="min-h-screen">
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">{WebsiteName}</a>
    </div>
    <div class="flex-none">
      <ProfileDropdown />
    </div>
  </div>
  <div class="container mx-auto px-6 lg:px-12 py-6">
    {@render children?.()}
  </div>
</div>
