---
layout: post
title: GPS coordinates, From Zero to IDK
tags: technical gis easy
---

```
G -> Global
P -> Positioning
S -> System
```

Literally, it's the thing that lets you know where you are and works anywhere in the world.
Originally created as a U.S. defense project, it has spread in later years for civilian purposes, so much so that by now anyone can tell you what it is without ever having studied it.

The common person, however, knows only what it is, and not how it works.
In this article I want to summarize what I learned while working on an enterprise software project involving OpenStreetMap and Google Maps geographic data: I built it on these basic concepts and took them to the next level of complexity.

## Projections

When working with geographic data, the root problem is approximation.
There are so many ways, perhaps even infinite ways, to represent the Earth coordinates, whether it is on a 2D plane, or through the use of some geometric figure, such as a sphere, or even a [cube](https://en.wikipedia.org/wiki/Quadrilateralized_spherical_cube)!

> Long live the cubic Earth, checkmate flat-earthers!

Each of these representations of the Earth is called a projection.
One of the most famous is surely Mercator's, which you may have already heard of and which dates back to the 1500s/ 1600s.

| ![Mercator Map](/assets/img/blog/2024-02-19-gps-coordinates/mercator-world-map.jpg) | 
|:--:| 
| *Ancient Mercator's Map* |

[Here](https://en.wikipedia.org/wiki/List_of_map_projections) for example there is a list of projections, each with its own distinguishing characteristics, there is the one that distorts the representation of the Earth at the 2 poles the most, or perhaps the one that is perfect for representing Antarctica but becomes horrible at any other location.

| ![Mercator Map](/assets/img/blog/2024-02-19-gps-coordinates/projections-examples.png) | 
|:--:| 
| *Random projections* |

### The problem of approximation
How do you think you can perfectly represent an (almost) spherical planet like Earth using a 2D surface? It's impossible!
Indeed, it is, which is why on advanced computer systems such as GPS no such projection is used.

#### Let's use a sphere!
Easy, we can approximate the Earth as if it was a sphere as they did in the plastic globe and it will surely work.... It shouldn't be too inaccurate.
Wrong. In order to use it in real life, we want an accuracy of less than 10 meters from the actual position, which cannot be reached by a sphere.

#### Real shape of Earth
> Wait? Isn't the earth a sphere? But then they lied to me.

> You don't fool me this time, the earth is a geoid, it is identical to a sphere but flattened at the 2 poles (north and south).

Well yes, but actually no, that's not it either.... No matter how hard we may try to assign the Earth a geometric shape, it remains a planet, and therefore it will be full of irregularities.

See for example the photo below (right), which shows the true shape of the Earth, and on the left instead you can see an approximation of it as a geometric shape (which, however, remains only an approximation).

| ![Earth Shape](/assets/img/blog/2024-02-19-gps-coordinates/earth-shape.png) | 
|:--:| 
| *Earth shape (Right) and its approximation (Left)* |

## THE projection
> WGS-84, a dream, a religion, a standard, everyone uses it, so many hate it, a projection to rule them all.
>
> ~ Mahatma Gandhi

And it's only at this point that we can talk about WGS-84.
It's a projection, whose acronym stands for `World Geodetic System 1984`, what year do you think it was invented?

| ![1984](/assets/img/blog/2024-02-19-gps-coordinates/1984.jpg) | 
|:--:| 
| *Are you sure it's just a coincidence?* |

This specific projection is used by virtually anyone dealing with geographic data saved on computer systems (so-called GIS), we find it everywhere, in **Google Maps**, **OpenStreetMap**, **GPS coordinates**, **Pokemon** Go and probably any other map app you can think of.

But why is it so popular?

### Popularity
1. It's quite accurate
2. It's a widespread standard
3. Read **2** again

Everyone uses this format for geographical data, what could be more convenient than downloading existing data and using it directly without having to convert it to other proprietary formats?

But why can we say that it's quite accurate?

### Precision
WGS-84 approximates the Earth using the [ellipsoid](https://en.wikipedia.org/wiki/Earth_ellipsoid), using measurements precise enough to achieve the approximation that was set as a target.

| ![Colosseum](/assets/img/blog/2024-02-19-gps-coordinates/wgs84-3d.png) | 
|:--:| 
| *WGS-84 Earth Ellipsoid* |

The geometric figure that approximates the Earth is constructed with almost absolute precision.
In the image you see above, the smallest axis (let us assume it's Z) measures `6356752.314245 meters` in this representation, which is a measurement that achieves a precision of `0.001 millimeters` ([Read more](https://en.wikipedia.org/wiki/World_Geodetic_System)).

You have to think of this projection as a 3D model of the Earth, and a coordinate is simply a point on the outer surface of the geometric figure.
Because accuracy is critical, using a 3D projection of the world instead of a 2D one is essential if we want to have accurate calculations when you manipulate GIS data, we cannot do otherwise.

## Coordinates are relative
Well, I'm italian, so let's take the most famous monument in the world as an example, the Colosseum in Rome, Italy.

| ![Colosseum](/assets/img/blog/2024-02-19-gps-coordinates/colosseum.png) | 
|:--:| 
| *Colosseum in WGS-84 coordinates* |

And, as we can see, it perfectly coincides with the satellite view, because it uses WGS-84 coordinates too.

| ![Colosseum Satellitar](/assets/img/blog/2024-02-19-gps-coordinates/colosseum-satellitar.jpg) | 
|:--:| 
| *Colosseum in satellite image* |

So since Google Maps uses the WGS-84 projection, we know that in this projection the coordinates of the Colosseum are `41.89026 North` and `12.49226 East`.

Here is a permanent Google Maps [URL](https://www.google.com/maps/place//@41.89026,12.49226,18z), perfectly centered as it should be.

Please note, these are WGS-84 coordinates, if we use another projection we may need to do a conversion between the two measurement systems. I have a China story about this that I will probably tell in the future....

Nel frattempo puoi usare questo simple converter [tool](https://epsg.io/transform) or you can do the same using a PostGIS function in a Postgres query: here you are the [PostGIS documentation](https://postgis.net/documentation/).

Good luck dealing with this!

```
000KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOkkkkkk
0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOkkkkk
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000OOOOOOOOOOOOOOOkkk
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0kkkkkkO0KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000OOOOOOOOOOOOOOOOkk
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK0Oxolllcccclox0KKKXXKKKKKKKKKKKKKKKKKKKKKKXXKKKKKKKKKKKKKKKK00000000000OOOOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKKKKKKK0kdooollllllccc::o0XXKXXKKXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKKKK0kl;',,:clcccccccc:,':xKXKXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKKXO:.      .',;;;;;:::;,':OXXXXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKK0c.   .';clc:;,'..''',,',oKXKXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKXO,   .:dxxxxkxoc,''',:cc;cOKKKKXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKK0dl:',loddxdolllcc::cc:;:::o0XKXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKKKKX0l;:::cdocccccclllc;'',:lkXXXXXXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOOO
KKKKKKKKKKKKKKKKKKKKKKKKKKK0occllodolodxxkdoc:;,'':oOXKXXXXXXXXXXXXXXXXXXXKKKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOkkk
KKKKKKKKKKKKKKKKKKKKKKKKKKXKxdxxxodo::ldxxolc::;'':x0XXXKKKKKKKKXXXXXXXXXKKKKKKKKKKKKKKKKKK00000000000OOOOOOOOOOOOOOkkkk
KKKKKKKKKKKKKKKKKKKKKKKKKKKKkoddolc;';lllollc:;;'.c0XKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK000000000000OOOOOOOOOOOOOOkkkk
KKKK00KKKKKKKKKKKKKKKKKKKKKKkllc:::;:c::clool:;,'.:0KKKKKKKKKXKKKKKKKKKKKKKKKKKKKKKKKKKK0000000000000OOOOOOOOOOOOOOOkkkk
dxxdddddddxxxxxxxxxxxxxxkkkOxlolccccclllodolc:,''..:kKKKKKKKXXKKKKKKKKKKKKKKKKKKKKKKKKKK00000000000OOOOOOOOOOOOOkkkkkkkk
ccllcccccclccllllllllllllllllllloooooodddlcll;'.. .'.;lxkOOOOOOOOOOO00OO00OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOkOOkkkkkkkkkkkkk
cccc::::cclllllllllllllooloollccoolooooc:;:lc,....;;. .,coollloooooooooooooooooolllllllcllllllllolllooollllcccccclllllcc
:::;;:::;;:::::ccc::ccc:::cc:c,.,cllc::;;;;;,....'..',..;lc;;;:cc:::::cccc::cc:::;;;;;;;;;;;;,;::;,,,;;;;,,,,:;;;;;;;;;;
:c::::cccccccccclcccccc::;,,;;'  '::::::;,,,'..';,..c;..,l:,;;::;,;;:cccllcccc:cc::::::::::::::::::;;::::;;;:c:;;;;;;;;;
::;;:cccccccclllllllc;,;:,,;:'.. 'ccc::;;;::,.....,c;...,lc::c:,,;;,,;lloooollccllllllllllllllllooooooooooooooodoooooooo
dxxxxxxxxxxxkkkkkkko;,cl;'','... 'lodolc:;,'.   .:oc;,'';:;::;,,c:'..'coxkkkxxxxxkkkxxxxkxxxxkxkkkkkkkkkkxxkxxxxxxxxxxxx
xxxxxxxxkkxxxkkkxoc'.;dl;;;'.:,...col:;.       .;l,...'cl:c:;;:ld:.. .:;:xOOkkkkkkkkkkxxxxxxxxxxxdddddddddddooddoooooooo
dddddddddooooooo:'...,;,,;,':l,..';:..'.......,lxo,...,ccc::c:cxkc,,,;:..'ldddddddddddddddddddddddooooooooooooollolloooo
:cccccccc::::;:,:l;':c;,;;..'. .,'.. .'.'c;...,oc'.',:cccccc:,;l;...;l;.. .:loooooooooooooooooolloooolllllllllllllllllll
oddddddddddddxoclc,:l:,;;'',:;.'c;.....'lc...:o:.  .,c:::::::ld:.. .;:';:...cxxxxxddxxdddddddddddddddooooooooollllllllll
xxddxxxxxxxxxxo;,:cc:;;;'..:o:,lxl'...,okl'.:dl;....''''''.'::,....';'..,;'..cxxxxxddddddxxxxdddddddddooooooooooooddoodd
xdxxxxxxxxxxxl,..,;';:c;..;oc.':,::'..'c;. .:l'............''.    .;;....''. .lkxxxxxxxxxxxxxxdddddddddddodoooooooollooo
dxxxkkkkkkkkxl:..,,,cc;..cxx:,;'..ld,.cc'.'cxo,..........':,..    ... ..  ....;xkkkkkkkkkkkkxxxxxxdddddddxxddddddddooddd
xkxxkxxkkkkko,,;,'.'::...cl,.....':c,cxc'.,ox:'...''.'...,,.  ...''....    .,;,ckkkkkkkOkkkkkkkkxxxxxxxxxxxxxxxxdxdddddd
xxdxxddxdxxo,.'l:';:::;,co;. ..'.....cl.  .:l'  ..::....':'    .;lcc'.    ..':;.ckkxxkkkkkkxkkxkxddxxxxxxxxddxxddddooddo
lollcclodol:...;;:l:;,;:cc:,',;;....,dl'...;:.....,;.   ':'    .'.'cc'..,,.. .::,lkOkxxkkkxxkkkkkxxxxdxxdddddxxddddddddo
;cc;;;:clc;,,..,:;:;;;::::;;;cc:;,'';c:'...........'. ..,:.   ..   'lo,.,:'.  'dd:cxxdodxxddxxxxxdxdoodxdddddddddxxddddd
,;:;,;;;::,.....;;;;;:::;;::ccc:,,,'.................  ...   ..    .:o; .;c;'.',cc;;clcclloooloolooc;;codoooollooooolloo
,,::,;;;,,;......;:;;;;;,;;:clc:;;;,,'...............   .    ..     ...  .;oc.. .,:;,;cc;:clcclc:cc:,,;clc::cccclllc:;:c
'',,',,,'';......,::;,',;::;,,,,,;;;;'................ ..    ..      ...  ..,'.  .co;':c,,;cc:c:,;::,,:::;,;;:c;;:;;,'';
..'''';,,:;. ....,::,,,;cc;,,''''',,... ...............'.  ...        ..    .::'..';:,,c:'';:;:,,:,'.';;;,,;;;;;;;,',;''
;;::;;cc;::'.....,::,;;;oxkkxxxxxdooc'. .................  ...         .    .;ol'.....';;,.',;:''::,',,;;,;,,,',;:;,;:,'
cllcclcc::,......;::;;,,,:looodddlcc;'.................... .... ..     ...   .';'..'...,;'.',;'.':l;',,;::,','.,;;:,;;::
```
> It ain't much, but it's honest work
