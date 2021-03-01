<script>
  import { onMount } from 'svelte';
  import { apiKey, apiUrl } from './consts';
  import { Backdrop, Spinner } from 'proi-ui';
  import { getGame, getPlatform } from './helpers';
  import humanizeDuration from 'humanize-duration';

  let backdropOpen = true;
  let currentlyPlaying = "";
  let lastPlayed = "";
  let mostPopularPlatform = "";
  let sessionsOnMostPopular = 0;
  let platforms = {};
  let timePlayed = 0;

  onMount(async () => {
    // Get Dashboard Data
    const response = await fetch(`${apiUrl}?code=${apiKey}`);
    const data = await response.json();

    console.log(data);
    platforms = data.sessions;

    // Currently Playing / Last Played
    currentlyPlaying = getGame(data.currentlyPlaying);
    lastPlayed = getGame(data.lastPlayed);
    timePlayed = data.totalTimePlayed * 1000;

    for (const [key, value] of Object.entries(platforms)) {
      if (value.length > sessionsOnMostPopular) {
        sessionsOnMostPopular = value.length;
        mostPopularPlatform = getPlatform(key);
      }
    }

    // Pie Chart of all games
    // Pie Chart of platforms
    // Histogram of games, by time

    backdropOpen = false;
  });
</script>

<Backdrop open={backdropOpen}>
  <Spinner labeled label="Fetching..."/>
</Backdrop>

<div id="dashboard">
  <div class="nes-container with-title is-centered left">
    {#if currentlyPlaying !== ""}
      <p class="title">Currently Playing</p>
      <p>{currentlyPlaying}</p>
    {:else}
      <p class="title">Last Played</p>
      <p>{lastPlayed}</p>
    {/if}
  </div>
  <div class="nes-container with-title is-centered right">
    <p class="title">Most Popular Platform</p>
    <p>{mostPopularPlatform} ({sessionsOnMostPopular} sessions)</p>
  </div>
  <div class="nes-container with-title is-centered all">
    <p class="title">Total Time Played</p>
    <p>{humanizeDuration(timePlayed)}</p>
  </div>
  <div class="nes-container with-title is-centered all">
    <p class="title">Platforms</p>
    <ul class="nes-list">
      {#each Object.entries(platforms) as [key, value]}
        <li>{getPlatform(key)} ({value.length} sessions)</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  :global(.sd-spinner-container) {
    margin: auto;
  }

  .nes-container {
    margin-bottom: 20px;
  }

  .nes-container.all {
    clear: both;
  }

  .nes-container.left {
    float: left;
    width: 49%;
  }

  .nes-container.right {
    float: right;
    width: 49%;
  }
</style>