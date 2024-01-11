<script lang="ts">
	import './style.css';
</script>

<svelte:head>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<title>MALCHA MOTOVLOG</title>
</svelte:head>

<header>
	<div class="nav d-inline container">
		<span class="bx bx-menu" id="menu-icon"></span>
		<a href="/" class="logo">MALCHA <span>MOTOVLOG</span></a>
		<ul class="navbar">
			<li><a href="/#Beranda">Beranda</a></li>
			<li><a href="/#Produk">Produk</a></li>
			<li><a href="/#Kontak">Kontak</a></li>
			<li><a href="/tentang-saya">Tentang Saya</a></li>
		</ul>
	</div>
</header>

<slot />

<style>
	.container {
		max-width: 1068px;
		margin-left: auto;
		margin-right: auto;
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 35px;
	}

	#menu-icon {
		font-size: 24px;
		cursor: pointer;
		color: black;
		display: none;
	}

	.logo {
		font-size: 1.2rem;
		font-weight: 700;
		color: black;
	}

	.logo span {
		color: red;
	}

	.navbar {
		display: flex;
		float: right;
		column-gap: 2rem;
	}

	.navbar a {
		color: black;
		font-size: 1rem;
		text-transform: uppercase;
		font-weight: 500;
	}

	.navbar a:hover {
		color: red;
		border-bottom: 3px solid red;
	}
</style>
