<script>
  import Dashboard from './Dashboard.svelte';
</script>

<header class="Site-header">
  <img src="assets/notecard_8bit.png" alt="8-bit Notecard Icon" />
  <h1>Notecade!</h1>
</header>
<main class="Site-content">
  <Dashboard />
</main>
<footer class="Site-footer">
  A Pimoroni Retro Arcade Dashboard powered by the
  <a href="https://blues.io" target="_new">Notecard</a>
  and <a href="https://notehub.io" target="_new">Notehub.io</a>.
</footer>

<style>
	main, header, footer {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3em;
    font-weight: 100;
    margin-bottom: 0;
  }
</style>