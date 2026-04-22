<script>
  import { goto, afterNavigate } from '$app/navigation';
  import { base } from '$app/paths';
  import { next, prev, flat } from '$lib/outline.js';
  import { createPager } from '$lib/gestures.js';
  import { md } from '$lib/md.js';
  import { styleFor, modeFor, SPECTRUM_LABELS } from '$lib/palette.js';
  import { flagFor } from '$lib/flags.js';
  import Spectrum from '$lib/Spectrum.svelte';

  let { data } = $props();
  let section = $derived(data.section);
  let nextSection = $derived(next(section.num));
  let prevSection = $derived(prev(section.num));
  let position = $derived(section.orderIndex + 1);
  let total = flat.length;

  let dragOffset = $state(0);
  let dragging = $derived(dragOffset !== 0);
  let bodyEl = $state();

  $effect(() => {
    // Sync the body background to the current page palette so the view
    // transition crossfades between the correct colors.
    if (typeof document === 'undefined') return;
    const style = styleFor(section.spectrum);
    document.documentElement.setAttribute('style', style);
  });

  afterNavigate(() => {
    bodyEl?.scrollTo({ top: 0, behavior: 'instant' });
  });

  const pager = createPager({
    onNext: () => {
      if (nextSection) goto(base + '/' + nextSection.num);
    },
    onPrev: () => {
      if (prevSection) goto(base + '/' + prevSection.num);
      else goto(base + '/');
    },
    setOffset: (v) => {
      dragOffset = v;
    }
  });

  function key(e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (nextSection) goto(base + '/' + nextSection.num);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (prevSection) goto(base + '/' + prevSection.num);
      else goto(base + '/');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: 180, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: -180, behavior: 'smooth' });
    } else if (e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: bodyEl.clientHeight * 0.85, behavior: 'smooth' });
    } else if (e.key === 'PageUp') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: -bodyEl.clientHeight * 0.85, behavior: 'smooth' });
    } else if (e.key === 'Escape') {
      goto(base + '/');
    }
  }

  let hintProgress = $derived(Math.min(1, Math.abs(dragOffset) / 70));
  let mode = $derived(modeFor(section.spectrum));
  let spectrumLabel = $derived(SPECTRUM_LABELS[Math.max(-5, Math.min(5, section.spectrum))]);
</script>

<svelte:window onkeydown={key} />

<main
  class="page"
  class:dragging
  data-mode={mode}
  onwheel={pager.onWheel}
  ontouchstart={pager.onTouchStart}
  ontouchmove={pager.onTouchMove}
  ontouchend={pager.onTouchEnd}
  ontouchcancel={pager.onTouchCancel}
  style:transform="translateX({dragOffset}px)"
