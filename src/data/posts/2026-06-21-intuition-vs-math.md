---
title: Big maths
date: 2026-06-21
tags:
---

Ta två eller fler siffror, sammanfoga till ett tal, subtrahera med summan av talen. Resultatet är alltid delbart med 9.
Exempel: 
94 − 13 = 81 = 9 · 9, 
171 − 9 = 162 = 9 · 18, 
17329 − 22 = 1737 = 9 · 193…

Konstigt? Kanske för intuitionen, men inte matematiskt: 
För Σ (k=1..m) av nₖ·10⁽ᵏ⁻¹⁾ - Σ (k=1..m) av nₖ, det vill säga för heltalen n₁, n₂, … nₘ så är ekvationen n₁·10⁰ + n₂·10¹ + … + nₘ·10⁽ᵐ⁻¹⁾ − (n₁+n₂+…+nₘ).

Båda summorna löper över samma k, så para ihop dem term för term. Siffran nₖ som dras av hamnar bredvid samma siffra multiplicerad med sin tiopotens:
(n₁·10⁰ − n₁) + (n₂·10¹ − n₂) + … + (nₘ·10⁽ᵐ⁻¹⁾ − nₘ)

I varje parentes är nₖ en gemensam faktor, så bryt ut den (distributiva lagen): nₖ·10⁽ᵏ⁻¹⁾ − nₖ = nₖ·(10⁽ᵏ⁻¹⁾ − 1). Då hamnar tiopotensen och ettan i samma parentes:
n₁·(10⁰−1) + n₂·(10¹−1) + … + nₘ·(10⁽ᵐ⁻¹⁾−1)

Faktorn 10⁽ᵏ⁻¹⁾−1 är alltid 0, 9, 99, 999, … alltså alltid delbar med 9. Och då är hela summan delbar med 9.

Ointuitivt men så simpelt matematiskt.