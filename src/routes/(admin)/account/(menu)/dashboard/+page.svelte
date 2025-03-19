<script lang="ts">
  import { onMount } from "svelte"
  import { getContext } from "svelte"

  // Set the active section for sidebar highlighting
  const adminSectionStore = getContext<{ set: (value: string) => void }>(
    "adminSection",
  )
  $: adminSectionStore.set("home")

  // Define sample data for the table
  let items = [
    { id: 1, title: "IDK", date: "a month ago" },
    { id: 2, title: "Him", date: "a month ago" },
    { id: 3, title: "erundich", date: "2 months ago" },
    { id: 4, title: "erundich", date: "2 months ago" },
    { id: 5, title: "erundich", date: "2 months ago" },
    { id: 6, title: "erundich", date: "2 months ago" },
    { id: 7, title: "erundich", date: "2 months ago" },
    { id: 8, title: "erundich", date: "2 months ago" },
    { id: 9, title: "erundich", date: "2 months ago" },
    { id: 10, title: "erundich", date: "2 months ago" },
  ]

  // Pagination state
  let currentPage = 1
  let itemsPerPage = 4

  let totalPages = Math.ceil(items.length / itemsPerPage)

  // Compute the current page items
  $: paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page
    }
  }
</script>

<div class="flex flex-col gap-6">
  <!-- Header Section with Library title and Create button on same line -->
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">Library</h1>
    <button
      class="btn btn-secondary gap-2 rounded-xl"
      aria-label="Create new item"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
        />
      </svg>
      Create
    </button>
  </div>

  <!-- Table Section -->
  <div class="px-4 md:px-6 rounded-lg bg-base-300">
    <!-- Fixed height container for table -->
    <div class="h-[calc(100vh-200px)] flex flex-col">
      <!-- Table Container with scrolling -->
      <div class="flex-1 overflow-y-auto">
        <table class="table w-full mt-4">
          <thead>
            <tr>
              <th class="text-left w-[50%]">Title</th>
              <th class="text-left w-[30%]">Date</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {#each paginatedItems as item}
              <tr class="hover">
                <td class="py-4">
                  <a
                    href={`/account/dashboard/item/${item.id}`}
                    class="link link-primary"
                  >
                    {item.title}
                  </a>
                </td>
                <td class="py-4">{item.date}</td>
                <td class="py-4 text-right">
                  <div class="flex justify-end gap-2">
                    <button
                      class="btn btn-ghost btn-square btn-sm"
                      aria-label="Edit item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                        />
                      </svg>
                    </button>
                    <button
                      class="btn btn-ghost btn-square btn-sm text-error"
                      aria-label="Delete item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <!-- Pagination controls in fixed position -->
      {#if totalPages > 1}
        <div class="border-t py-4 mt-auto">
          <div class="flex justify-center gap-2">
            <button
              class="btn btn-ghost btn-sm"
              on:click={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              «
            </button>
            <button
              class="btn btn-ghost btn-sm"
              on:click={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            <button class="btn btn-secondary btn-sm">
              {currentPage}
            </button>
            <button
              class="btn btn-ghost btn-sm"
              on:click={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
            <button
              class="btn btn-ghost btn-sm"
              on:click={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