>
  <header class="top">
    <a class="mark vt-title" href="{base}/">By Degrees</a>
    <nav class="top-nav">
      <span class="side-mark">{section.spectrum < 0 ? 'Left' : section.spectrum > 0 ? 'Right' : 'Center'}</span>
      <span class="sep">·</span>
      <span>{section.spectrum > 0 ? '+' : ''}{section.spectrum}</span>
    </nav>
  </header>

  <div class="body" bind:this={bodyEl}>
    <div class="meta vt-partlabel">
      <span class="flag" aria-hidden="true">{@html flagFor(section.jurisdiction)}</span>
      <span class="theme">{spectrumLabel}</span>
      <span class="jurisdiction">{section.jurisdiction}</span>
      <span class="year">{section.year}</span>
    </div>

    <div class="number">{section.num}</div>

    <h1 class="title">{section.title}</h1>

    <p class="gesture">{@html md(section.gesture)}</p>

    {#if section.body}
      <p class="body-text">{@html md(section.body)}</p>
    {/if}

    {#if section.citation || section.link}
      <footer class="source">
        {#if section.citation}
          <span class="cite">{@html md(section.citation)}</span>
        {/if}
        {#if section.link}
          <a class="source-link" href={section.link} target="_blank" rel="noopener noreferrer">
            Source →
          </a>
        {/if}
      </footer>
    {/if}

    {#if section.eli5}
      <aside class="eli5">
        <div class="eli5-label">In plain terms</div>
        <p class="eli5-body">{@html md(section.eli5)}</p>
      </aside>
    {/if}
  </div>

  <footer class="bottom">
    <Spectrum currentNum={section.num} />

    <div class="nav">
      {#if prevSection}
        <a href="{base}/{prevSection.num}" class="nav-link">
          <span class="arrow">←</span>
          <span class="nav-meta">
            <span class="nav-num">{prevSection.num} · {SPECTRUM_LABELS[prevSection.spectrum]}</span>
            <span class="nav-title">{prevSection.title}</span>
          </span>
        </a>
      {:else}
        <a href="{base}/" class="nav-link">
          <span class="arrow">←</span>
          <span class="nav-meta">
            <span class="nav-num">Cover</span>
          </span>
        </a>
      {/if}

      <div class="progress">
        <span>{position}</span>
        <span class="divider">/</span>
        <span>{total}</span>
      </div>

      {#if nextSection}
        <a href="{base}/{nextSection.num}" class="nav-link right">
          <span class="nav-meta">
            <span class="nav-num">{nextSection.num} · {SPECTRUM_LABELS[nextSection.spectrum]}</span>
            <span class="nav-title">{nextSection.title}</span>
          </span>
          <span class="arrow">→</span>
        </a>
      {:else}
        <span class="nav-link right disabled">
          <span class="nav-meta">
            <span class="nav-num">End</span>
          </span>
        </span>
      {/if}
    </div>

    <div class="drag-hint" style:opacity={hintProgress}>
      <span class="bar" style:transform="scaleX({hintProgress})"></span>
    </div>
  </footer>
</main>

<style>
  .page {
    height: 100vh;              /* fallback */
    height: 100dvh;             /* mobile: shrinks with URL bar so footer stays on screen */
    padding: 3vw 5vw;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 2vw;
    transition: transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
    touch-action: pan-y;
    will-change: transform;
    overflow: hidden;
  }

  .page.dragging { transition: none; }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
  }

  .mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    letter-spacing: 0;
    text-transform: none;
    color: var(--ink);
  }

  .top-nav {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .top-nav .sep { color: var(--rule); }
  .side-mark { color: var(--accent); }

  .body {
    display: grid;
    grid-template-columns: minmax(180px, 1fr) 3fr;
    gap: 4vw;
    align-items: start;
    padding: 2vw 0;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .meta {
    font-family: var(--sans);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    border-top: 1px solid var(--rule);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .flag {
    display: block;
    width: clamp(40px, 4vw, 56px);
    aspect-ratio: 3 / 2;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 0 0 1px var(--rule), 0 1px 2px rgba(0, 0, 0, 0.12);
    margin-bottom: 0.2rem;
  }

  .flag :global(svg) {
    display: block;
    width: 100%;
    height: 100%;
  }

  .theme {
    color: var(--accent);
    font-weight: 500;
  }

  .jurisdiction {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: 0.95rem;
    text-transform: none;
    letter-spacing: 0;
    color: var(--ink);
  }

  .year {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: 1.6rem;
    text-transform: none;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-top: 0.2rem;
  }

  .number {
    grid-column: 1;
    font-family: var(--serif);
    font-weight: 200;
    font-size: clamp(4rem, 9vw, 9rem);
    line-height: 0.9;
    letter-spacing: -0.03em;
    color: var(--muted);
    font-variant-numeric: lining-nums tabular-nums;
    margin-top: 0.5rem;
  }

  .title {
    grid-column: 2;
    font-family: var(--serif);
    font-weight: 300;
    font-style: italic;
    font-size: clamp(2.4rem, 6vw, 6rem);
    line-height: 0.97;
    letter-spacing: -0.025em;
    color: var(--ink);
    max-width: 18ch;
  }

  .gesture {
    grid-column: 2;
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(1.1rem, 1.5vw, 1.4rem);
    line-height: 1.4;
    color: var(--ink);
    max-width: 44ch;
    margin-top: 1.6rem;
    border-left: 2px solid var(--accent);
    padding-left: 1.3rem;
  }

  .body-text {
    grid-column: 2;
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(0.95rem, 1.05vw, 1.05rem);
    line-height: 1.55;
    color: var(--ink);
    max-width: 56ch;
    margin-top: 1.2rem;
    padding-left: 1.3rem;
  }

  .source {
    grid-column: 2;
    margin-top: 1.4rem;
    padding-left: 1.3rem;
    padding-top: 0.8rem;
    border-top: 1px dotted var(--rule);
    max-width: 56ch;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cite {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.82rem;
    color: var(--muted);
    line-height: 1.4;
  }

  .source-link {
    font-family: var(--sans);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--accent);
    border-bottom: 1px solid transparent;
    white-space: nowrap;
    transition: border-color 180ms ease;
  }

  .source-link:hover {
    border-color: var(--accent);
  }

  .eli5 {
    grid-column: 2;
    margin-top: 2rem;
    max-width: 56ch;
    padding: 1.2rem 1.3rem;
    border-left: 2px solid var(--accent);
  }

  .page[data-mode='light'] .eli5 {
    background: rgba(20, 17, 13, 0.04);
  }

  .page[data-mode='dark'] .eli5 {
    background: rgba(244, 239, 227, 0.06);
  }

  .eli5-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--accent);
    margin-bottom: 0.6rem;
  }

  .eli5-body {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(0.95rem, 1.05vw, 1.05rem);
    line-height: 1.55;
    color: var(--ink);
  }

  .bottom { font-family: var(--sans); }

  .nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 2rem;
    border-top: 1px solid var(--rule);
    padding-top: 1.2rem;
    margin-top: 1rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--muted);
    transition: color 180ms ease;
  }

  .nav-link:hover { color: var(--ink); }
  .nav-link.disabled { opacity: 0.35; }

  .nav-link.right {
    justify-self: end;
    text-align: right;
  }

  .arrow {
    font-family: var(--serif);
    font-size: 1.4rem;
  }

  .nav-meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .nav-num {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
  }

  .nav-title {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.95rem;
    text-transform: none;
    letter-spacing: 0;
    color: var(--ink);
  }

  .progress {
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    color: var(--muted);
    display: flex;
    gap: 0.4rem;
    align-items: baseline;
  }

  .progress .divider { color: var(--rule); }

  .drag-hint {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    pointer-events: none;
    transition: opacity 140ms ease;
  }

  .drag-hint .bar {
    display: block;
    height: 100%;
    background: var(--accent);
    transform-origin: center;
    transition: transform 80ms linear;
  }

  @media (max-width: 720px) {
    .body {
      grid-template-columns: 1fr;
    }
    .number,
    .title,
    .gesture,
    .body-text,
    .source,
    .eli5 {
      grid-column: 1;
    }
    .gesture { padding-left: 1rem; }
    .body-text { padding-left: 1rem; }
    .source { padding-left: 1rem; }
    .eli5 { max-width: none; }
  }
</style>
