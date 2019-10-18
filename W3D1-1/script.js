// 1. Gebruik ping commando in je terminal om het IP adres te vinden van theguardian.com
ping guardian.com => [151.101.129.111]

//2. Gebruik het tracert commando om te zien hoeveel "hops" je neemt om verbinding te maken met theguardian.com

1     1 ms     7 ms     1 ms  192.168.1.1
2     2 ms     3 ms     2 ms  fritz.box [192.168.178.1]
3     7 ms     8 ms    20 ms  lo0.dr13.d12.xs4all.net [194.109.5.212]
4    11 ms     7 ms     6 ms  0.ae23.xr3.3d12.xs4all.net [194.109.7.53]
5    17 ms     7 ms     7 ms  0.et-7-1-0.xr1.sara.xs4all.net [194.109.5.3]
6     7 ms     7 ms    13 ms  er1.ams1.nl.above.net [80.249.208.122]
7    98 ms    94 ms    95 ms  ae3.cs1.ams10.nl.eth.zayo.com [64.125.31.104]
8    97 ms   104 ms    94 ms  ae2.cs1.lhr15.uk.eth.zayo.com [64.125.29.17]
9   116 ms    96 ms    95 ms  ae0.cs1.lhr11.uk.eth.zayo.com [64.125.29.118]
10    98 ms     *       95 ms  ae5.cs1.lga5.us.eth.zayo.com [64.125.29.126]
11     *      100 ms     *     ae3.cs3.ord2.us.eth.zayo.com [64.125.29.209]
12    95 ms    94 ms    95 ms  ae10.er6.ord7.us.zip.zayo.com [64.125.28.177]
13   102 ms   101 ms   101 ms  64.124.184.194.IPYX-249421-006-ZYO.zip.zayo.com [64.124.184.194]
14    95 ms    94 ms    96 ms  144.121.109.122.lightower.net [144.121.109.122]
15   104 ms   102 ms   101 ms  160.72.248.35.lightower.net [160.72.248.35]
16   103 ms   102 ms   102 ms  unassigned.lightower.net [104.207.214.31]
17   106 ms   102 ms   102 ms  151.181.38.106
18     *        *        *     Request timed out.
19     *        *        *     Request timed out.
20     *        *        *     Request timed out.
21     *        *        *     Request timed out.
22     *        *        *     Request timed out.
23     *        *        *     Request timed out.
24     *        *        *     Request timed out.
25     *        *        *     Request timed out.


//3. Op basis van een URL kan je ook zelf de DNS opzoeken van websites. Gebruik [http://whois.domaintools.com](http://whois.domaintools.com/)/ om de DNS op te zoeken van:
//- [Google.com](http://google.com)

NS1.GOOGLE.COM (has 12,372 domains)
NS2.GOOGLE.COM (has 12,372 domains)
NS3.GOOGLE.COM (has 12,372 domains)
NS4.GOOGLE.COM (has 12,372 domains)
//- [Wincacademy.nl](http://wincacademy.nl) (kan je vinden via welke partij wij hosting doen)

NS0.TRANSIP.NET (has 632,416 domains)
NS1.TRANSIP.NL (has 144,680 domains)
NS2.TRANSIP.EU (has 3,663 domains)

//4. Zoek je eigen IP adres op 😃:
