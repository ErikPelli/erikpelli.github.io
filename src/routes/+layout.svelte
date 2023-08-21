<script>
	import "../app.postcss";

	import Fa from 'svelte-fa/src/fa.svelte';
	import { faAt } from '@fortawesome/free-solid-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faTelegram } from '@fortawesome/free-brands-svg-icons';

	const actualYear = new Date().getFullYear();
</script>

<div class="page">
	<header class="w-full bg-gray-800 p-2 lg:p-6">
		<div class="flex flex-col lg:flex-row">
			<a href="/" class="flex flex-row items-center text-gray-300 text-center flex-wrap">
                <Fa class="text-3xl lg:text-5xl" icon={faAt} />
                <h1 class="text-6xl sm:text-8xl italic font-semibold">ErikPelli</h1>
			</a>
			<div
				class="flex flex-row lg:flex-col bg-gray-600 rounded-lg p-1 my-3 lg:my-0 space-x-1 lg:space-x-0 lg:space-y-1 lg:w-10 lg:ml-auto justify-center">
				<a href="https://github.com/ErikPelli" target="_blank">
					<Fa icon={faGithub} size="2x" class="p-0.5" />
				</a>
				<a href="https://linkedin.com/in/erikpelli" target="_blank">
					<Fa icon={faLinkedin} size="2x" class="p-0.5" />
				</a>
				<a href="https://telegram.me/ErikP" target="_blank">
					<Fa icon={faTelegram} size="2x" class="p-0.5" />
				</a>
			</div>
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