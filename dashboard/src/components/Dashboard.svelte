<style>
  :global(.sd-spinner-container) {
    margin: auto;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { apiKey, apiUrl } from './consts';
  import { Backdrop, Spinner } from 'proi-ui';
  import { getGame, getPlatform } from './helpers';

  let backdropOpen = true;
  let currentlyPlaying = "";
  let lastPlayed = "";

  onMount(async () => {
    // Get Dashboard Data
    const response = await fetch(`${apiUrl}?code=${apiKey}`);
    const data = await response.json();

    console.log(data);

    // Currently Playing / Last Played
    currentlyPlaying = getGame(data.currentlyPlaying);
    lastPlayed = getGame(data.lastPlayed);

    // Pie Chart of all games
    // Pie Chart of platforms
    // Total Time Played
    // Histogram of games, by time

    backdropOpen = false;
  });
</script>

<Backdrop open={backdropOpen}>
  <Spinner labeled label="Fetching..."/>
</Backdrop>

<div id="dashboard">
  <div class="nes-container with-title is-centered">
    {#if currentlyPlaying !== ""}
      <p class="title">Currently Playing</p>
      <p>{currentlyPlaying}</p>
    {:else}
      <p class="title">Last Played</p>
      <p>{lastPlayed}</p>
    {/if}
  </div>
</div>