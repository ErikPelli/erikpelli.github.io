---
layout: page
title: Speaker
permalink: speaker
---

## 2025

### [GoLab](https://golab.io/speakers/pellizzon) - Florence, Italy, October 5 - October 7
#### [Bypassing the Linux net stack with Go](https://golab.io/talks/bypassing-the-linux-net-stack-with-go) (English)
Using XDP and eBPF, we can directly read and write the Ethernet frames from the network card and parse them ourselves,
gaining complete control over the data and significantly improving performance, basically bypassing all the Linux network layers.
And all this can be done directly from a normal Go application run by the user... How beautiful is it?

[Download Slides](/assets/pdf/speaker/bypassing-linux-net-stack-go.pdf)

### [WebDay](https://www.webdayconf.it/speaker/29905/Erik-Pellizzon) - Milan, Italy, March 3
#### [You don't really know HTTP](https://www.webdayconf.it/e/sessione/3652/You-don-t-really-know-HTTP) (English)
First version of HTTP came out in 1997, do you really think that most of the traffic on the web today still uses it?
Over time there has been a great evolution of the protocol, with 2 new versions released that are not compatible with the original standard,
turning it into a totally different protocol and no longer text-based.

However, most developers don't even know what we're talking about, what about a deep dive?

[Download Slides](/assets/pdf/speaker/you-dont-really-know-http.pdf)

## 2024

### [Devfest Venezia](https://devfest24.gdgvenezia.it/speakers/erik-pellizzon/) - Venice, Italy, November 16
#### The rise of green threads (English)
In recent years, more and more programming languages are introducing
green threads internally, a type of concurrency that is built by abstracting
native OS threads using the language's runtime.

They may have various names, but the concept is always almost the same:
coroutines, virtual threads (Java 1.19+), goroutines (Go), fibers (PHP), etc.

But... Why? As we will see, they are great for I/O bound tasks, and we will
analyze the logic behind Go's implementation, which is one of the most mature.

[Download Slides](/assets/pdf/speaker/rise-green-threads-v1.pdf)

[Benchmark Examples](https://github.com/ErikPelli/requests_concurrency_benchmark)

[Video](https://www.youtube.com/watch?v=AxiZTn0dzaw)
