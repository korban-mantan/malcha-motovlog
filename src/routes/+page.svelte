<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { FlickService } from '$lib/services/flickService';
	import ListMotor from '$lib/components/ListMotor.svelte';
  
	let selected = 'Semua';
	let prevSelected = '';
	$: datas = selected && selected !== 'Semua'
	  ? FlickService.getInstance()
		  .getFlicks()
		  .filter((flick) => flick.types === selected)
	  : FlickService.getInstance().getFlicks();
	const tweenedOpacity = tweened(1, { duration: 300, easing: cubicOut });
  </script>

<section class="home" id="home">
	<div class="home-text">
		<h1>SELAMAT DATANG DI <br />MALCHA <span>MOTOVLOG </span></h1>
		<p>Informasi Motor Anti Ribet? Disini Tempatnya!</p>
		<a href="#motor" class="button">Klik Disini</a>
	</div>
</section>

<section class="motor" id="motor">
	<div class="heading">
		<h2>PRODUK</h2>
		<span>Berikut Tipe Motor Di MALCHA <span>MOTOVLOG</span></span>
	</div>
	<div class="motor-container container">
		<div class="container-head">
			<ul class="head-items">
				{#each ['Semua', 'Matic', 'Big Matic', 'Sport'] as category}
					<a
						class={selected === category ? 'active' : ''}
						href="#"
						on:click|preventDefault={() => {
							prevSelected = selected;
							selected = category;
							tweenedOpacity.set(0);
							tweenedOpacity.set(1);
						}}
						style="border-bottom-color: {selected === category
							? 'red'
							: 'transparent'}; opacity: {$tweenedOpacity}"
					>
						<li>{category}</li>
					</a>
				{/each}
			</ul>
		</div>
		<div class="type-motor" id="type-motor">
			{#each datas as data}
				<ListMotor {data} />
			{/each}
		</div>
	</div>
</section>

<style>
	.home {
		width: 100%;
		margin: 0;
		min-height: 640px;
		display: flex;
		align-items: center;
		background-image: url(/images/background.jpg);
		filter: brightness(0.95);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center left;
		position: relative;
	}

	.home-text {
		position: absolute;
		left: 130px;
	}

	.home-text h1 {
		font-size: 2.4rem;
	}

	.home-text span {
		color: red;
	}
	.home-text span span {
		color: red;
	}

	.home-text p {
		font-size: 0.938rem;
		font-weight: 400;
		margin: 0.5rem 0 1.2rem;
	}

	.button {
		padding: 0.75rem 1.5rem;
		background: black;
		color: white;
		font-weight: 400;
		border-radius: 5px;
	}

	.button:hover {
		background: red;
	}

	.heading {
		text-align: center;
	}
	.heading h2 {
		font-size: 14pt;
		font-weight: 500;
		color: red;
	}
	.heading span {
		font-size: 16pt;
	}
	.heading span span {
		font-size: 16pt;
		color: red;
		font-weight: 500;
	}
	.motor-container {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.container-head {
		padding: 1rem 2rem;
	}
	.head-items {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
	}

	.head-items a {
		color: #000;
		text-decoration: none;
		font-size: 16pt;
		border-bottom: transparent 2px solid;
		transition:
			border-bottom 0.3s ease,
			opacity 0.3s ease;
	}

	.active {
		border-bottom: red 2px solid;
	}
	.type-motor {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
		margin-top: 2rem;
	}
</style>
