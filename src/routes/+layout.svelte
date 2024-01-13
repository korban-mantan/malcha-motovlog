<script lang="ts">
	import './style.css';
	let currentYear = new Date();
</script>

<svelte:head>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
	<title>MALCHA MOTOVLOG</title>
</svelte:head>
<div class="wa-link">
	<a href="https://wa.me/+6285314442854"><img src="/wa-logo.png" alt="Whatsapp logo for contacting"></a>
</div>
<header>
	<div class="nav d-inline">
		<a href="/" class="logo">MALCHA <span>MOTOVLOG</span></a>
		<ul class="navbar">
			<li><a href="/">Beranda</a></li>
			<li><a href="/#motor">Produk</a></li>
			<li><a href="/tentang-saya">Tentang Saya</a></li>
		</ul>
	</div>
</header>

<slot />

<footer class="footer-container">
	<div class="contact-card">
		<div class="contact">
			<div>
				<p>Email</p>
				<p><a href="mailto:hikmalakbar203@gmail.com">hikmalakbar203@gmail.com</a></p>
			</div>
			<div>
				<p>Whatsapp</p>
				<p><a href="https://wa.me/+6285314442854">0853 1444 2854</a></p>
			</div>
		</div>
	</div>
	<hr />
	<div class="footer-container">
		<div class="copyright">
			<p>
				Copyright &copy; {currentYear.getFullYear()} Yamaha Indonesia Motor Mfg & PT. Astra Honda Motor.
				All Rights Reserved
			</p>
		</div>
	</div>
</footer>

<style>
	footer{
		margin: 1rem 0;
	}
	.wa-link {
		display: grid;
		place-items: center;
		height: 52px;
		width: 52px;
		background: #0fee77;
		position: fixed;
		right: 15px;
		bottom: 30px;
		border-radius: 20px;
		z-index: 50;
	}
	hr {
		border-top: 1px solid #ff0000;
		width: 100%;
	}
	.footer-container {
		max-width: 1068px;
		margin-left: auto;
		margin-right: auto;
	}
	.contact {
		width: 26rem;
		padding: 0.5rem 1rem;
		background: red;
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}
	.contact a {
		color: #fff;
	}
	.copyright p{
		color: #5d5b5b;
		font-size: 11pt;
	}
	.nav {
		max-width: 1068px;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 35px;
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
		transition:
			color 0.3s ease,
			border-bottom 0.1s;
	}
</style>
