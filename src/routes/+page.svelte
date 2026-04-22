<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { paletteFor } from '$lib/palette.js';
  import { createPager } from '$lib/gestures.js';

  let dragOffset = $state(0);
  let dragging = $derived(dragOffset !== 0);

  const stops = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  const gradient = `linear-gradient(to right, ${stops.map((s) => paletteFor(s).bg).join(', ')})`;

  function start() {
    goto(base + '/' + flat[0].num);
  }

  const pager = createPager({
    onNext: start,
    onPrev: () => {},
    setOffset: (v) => {
      dragOffset = Math.min(0, v);
    }
  });

  function key(e) {
    if (e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') start();
  }
</script>

<svelte:window onkeydown={key} />

<main
  class="cover"
  class:dragging
  onwheel={pager.onWheel}
  ontouchstart={pager.onTouchStart}
  ontouchmove={pager.onTouchMove}
  ontouchend={pager.onTouchEnd}
  ontouchcancel={pager.onTouchCancel}
  style:transform="translateX({dragOffset}px)"
>
  <div class="meta top">
    <span>Andrew Gauger</span>
    <span>MMXXVI</span>
  </div>

  <div class="title-block">
    <div class="kicker">American policy, left to right</div>
    <h1 class="vt-title">
      <span>By</span>
      <span class="italic">Degrees</span>
    </h1>
    <div class="sub">Thirty-eight laws signed between 1976 and 2026,<br />arranged from the bluest blue to the reddest red.</div>

    <div class="gradient" style:background={gradient}>
      <span class="tick-left">Left</span>
      <span class="tick-right">Right</span>
    </div>
  </div>

  <div class="meta bottom">
    <button onclick={start}>Begin&nbsp;→</button>
    <span class="hint">Enter, arrow, swipe, or scroll</span>
  </div>
</main>

<style>
  .cover {
    height: 100vh;
    padding: 5vw 7vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transition: transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
    touch-action: pan-y;
    will-change: transform;
  }

  .cover.dragging { transition: none; }

  .meta {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-block {
    align-self: center;
    max-width: 1100px;
  }

  .kicker {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(5rem, 15vw, 16rem);
    line-height: 0.88;
    letter-spacing: -0.035em;
    color: var(--ink);
    display: flex;
    flex-wrap: wrap;
    gap: 0.05em 0.2em;
  }

  h1 .italic {
    font-style: italic;
    font-weight: 200;
    background: linear-gradient(to right, #0a1f4a 0%, #4a0c12 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .sub {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.1rem, 1.6vw, 1.5rem);
    color: var(--muted);
    margin-top: 2.5rem;
    max-width: 40ch;
    line-height: 1.35;
  }

  .gradient {
    position: relative;
    margin-top: 2.5rem;
    height: 12px;
    width: min(520px, 70vw);
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px var(--rule);
  }

  .tick-left, .tick-right {
    position: absolute;
    top: 18px;
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--muted);
  }

  .tick-left { left: 0; }
  .tick-right { right: 0; }

  button {
    font-family: var(--sans);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    padding: 1rem 1.6rem;
    background: var(--ink);
    color: var(--bg);
    transition: background 200ms ease;
  }

  button:hover {
    background: var(--accent);
  }

  .hint {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }
</style>
