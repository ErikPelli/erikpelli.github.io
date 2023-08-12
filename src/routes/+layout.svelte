<script>
	import "../app.postcss";

	// Social
	import GithubIcon from "svelte-feather-icons/src/icons/GithubIcon.svelte";
	import LinkedinIcon from "svelte-feather-icons/src/icons/LinkedinIcon.svelte";
	import TelegramIcon from "svelte-feather-icons/src/icons/SendIcon.svelte";

	const actualYear = new Date().getFullYear();
</script>

<div class="page">
	<header class="w-full bg-gray-800 p-6">
		<div class="flex flex-col md:flex-row">
			<div class="flex flex-col md:flex-row space-x-6 text-left md:text-center">
				<div class="flex flex-row text-gray-300 text-center">
					<span class="text-5xl">@</span>
					<h1 class="text-8xl italic font-semibold">ErikPelli</h1>
				</div>
				<h2 class="text-4xl text-gray-500 uppercase font-semibold md:font-light">Portfolio Website</h2>
			</div>
			<div
				class="flex flex-row md:flex-col bg-gray-600 rounded-lg p-1 mt-3 space-x-1 md:space-x-0 md:space-y-1 md:w-10 md:ml-auto justify-center">
				<a href="https://github.com/ErikPelli" target="_blank">
					<GithubIcon class="rounded-3xl bg-black text-white p-1" size="2x" />
				</a>
				<a href="https://linkedin.com/in/erikpelli" target="_blank">
					<LinkedinIcon class="rounded-3xl bg-blue-700 text-white p-1" size="2x" />
				</a>
				<a href="https://telegram.me/ErikP" target="_blank">
					<TelegramIcon class="rounded-3xl bg-white text-blue-400 p-1" size="2x" />
				</a>
			</div>
		</div>
		<div class="flex lg:justify-end w-full">
			<nav class="flex justify-center space-x-2 text-center mt-4 my-2 w-full md:w-3/5 lg:w-96">
				<a href="/" class="p-1 rounded-lg bg-gray-300 w-1/4 hover:w-1/3 uppercase">Home</a>
				<a href="/about" class="p-1 rounded-lg bg-gray-300 w-1/4 hover:w-1/3 uppercase">About me</a>
				<a href="/projects" class="p-1 rounded-lg bg-gray-300 w-1/4 hover:w-1/3 uppercase">Projects</a>
			</nav>
		</div>
	</header>

	<slot />
</div>

<footer class="w-full bg-gray-800 text-gray-500 text-center p-6">
	<div class="flex items-center justify-center">
		<hr class="w-full border-gray-700 border-2" />
	</div>
	<p class="text-xl p-2 pt-4">Copyright © {actualYear} - Erik Pellizzon</p>
</footer>