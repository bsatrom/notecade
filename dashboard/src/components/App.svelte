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
  <div class="nes-container">
    <div>
    A <a href="https://shop.pimoroni.com/products/picade?variant=29210087489619" target="_new">Pimoroni Picade</a>
    Dashboard powered by the
    <a href="https://blues.io" target="_new">Notecard</a>
    and <a href="https://notehub.io" target="_new">Notehub.io</a>.
    </div>
    <i class="nes-logo"></i>
    <div>
      Front-end built with <a href="https://svelte.dev/" target="_new">SvelteJS</a>,
      <a href="https://www.chartjs.org/" target="_new">Chart.js</a>
      and <a href="https://nostalgic-css.github.io/NES.css/" target="_new">NES.css</a>.
    </div>
    <i class="snes-logo"></i>
    <p>
      <a href="https://twitter.com/blueswireless" target="_new">
        <i class="nes-icon twitter is-medium"></i>
      </a>
      <a href="https://github.com/bsatrom/notecade" target="_new">
        <i class="nes-icon github is-medium"></i>
      </a>
    </p>
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

  header img {
    max-width: 128px;
  }

  footer i {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>