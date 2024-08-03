---
layout: post
title: Forex, From Zero to IDK
tags: forex easy
---

```
Foreign  -> For
Exchange -> Ex
Market
```

Forex, aka realtime currency exchange, what is it and how does it work?
> Is it physically a market?

### Market
As in any financial market, each currency pair has sellers and buyers (e.g. if the pair is `EUR/USD`, there is
someone who wants to `sell EUR` in exchange for USD and someone who wants to `buy EUR` using USD).

Taking the EUR/USD exchange rate as an example, we therefore have two prices at any given time, the `Bid` Price (the maximum
USD amount that any entity is willing to pay for EUR in the given moment) and the `Ask` Price (the minimum USD amount that
any entity is willing to receive to sell EUR in the given moment).
When the prices of the buyer and of the seller coincide, the actual financial transaction on the broker takes place.

![Bid Ask example](/assets/img/blog/2024-08-03-forex-midmarket/forex-bid-ask.png)

#### Midmarket
At any given time, the two price values may have some difference, called `spread`, and to try to return the most
representative value, most of the currency conversion services decided to show the midmarket rate to the user, which
is nothing but the average between the Bid price and the Ask price.

| Bid Price | Ask Price | Midmarket Rate |
|:---------:|:---------:|:--------------:|
|  1.09127  |  1.09135  |    1.09131     |

| ![Midmarket example](/assets/img/blog/2024-08-03-forex-midmarket/midmarket.png) | 
|:-------------------------------------------------------------------------------:| 
|                    *Examples of the use of midmarket rates*                     |

### Decentralization
The forex market is decentralized and therefore is `open 24 hours` a day, because there is no single source that returns all
current prices on worlwide currency exchange, but instead there are `many` brokers each independent of the other.
It is so by definition: each bank, institution or currency exchange is in fact `independent` of the others and has its
own currencies.

The broker can certainly help match supply and demand, but it isn't `strictly` essential.
Potentially if one person has tons of euro banknotes and another has a suitcase full of dollars, they can arrange
with each other for a physical exchange by hand and no one will know anything.

This concept can be summarized in the term [Over The Counter (OTC)](https://en.wikipedia.org/wiki/Over-the-counter_(finance)),
an unregulated market where anyone can participate in it, unlike for examples shares of companies (e.g. `Apple`, `Microsoft`)
that must necessarily be listed on a stock exchange such as the `NYSE` (aka Wall Street), `NASDAQ`, etc.

If you are one of the previous websites that needs to accurately return the current currency exchange value, for example,
it isn't enough to take the midmarket rate exclusively from one source and trust it blindly; to get a value as accurate
as possible, it's necessary to aggregate several midmarket rate values into one, making a weighted average of them.

| Midmarket Rate Provider 1 | Midmarket Rate Provider 2 | Average Midmarket Rate |
|:-------------------------:|:-------------------------:|:----------------------:|
|          1.79075          |          1.79077          |        1.79076         |
|           1.79            |           1.791           |         1.7905         |

### Outliers filtering
Not all currency conversion values taken from different providers are equally reliable.
If a broker has a low volume of transactions at a certain time, for example, it is very likely that its value
will deviate from what the actual forex market prices are.

If we want to get an accurate result, we cannot afford to include these prices that don't meet current
market values (`outliers`) and we must therefore do what we can to identify and eliminate them from the
calculations as soon as possible, using all the data available (not only the raw midmarket rates, but also something
like the latest rate update time, source reliability, etc.).

| Midmarket Rate Provider 1 | Midmarket Rate Provider 2 |  Midmarket Rate Provider 3  | Average Midmarket Rate |
|:-------------------------:|:-------------------------:|:---------------------------:|:----------------------:|
|           1.79            |          1.7905           |          ~~1.803~~          |        1.79025         |
