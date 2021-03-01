<style>
  :global(.sd-spinner-container) {
    margin: auto;
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { apiKey, apiUrl } from './consts';
  import { Backdrop, Spinner } from 'proi-ui';

  let backdropOpen = true;
  let currentlyPlaying = "";

  onMount(async () => {
    // Get Dashboard Data
    const response = await fetch(`${apiUrl}?code=${apiKey}`);
    const data = await response.json();

    console.log(data);

    currentlyPlaying = "River City Ransom";

    // Currently Playing / Last Played
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
    <p class="title">Currently Playing</p>
    <p>{currentlyPlaying}</p>
  </div>
</div>