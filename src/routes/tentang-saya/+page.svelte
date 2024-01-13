<script lang="ts">
</script>

<section>
	<div class="container">
		<div class="body">
			<h1>Tentang Saya</h1>
			<p>
				Selamat datang di website saya! Saya adalah pengembara jiwa yang selalu lapar akan
				pengetahuan dan pengalaman baru. Sebagai pecinta kreativitas dan inovasi, saya mengejar
				impian dengan tekad dan semangat yang tak terbatas.
			</p>
			<div class="img-container">
				<img src="/images/profil/saya.jpg" alt="Foto Profil Saya" />
			</div>
			<table>
				<tbody>
					<tr>
						<td>Nama Lengkap</td>
						<td>:</td>
						<td>Hikmal Chairul akbar</td>
					</tr>
					<tr>
						<td>NIM</td>
						<td>:</td>
						<td>14522617</td>
					</tr>
					<tr>
						<td>Kelas</td>
						<td>:</td>
						<td>Teknik Informatika 1</td>
					</tr>
					<tr>
						<td>Semester</td>
						<td>:</td>
						<td>3 (Tiga)</td>
					</tr>
				</tbody>
			</table>
			<p>
				Dengan latar belakang di seorang mahasiswa, saya terus berkembang dan menantang diri sendiri
				untuk mencapai potensi penuh. Di sela-sela kesibukan, saya menemukan kedamaian dalam hobi
				saya mendengarkan musik, yang menjadi sumber inspirasi bagi keseimbangan hidup saya.
				Keterbukaan dan keinginan untuk terus belajar adalah pendorong utama dalam perjalanan hidup
				saya. Saya percaya bahwa setiap momen membawa peluang baru, dan saya siap menjelajahi segala
				yang ditawarkan kehidupan. Ayo sambut petualangan bersama saya! Mari saling berbagi ide,
				pengalaman, dan mungkin menciptakan sesuatu yang luar biasa bersama-sama.
			</p>
		</div>
	</div>
</section>

<style>
	.body {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
	}
	.body h1 {
		font-size: 24pt;
		font-weight: bold;
	}
	.body p {
		font-size: 11pt;
	}
	.img-container img {
		width: 320px;
	}
	table {
		width: 60%;
		text-align: start;
		margin-left: auto;
		margin-right: auto;
	}
	@media (max-width: 600px) {
		table tbody {
			display: block;
		}

		table tr {
			display: flex;
			flex-direction: column;
			margin-bottom: 1rem; /* Add some spacing between rows */
		}

		table td {
			display: block;
		}
	}
</style>
