# Frigöra Verisure-hårdvara för andra tjänster

> Sammanställt 2026-06-29. Du har ägt systemet i >10 år, vilket är den bästa
> tänkbara utgångspunkten (se "Äganderätt" nedan).

## Kort svar

- **Ja, du har rätt att "frikoppla" (lösa loss) ditt larm gratis** eftersom du
  ägt det i mer än 5 år. Hårdvaran är då din egendom.
- **MEN** – "använda med andra tjänster" betyder i praktiken **Safeland**, inte
  Home Assistant eller egna öppna system. Sensorerna/kamerorna är proprietära
  och krypterade (AES-128, nycklar styrda av Verisures moln) och går **inte**
  att återanvända fristående i öppna system.
- **Viktig tidsfälla:** Den 28 maj 2024 ändrade Verisure villkoren så att
  larmet kräver aktivt abonnemang för att fungera. De som frikopplade/
  reaktiverade *före* det datumet kan köra utan abonnemang. För avtal som ditt
  (gammalt, pre-2024) bör äldre/bättre villkor gälla — men **bekräfta detta
  innan du säger upp**, annars finns risk att hårdvaran "bricka:s".

---

## Äganderätt – varför >10 år spelar roll

- Efter **5 års** innehav är det enligt Verisures (äldre) villkor och säljarnas
  löften **gratis att frikoppla** larmet, och det fungerar då som fristående
  system. Innan 5 år har friköp kostat ca **2 000–7 000 kr**.
- Du äger hårdvaran efter att abonnemanget upphört.
- Gamla avtal (före sommaren 2024) har ofta förmånligare villkor än dagens.
  **Läs ditt specifika avtal** och be Verisure bekräfta skriftligt vad som
  gäller för just dig.

---

## Väg 1 – Frikoppla via Verisure (lås upp hårdvaran)

Flera användare rapporterar att man kan **ringa Verisures support och be att få
systemet upplåst/frikopplat** så det fungerar utan deras larmcentral.

- Kostnad: rapporterat ca **300 kr**, löst över telefon (gäller äldre fall).
- Resultat: systemet fortsätter fungera **via Verisure-appen**, men utan
  koppling till larmcentralen.
- Steg:
  1. Ring Verisure kundtjänst.
  2. Be uttryckligen om att **frikoppla / låsa upp** larmet (du har ägt det
     >5 år → ska vara kostnadsfritt enligt äldre villkor).
  3. Begär **skriftlig bekräftelse** på att systemet fortsätter fungera
     fristående efter uppsägning.
  4. **Testa att larmet fungerar standalone innan** du avslutar abonnemanget —
     pga 2024 års firmware-lås.

---

## Väg 2 – Safeland Connect (mest realistiska "andra tjänsten")

Safeland är byggt specifikt för att ta över frikopplade Verisure-larm.

- **Safeland Larmcentral:** 1 490 kr/år (125 kr/mån) — certifierad larmcentral.
- **Safeland Connect:** 490 kr/år (49 kr/mån) — grannsamverkan.
- Steg:
  1. Beställ tjänsten på Safelands hemsida.
  2. Logga in i **Verisures kundportal** och lägg till **Safeland som
     larmmottagare**.
  3. Slutför installationen enligt anvisningarna.
  4. Välj Connect eller Connect Plus efter behov.
- Begränsning: Safeland får **inte bilder** från dina kamerasensorer (men du kan
  själv fortsätta se bilder i appen).
- **Yale Doorman**-låset kan behållas och anslutas till annat system via en ny
  integrationsmodul.

---

## Väg 3 – Home Assistant / öppna system (begränsat)

- Det finns en **Verisure-integration i Home Assistant**, men den är
  **molnbaserad** (Cloud Polling) och kräver ett aktivt Verisure-konto/
  abonnemang. Den styr larmet via Verisures moln — den **frigör inte**
  hårdvaran.
- **Sensorer och kameror går inte att återanvända fristående.** RF-kommunikationen
  är AES-128-krypterad och nycklarna skapas/lagras av Verisures infrastruktur.
  Reverse engineering finns dokumenterat i säkerhetsforskning men kräver
  labbåtkomst och är inte praktiskt genomförbart.
- Slutsats: Vill du ha ett **öppet** system rekommenderar erfarna användare att
  **byta ut** Verisure-delarna mot öppen hårdvara (t.ex. TP-Link / Z-Wave /
  Zigbee-sensorer i Home Assistant) snarare än att försöka integrera Verisure.

---

## Rekommenderad ordning

1. **Läs ditt avtal** + ring Verisure och be om skriftlig bekräftelse på
   frikoppling (gratis pga >5 år) **och** att systemet fungerar fristående efter
   uppsägning.
2. **Testa standalone-funktionen** medan abonnemanget fortfarande är aktivt.
3. Bestäm sedan:
   - Vill du ha **larmcentral/övervakning** → frikoppla + anslut **Safeland**.
   - Vill du bara ha **app-styrning** → frikoppla och kör via Verisure-appen.
   - Vill du ha **öppet/DIY-system** → behåll Yale Doorman, byt ut övriga
     sensorer mot öppen hårdvara i Home Assistant.

---

## Risker / fallgropar

- **2024 års firmware-lås:** Nyligen frikopplade system kan bli oanvändbara utan
  abonnemang. Bekräfta att DITT (gamla) avtal undantas innan du säger upp.
- **3 månaders uppsägningstid** är standard för svenska privatkunder.
- Spara alltid skriftlig bekräftelse vid all kontakt med Verisure.

---

## Källor

- [Home Assistant Community – Verisure policy change (kräver abonnemang)](https://community.home-assistant.io/t/verisure-alarm-systems-policy-change-will-make-all-its-services-stop-working-for-users-that-do-not-have-a-paid-subscription-the-cloud-strikes-again/755179)
- [Home Assistant – Verisure-integration (molnbaserad)](https://www.home-assistant.io/integrations/verisure/)
- [Swedroid forum – Använda Verisure utan abonnemang (frikoppling ~300 kr via support)](https://swedroid.se/forum/threads/anvanda-verisure-larmsystem-utan-abonnemang.202914/)
- [Safeland – Vanliga frågor: Frikoppla Verisure till Safeland](https://www.safeland.se/se/hjalpcenter/connect/vanliga-fragor-verisure/)
- [Safeland – Verisure fungerar med Safeland Connect](https://www.safeland.se/se/blogg/verisure-fungerar-med-safeland-connect/)
- [Safeland – Så gör du: Aktivera Safeland Connect för Verisure](https://www.safeland.se/se/hjalpcenter/sa-gor-du-aktivera-safeland-connect-for-verisure/)
- [Ring polisen – Så sparar du pengar med Safeland och Verisure](https://ringpolisen.se/safeland-verisure/)
- [Byggahus – Hur kopplar jag mitt Verisure-larm UTAN abonnemang?](https://www.byggahus.se/forum/threads/hur-kopplar-jag-mitt-verisure-larm-utan-abonnemang.289853/)
- [Byggahus – Verisure efter uppsägning, vad gäller?](https://www.byggahus.se/forum/threads/verisure-efter-uppsagning-vad-galler.483275/)
- [Reverse Engineer a Verisure Wireless Alarm (AES-128, molnstyrda nycklar)](https://stingingness20.rssing.com/chan-11227462/article19.html)
- [Verisure – Flytt, omteckna, avsluta (officiellt)](https://www.verisure.se/support/flytta-omteckna-avsluta)
