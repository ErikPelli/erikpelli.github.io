---
layout: post
title: China, a nightmare for geographic coordinates
tags: technical gis software
---

Today I wanted to do a technical deep dive on a problem I faced last year and which took me some time to discuss the best possible solution and implement it accordingly.

> **[Warning]**
>
> If you haven't already done so, read [this article](/blog/2024-02/gps-coordinates) on the basics of geographic coordinates, it's important for understanding the subsequent text.

## The problem

The WGS-84 standard is used almost everywhere for geographic coordinates, except in one place: **China**.

TAAAN TAAN TAN!
```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣴⣶⣶⣶⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⡿⢟⡹⢩⡝⣹⢻⡿⣿⣿⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⠏⠐⠂⠌⠱⡸⢥⡻⡼⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⣿⣿⡏⠠⠁⠀⢦⠀⠑⢪⢵⣻⣽⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠻⡿⡼⠟⣻⣿⠦⢵⣿⢿⣿⣿⣾⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡗⠴⣛⣿⡿⠳⢨⣿⡻⣛⣿⡿⢿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡇⡀⠂⠉⣤⠆⢲⣿⡍⢣⢍⣘⣿⣿⣿⡿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣗⡘⣤⡿⠳⡿⣿⣿⣿⣆⡜⣮⣷⣿⣿⣷⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⢴⢿⣁⣦⣴⣧⣽⣽⣿⣞⣷⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢏⢶⡏⠹⣷⠿⣿⣿⣻⢼⣿⣳⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣫⣦⡰⢤⣛⢧⣾⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣀⡤⣔⣾⣹⢿⣻⣿⣿⣿⣿⢿⣯⢿⢞⣽⣿⣿⣶⣄⡀⠀⠀⠀⠀
⡐⣆⠶⣭⣛⡮⢷⣹⣞⣧⡫⡲⣯⢿⣿⣻⣿⣺⣵⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⣀
⠹⡬⣓⢧⡹⣝⢯⡽⣞⢶⣻⣽⢪⣿⣫⣵⣿⣿⡿⣿⣿⣿⣿⣿⣿⢿⡟⣟⣯⣛
⡓⢶⡙⣎⠷⣏⢾⡹⢯⢷⣳⡞⣷⣿⣿⣟⣷⣫⢷⣫⣾⣿⢻⣻⣭⡟⣾⣱⡞⣬
⣹⢣⢟⣬⣛⣮⢷⣹⢻⣧⢷⣻⣿⣿⣿⡿⣾⣯⣿⣿⣿⢾⣯⢷⣺⣝⣮⣳⣝⠶
⡜⣯⢞⡶⣹⣞⣧⢯⣻⡽⣾⣿⠿⣯⡟⣿⢿⣿⣿⡿⣽⣿⢾⣿⣳⣟⣾⣷⣚⢯
⣹⢮⣯⣝⢷⡽⣞⣯⢷⡿⣽⣺⣟⣳⡽⣞⣯⣿⣿⣽⣿⣾⣿⢯⣷⣻⣿⣷⣛⣮
```

Although there are many, let us leave aside for now all the accusations about the undemocratic practices of the Chinese government and focus on the issue of geographical coordinates.

Basically, China's democratic government has created its own coordinate system based on WGS-84, to which it adds some `bullshit` calculations to ruin all maps used in foreign countries and complicate my life, simply put.
They called this "new" coordinate system "`GCJ-02`".

> Luckily I love my job, and I'm paid to solve problems :)

After doing this, they sell the license to be able to do coordinate conversion to only a few specific companies and reveal to them the magic secret algorithm that removes the bullshit from the China shared coordinates, to turn them into normal `WGS-84` coordinates.

> If you try to circumvent this restriction and illegally convert coordinates from/to WGS-84, you risk a fine and (perhaps) even arrest.

If you want to learn more read [here](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China).

### WTF, why should they do that?

1. Google Maps can't be used decently in China, and U.S. are cut off from their market.
2. `dOn'T yOU pReFeR BaIdU mApS inStEad?` It's the same as Google Maps but full of trackers for your safety :)
3. We ♥ to control everything.

| ![1984](/assets/img/blog/2024-02-19-gps-coordinates/1984.jpg) | 
|:--:| 
| *The perfect democracy* |

## Google Maps example

China provides road mappings in its `GCJ-02` coordinate system.
Since Google is not allowed to convert coordinates from `GCJ-02` to `WGS-84` and vice versa, a mismatch in the satellite view can be clearly seen.
The satellite images are not under the control of the Chinese government, so they are expressed in the `WGS-84` coordinate system.
This can be clearly seen in the image below: when the GPS says you are at a certain point, in the street maps you are somewhere else.

| ![Location mismatch](/assets/img/blog/2024-03-18-china-coordinates-problem/google-maps.jpg) | 
|:--:| 
| *Example of a mismatch in Beijing* |

By the way, this is the same reason why Google Maps is virtually unusable in China.
If you want to reach a place, your current GPS location is in WGS-84 as per the standard, but the destination location in their database is GCJ-02, so you end up reaching the wrong destination because Google tries to use the destination as a GPS WGS-84 coordinate.

You can choose any city in China and check it for yourself by comparing the satellite view with the road maps.

## Why this is a problem
> Not being able to convert to our liking the GCJ-02 coordinates provided by the Chinese government is also a major limitation for those companies that have a software product that uses geographic data and must work worldwide.

### Geocoding API
In my case, I was using Google's [Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) to get the coordinates from a street address and, vice versa, to get the address from geographic coordinates.

The problem is that for China, the inputs that this API expects to work properly must be in the `GCJ-02` format and, the outputs, are `GCJ-02` instead of `WGS_84`.

**This is not documented anywhere!**

Therefore, to obtain the correct address the procedure is:
1. You have a WGS-84 coordinate.
2. Convert the coordinate to GCJ-02 (you need to do this in your code), only if the coordinate is inside the borders of China, for all other countries you need to pass the WGS-84 coordinate in the API.
3. Send the GCJ-02 coordinate to the Geocoding API.
4. Obtain the correct street address.

Without the conversion, the result address we get is wrong by about `500m` - `1km`, because it interprets the input value as if it were GCJ-02.

On the contrary, if you pass as input to the API a street address that is located in China, the coordinates obtained are not WGS-84 and you have to do the conversion in order to use them in a standard way:
1. You have a street address.
2. Send the street address to the Geocoding API.
3. Check in the result if the country code is CN (China)
4. If the result is in China, convert the GCJ-02 coordinate to WGS-84 (you need to do this in your code). If country code in the API response is not CN, you haven't to do anything.
5. Be happy with WGS-84 coordinates and use them as you wish :D

Okay, but how do I do the conversion?
You can always try to get a license from the Chinese government, but you should know that there is also the:

## E.V.I.L. solution
Closed source algorithms are closed until someone finds out what they are.

Is the Chinese government behaving badly to us? Let's turn evil.
In this case there is a project called [eviltransform](https://github.com/googollee/eviltransform) that allows you to do all the conversions you need :D

It currently supports `11` different programming languages.
