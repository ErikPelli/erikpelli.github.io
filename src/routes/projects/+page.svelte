<div class="flex flex-col justify-around my-6 space-y-4 w-full">
	<div>
		<a href="https://github.com/ErikPelli/JDigital" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="c"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">JDigital</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/jdigital.png" alt="JDigital" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					JDigital is a project based on <a class="underline underline-offset-2" href="https://github.com/ErikPelli/IpDigital">IpDigital</a>, an old school group
					project based on PHP, leaving its backend/frontend part intact and replacing the legacy PHP API that provides
					the core functionality with a Java Spring (Boot) API, without breaking compatibility with the previous one,
					making a transparent upgrade for its users.
				</p>
				<p>
					The goal of the entire project was to create a system for managing nonconformities in an imaginary company,
					thus allowing tracking of how problems were resolved in the past and resolving them in the present through a
					simple but effective web interface, giving the employee sufficient freedom of choice on how to go about acting
					on a problem that has arisen.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/BigMetric" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="c"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">BigMetric</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/bigmetric.png" alt="BigMetric" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					BigMetric is a Proof of Concept to test a scalable network of temperature sensors located worldwide that
					collects time series data.
					There is a middleware that handles the data collected from the sensors, filters it, processes it by converting
					it to a compatible format, and saves it to the database, written in Java Spring.
				</p>
				<p>
					Grafana was chosen to display some graph on changes in sensor data over time. The tool takes data directly
					from the Cassandra cluster using some CQL (Cassandra Query Language) queries written for this project, over
					the timeframe considered.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/sbor" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">MessagePack serializer</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/msgpack.png" alt="MessagePack" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					S.B.O.R. is a modern and straightforward MessagePack serializer written completely in Go, without the use of
					code that use "unsafe" package and thus preserving the cross-compilation characteristics of the language.
				</p>
				<p>
					The aim of the project is to make a library that balances the performance with the ease of use. Its code must
					be easy and understandable, and the tests must be adequate, with unit test code coverage greater than 95%.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/SimplyP2P" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">SimplyP2P</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/p2p.png" alt="P2P" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					SimplyP2P is a simple peer-to-peer network that synchronize a
					<span class="italic">common boolean state between all peers</span> and show the current state in a GUI, with
					some buttons to change its value in all peers.
				</p>
				<p>
					The reference value is the time expressed as UNIX timestamp: if the value is greater than that of the
					currently contained value, the status of current node is updated and it will be transmitted to the other
					connected nodes, otherwise the update will be discarded because it's considered obsolete.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/MinecraftLightServer" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">Minecraft Light Server</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/mclight.png" alt="Minecraft" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					Minecraft Light Server is a simple
					<span class="italic">multiplayer Minecraft server written entirely in Go</span>, which can help
					those who are making one to better understand how the basic things that compose it interact with each other.
				</p>
				<p>
					It's very basic and its functions are very limited, but it was built following the specifications and
					understanding what other projects have done, which are written in the project readme file.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/SRIX4K-Reader" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">SRIX4K Reader</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/nfc.png" alt="NFC" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					SRIX4K Reader is a program to read, modify and write SRIX4K and ST25TB04K NFC tags, which are contained in
					everyday products.
					This project, unlike all the other similar ones on GitHub, follows all the guidelines imposed by the
					<a href="https://www.st.com/resource/en/datasheet/st25tb04k.pdf">ST datasheet</a>, including the rereading of
					the written data, to preserve the data integrity, and the division of the NFC tag's EEPROM into different
					logical zones with different permissions.
				</p>
				<p>
					This program relies on <span class="italic">libnfc</span> library to interact with the NFC reader and the NFC
					tag, but due to its
					modularity, the library for the reader can be easily changed in the future.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/GoombaGram/GoombaGram" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go"
					 class="h-10" />
			<h1
				class="text-gray-300 text-4xl xl:text-5xl font-bold text-center line-through decoration-gray-900 decoration-4">
				Goombagram</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/telegram.png" alt="Telegram" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					GoombaGram is a library written entirely in Go that interfaces directly with Telegram servers and acts as a
					Telegram client, thus allowing you to manage an account and automate actions.
				</p>
				<p>
					Its development has been suspended, some parts have been developed but it's currently incomplete.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/GoombaGram/TL-parser-JSON" class="flex justify-center space-x-2 items-center">
			<h1 class="text-gray-300 text-3xl xl:text-4xl font-bold text-center">TL parser JSON</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200 text-center">
				<p>
					TL parser JSON is a parser linked to Goombagram that parse a Telegram
					<span class="italic">.tl scheme file</span> and produce and output <span class="italic">JSON file</span>,
					which has
					the same format as those used by Telegram.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/McTazze" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
					 alt="c sharp" class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">McTazze</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<img class="w-1/2 max-w-xs hover:scale-150" src="projects/mctazze.png" alt="McTazze" />
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200">
				<p>
					McTazze is a program that generates random (but valid, thanks to the generation algorithm) McDonald's italian
					coffee promocode and insert them in some accounts registered on their website. Accounts are taken from a JSON
					file that contains emails and cookies of the account session.
				</p>
				<p>
					However, McDonalds added a Google Captcha verification after 1 month, so I decided to release his full code
					for educational purposes.
					Before that, it was able to completely fill the coupon slots of <span class="italic">500 accounts in about 2 minutes</span>.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/McCafe-Locations" class="flex justify-center items-center">
			<h1 class="text-gray-300 text-3xl xl:text-4xl font-bold text-center">McCafe Locations</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200 text-center">
				<p>
					McCafe Locations is a simple Python script linked to McTazze and, starting from the files published on the
					McDonald's website, it compares the locations of restaurants and eliminates those that don't have a cafeteria,
					producing an output JSON file usable by McTazze.
				</p>
			</div>
		</div>
	</div>
	<div>
		<a href="https://github.com/ErikPelli/MiZipGen" class="flex justify-center space-x-2 items-center">
			<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java"
					 class="h-10" />
			<h1 class="text-gray-300 text-4xl xl:text-5xl font-bold text-center">MiZipGen</h1>
		</a>
		<div class="flex flex-row flex-wrap justify-center items-center space-y-8 lg:space-y-0 md:space-x-8 my-4">
			<div class="w-2/3 max-w-lg space-y-3 text-gray-200 text-center">
				<p>
					MiZipGen is a Java library that calculates all the keys for the Mifare tag of the MiZip vending key.
				</p>
				<p>
					It's based on <span class="font-mono">https://github.com/iceman1001/proxmark3/blob/master/client/scripts/calc_mizip.lua</span>,
					but in Java.
				</p>
			</div>
		</div>
	</div>
</div>