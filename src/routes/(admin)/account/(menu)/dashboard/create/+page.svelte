<script lang="ts">
  import { onMount } from "svelte"
  import { getContext } from "svelte"

  // Set the active section for sidebar highlighting
  const adminSectionStore = getContext<{ set: (value: string) => void }>(
    "adminSection",
  )
  $: adminSectionStore.set("home")
</script>

<div class="flex flex-col gap-6 max-w-4xl mx-auto">
  <h1 class="text-3xl font-bold mb-8">Create a Karaoke or Lyric Video</h1>

  <!-- From a song with vocals option -->
  <div class="bg-base-200 rounded-lg p-8">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-purple-700 p-3 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      </div>
      <h2 class="text-xl font-semibold">From a song with vocals</h2>
    </div>

    <p class="text-base-content/70 mb-4">
      Upload your song (with vocals) as an audio or video file. We'll help you
      create either:
    </p>

    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>A karaoke video (we'll separate vocals from music)</li>
      <li>A lyric video (we'll overlay lyrics on your video)</li>
    </ul>

    <button
      class="btn btn-primary w-full flex items-center justify-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
      Create from a song
    </button>
  </div>

  <!-- From an instrumental file option -->
  <div class="bg-base-200 rounded-lg p-8 mt-6">
    <div class="flex items-center gap-4 mb-4">
      <div class="bg-purple-700 p-3 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      </div>
      <h2 class="text-xl font-semibold">From an instrumental file</h2>
    </div>

    <p class="text-base-content/70 mb-6">
      Already have an instrumental/karaoke track? Upload your instrumental audio
      file and we'll help you create a karaoke video with synchronized lyrics.
    </p>

    <button
      class="btn btn-primary w-full flex items-center justify-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
      Create from an instrumental
    </button>
  </div>
</div>
