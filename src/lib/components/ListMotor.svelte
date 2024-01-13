<script lang="ts">
	import type { FlickModel } from '$lib/models/flick';
	export let data: FlickModel;
</script>

<div class="card">
	<div class="card-head">
		<img src={data.image} alt={data.name + ' card image'} />
	</div>
	<div class="card-body">
		<h4 class="card-title">
			{data.name}
		</h4>
		<a href="/detail/{encodeURIComponent(data.name)}">Lihat Selengkapnya</a>
	</div>
</div>

<style>
	a {
		padding: .5rem .75rem;
		background: black;
		color: white;
		border-radius: 5px;
		font-size: 10pt;
	}
	a:hover {
		background: red;
	}
	.card {
		background: #fff;
		width: 210px;
		height: 280px;
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 2rem 1rem;
		border: 2px #000 solid;
		border-radius: 10px;
	}

	.card:hover h4 {
		text-decoration: underline #000 solid 1px;
		transition: text-decoration 0.5s ease;
	}
	.card-title {
		height: 40px;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 0;
	}

	.card-head {
		display: flex;
		justify-content: center;
		max-width: 100%;
	}

	.card-head img {
		max-width: 100%;
		height: auto;
		border-radius: 10px;
	}
	.card-body {
		display: block;
		gap: .2rem;
		position: absolute;
		bottom: 16px;
	}
</style>
