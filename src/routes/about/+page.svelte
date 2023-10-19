<script>
	// Companies
	import GardaLogo from "$lib/components/garda-logo.svelte";
</script>

<div class="flex flex-col justify-around my-6">
	<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
		<img class="w-1/2 max-w-xs" src="images/photo.png" alt="Face" />
		<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
			<p>
				I'm a Software Engineer from Italy who has been experimenting with programming problems for years
				and I enjoy finding effective solutions for each one: you can see some of my projects in my GitHub profile.
			</p>
			<p>
				I'm also an occasional open source contributor in other projects, and for example I have made some proposals
				for code changes that have been accepted and are now part of the
				<a class="underline underline-offset-2" href="https://github.com/golang/go/pulls?q=is%3Apr+author%3AErikPelli">
					Go programming language.
				</a>
			</p>
		</div>
	</div>

	<div class="my-4">
		<h1 class="text-gray-300 text-4xl xl:text-6xl font-bold text-center">Certifications</h1>
		<div class="flex flex-row space-x-2 flex-wrap justify-center p-4">
			<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/N3R64J9DGSTRm"
				 target="_blank">
				<img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="gcp" width="96"
						 height="96" title="Google Cloud Developer Specialization" />
			</a>
			<a href="https://university.mongodb.com/certification/certificate/520459879" target="_blank">
				<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
						 alt="mongodb" width="96" height="96" title="MongoDB 5.0 Associate Developer (C100DEV)" />
			</a>
			<a
				href="https://certification.mettl.com/datastax/applicant/result/download-certificate?key=ebxGmjo7OQE33y9E%2Bag8IA%3D%3D"
				target="_blank">
				<img
					src="https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" alt="cassandra" width="96"
					height="96" title="Apache Cassandra 3 Associate Developer" />
			</a>
		</div>
	</div>

	<div class="flex items-center justify-center p-6">
		<hr class="w-2/3 border-gray-700 border-2" />
	</div>

	<div class="flex flex-col items-center">
		<h2 class="w-2/3 max-w-lg text-gray-300 text-2xl xl:text-4xl font-bold text-center">&lt;October 2022 - November 2023 /&gt;</h2>
		<div class="flex flex-col w-2/3 space-y-2">
			<span class="invisible text-[0px]">Garda Security</span>
			<span class="invisible text-[0px]">Crisis24</span>
			<span class="invisible text-[0px]">GardaWorld</span>
			<div class="flex justify-center p-2">
				<GardaLogo size="h-10" />
			</div>
			<p class="p-2 text-gray-200">
				I developed new features and contributed to the maintenance of backend and frontend of X-ASSIST
				and AXA Travel EYE,
				travel security SaaS platforms managed by the Crisis24 department of GardaWorld, that allows managers from
				other companies to be tracked and alerted when there is news that may impact their area.
			</p>
		</div>
	</div>
</div>