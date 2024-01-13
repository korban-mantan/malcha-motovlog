<script lang="ts">
	export let data;
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	let passedProp = data.props?.data;
	let spec = passedProp?.specs;
	let selected = 'Mesin';
	let prevSelected = '';
	const tweenedOpacity = tweened(1, { duration: 300, easing: cubicOut });
</script>

<section class="detail-motor">
	<div class="container">
		<div class="title">
			<h1>
				{passedProp?.name}
			</h1>
			<p>{passedProp?.types}</p>
		</div>
		<div class="img-container">
			<img src={passedProp?.image} alt={'Gambar' + passedProp?.name} />
		</div>
		<span class="price">{passedProp?.price}</span>
		<div class="specs-container">
			<div class="container-head">
				<h2>SPESIFIKASI</h2>
				<span>List spesifikasi motor <span>{passedProp?.name}</span></span>
			</div>
			<div class="container-body">
				<ul class="head-items">
					{#each ['Mesin', 'Dimensi'] as category}
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
				{#if selected == 'Mesin'}
					<table class="specs">
						<tbody>
							<tr>
								<td>Tipe Mesin</td>
								<td>{spec?.mesin.type}</td>
							</tr>
							<tr>
								<td>Daya Mesin</td>
								<td>{spec?.mesin.power}</td>
							</tr>
							<tr>
								<td>Sistem Bahan Bakar</td>
								<td>{spec?.mesin.fuelsupply}</td>
							</tr>
							<tr>
								<td>Tipe Transmisi</td>
								<td>{spec?.mesin.transmission}</td>
							</tr>
							<tr>
								<td>Tipe Starter</td>
								<td>{spec?.mesin.starter}</td>
							</tr>
							<tr>
								<td>Tipe Kopling</td>
								<td>{spec?.mesin.kopling}</td>
							</tr>
						</tbody>
					</table>
				{:else}
					<table class="specs">
						<tbody>
							<tr>
								<td>Dimensi motor</td>
								<td>{spec?.dimensi.plt}</td>
							</tr>
							<tr>
								<td>Berat Motor</td>
								<td>{spec?.dimensi.weight}</td>
							</tr>
							<tr>
								<td>Kapasitas Bahan Bakar</td>
								<td>{spec?.dimensi.capacity}</td>
							</tr>
							<tr>
								<td>Jarak Terendah Ke Tanah</td>
								<td>{spec?.dimensi.tktanah}</td>
							</tr>
						</tbody>
					</table>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1068px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
        gap: 1rem;
	}
	.title h1 {
		font-size: 24pt;
		font-weight: bold;
	}
	.title p {
		color: #ff0000;
		font-size: 16pt;
	}
	.img-container img {
		width: 540px;
	}
    .price{
        font-size: 18pt;
        color: red;
        font-weight: 500;
    }
	.container-head {
		padding: 1rem 2rem;
	}
	.container-body {
		background: #eeeef2;
		border-radius: 10px;
		padding: 0.75rem 0;
	}
	.head-items {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		padding-bottom: 10px;
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
	.specs {
		width: 100%;
		text-align: left;
		padding: 0 5rem;
	}

	@media (max-width: 600px) {
		.specs tbody {
			display: block;
		}

		.specs tr {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem; /* Add some spacing between rows */
		}

		.specs td {
			display: block;
		}
	}
	.active {
		border-bottom: red 2px solid;
	}
</style>
