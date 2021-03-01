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
  <i class="nes-logo"></i>
  <div>
  A Pimoroni Retro Arcade Dashboard powered by the
  <a href="https://blues.io" target="_new">Notecard</a>
  and <a href="https://notehub.io" target="_new">Notehub.io</a>.
  </div>
</footer>

<style>
	main, header, footer {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		color: #36454f;
		text-transform: uppercase;
		font-size: 2em;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 20px;
  }
</style>