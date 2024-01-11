<script lang="ts">
	import { FlickService } from '$lib/services/flickService';
	import ListMotor from '$lib/components/ListMotor.svelte';

	let selected: string | undefined;
	$: datas = selected
		? FlickService.getInstance().getFlicks().filter((flick) => flick.types == selected)
		: FlickService.getInstance().getFlicks();
</script>

<section class="home" id="home">
	<div class="home-text">
		<h1>SELAMAT DATANG DI <br />MALCHA <span>MOTOVLOG </span></h1>
		<p>Informasi Motor Anti Ribet? Disini Tempatnya!</p>
		<a href="/detail" class="button">Klik Disini</a>
	</div>
</section>

<section class="motor" id="motor">
	<div class="heading">
		<h2>PRODUK</h2>
		<span>Berikut Tipe Motor Di MALCHA <span>MOTOVLOG</span></span>
	</div>
	<div class="motor-container">
		<div class="container-head">
			<ul class="head-items">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					href="#"
					on:click={() => {
						selected = '';
					}}
				>
					<li>Semua</li>
				</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					href="#"
					on:click={() => {
						selected = 'Matic';
					}}
				>
					<li>Matic</li>
				</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					href="#"
					on:click={() => {
						selected = 'Big Matic';
					}}
				>
					<li>Big Matic</li>
				</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<a
					href="#"
					on:click={() => {
						selected = 'Sport';
					}}
				>
					<li>Sport</li>
				</a>
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
		max-width: 100%;
		margin: 0;
		min-height: 640px;
		display: flex;
		align-items: center;
		background-image: url(/images/background.jpg);
		filter: brightness(0.95);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center left;
	}

	.home-text {
		padding-left: 130px;
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
		padding: 10px 22px;
		background: black;
		color: white;
		font-weight: 400;
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
		background: #ddd;
		padding: 1rem 2rem;
	}
	.head-items {
		display: flex;
		color: #000;
		text-decoration: none;
		justify-content: center;
		gap: 1.5rem;
		font-size: 16pt;
	}
	.type-motor {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
		margin-top: 2rem;
	}
</style>
