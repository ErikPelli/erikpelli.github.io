<script>
	// Technologies
	import SvelteLogo from "$lib/components/svelte-logo.svelte";
	import TailwindLogo from "$lib/components/tailwind-logo.svelte";

	// Companies
	import GardaLogo from "$lib/components/garda-logo.svelte";

	import Fa from "svelte-fa/src/fa.svelte";
	import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="flex flex-col justify-around h-[80vh] my-6">
	<div class="flex flex-row flex-wrap justify-center space-x-4">
		<a href="/about"
			 class="flex bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 space-x-2 rounded items-center">
			<span class="uppercase">About me</span>
			<Fa icon={faCaretRight} />
		</a>
		<a href="/projects"
			 class="flex bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 space-x-2 rounded items-center">
			<span class="uppercase">Projects</span>
			<Fa icon={faCaretRight} />
		</a>
	</div>

	<div class="flex flex-col text-center space-y-3">
		<span class="invisible text-[0px]">Garda Security</span>
		<span class="invisible text-[0px]">Crisis24</span>
		<span class="invisible text-[0px]">GardaWorld</span>
		<h1 class="text-4xl font-semibold text-[#747678]">Software Engineer at</h1>
		<GardaLogo size="h-10" />
	</div>

	<div class="text-center">
		<p class="text-gray-300 text-4xl xl:text-6xl font-extralight">Send me an
			<a href="mailto:erikpellizzon1@gmail.com" class="text-blue-400 font-bold">email</a>
		</p>
	</div>
</div>

<div class="flex justify-center space-x-2 bg-gray-300 p-2">
	<span class="text-gray-600 text-xl italic font-bold">Made with</span>
	<SvelteLogo size="h-8" />
	<TailwindLogo size="h-8" />
</div>

