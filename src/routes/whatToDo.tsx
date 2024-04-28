import { useEffect, useState } from "react";
import { Forecast, Instant, TimeSerie } from "./weather";

// https://api.met.no/weatherapi/documentation
// https://api.met.no/doc/ClientLibraries
// https://opendata.smhi.se/apidocs/metobs/index.html
// YRs ikoner: https://github.com/metno/weathericons/tree/main
// https://www.geonames.org/export/web-services.html
// https://nominatim.org/
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

const sporter: Record<
  string,
  {
    verb: string;
    månader: number[];
    plats: string[];
    krav?: string[];
    tidsåtgång: { min: number; max: number };
    tiderPåDygnet: { från: number; till: number };
    temperaturer: { max: number; min: number };
  }
> = {
  skridsko: {
    verb: "åka skridsko",
    månader: [10, 11, 12, 1, 2, 3],
    plats: ["på isbanan", "på sjön", "i skärgården"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 1, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 10 },
  },
  längdskidor: {
    verb: "åka längdskidor",
    månader: [12, 1, 2, 3],
    plats: ["i skidspåret"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 1, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 10 },
  },
  längdskidorIFjällen: {
    verb: "åka längdskidor",
    månader: [11, 12, 1, 2, 3, 4],
    plats: ["i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 1, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 10 },
  },
  utförsåkning: {
    verb: "åka utförsåkning",
    månader: [1, 2, 3, 4],
    plats: ["i skidbacken", "i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 2, max: 7 },
    tiderPåDygnet: { från: 8, till: 16 },
    temperaturer: { min: -20, max: 10 },
  },
  randonné: {
    verb: "åka randonné",
    månader: [1, 2, 3, 4],
    plats: ["i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 4, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 10 },
  },
  turskidor: {
    verb: "åka turskidor",
    månader: [1, 2, 3, 4],
    plats: ["i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 4, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 10 },
  },
  vandring: {
    verb: "vandra",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen", "i fjällen"],
    tidsåtgång: { min: 2, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  tältning: {
    verb: "tälta",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen", "i fjällen"],
    tidsåtgång: { min: 6, max: 10 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  orientering: {
    verb: "orientera",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen"],
    tidsåtgång: { min: 1, max: 4 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 0, max: 30 },
  },
  segling: {
    verb: "segla",
    månader: [5, 6, 7, 8, 9],
    plats: ["i skärgården"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 2, max: 8 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  utomhusklättring: {
    verb: "klättra utomhus",
    månader: [5, 6, 7, 8, 9],
    plats: ["vid klipporna"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 2, max: 8 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  inomhusklättring: {
    verb: "klättra inomhus",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i klätterhallen"],
    tidsåtgång: { min: 1, max: 4 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 40 },
  },
  mountainbike: {
    verb: "cykla mountainbike",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen", "i fjällen"],
    tidsåtgång: { min: 2, max: 8 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  landsvägscykel: {
    verb: "cykla landsvägscykel",
    månader: [5, 6, 7, 8, 9],
    plats: ["på vägen"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 2, max: 8 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  gravelbike: {
    verb: "cykla gravelbike",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["på vägen", "på grusvägar"],
    tidsåtgång: { min: 2, max: 8 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  löpning: {
    verb: "springa",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i skogen", "i parken"],
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 40 },
  },
  simning: {
    verb: "simma",
    månader: [6, 7, 8, 9],
    plats: ["i sjön", "i havet"],
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  inomhussimning: {
    verb: "simma",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i bassängen"],
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 40 },
  },
  kajak: {
    verb: "kajaka",
    månader: [5, 6, 7, 8, 9],
    plats: ["i skärgården", "i havet"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 2, max: 8 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  downhill: {
    verb: "köra downhill",
    månader: [5, 6, 7, 8, 9],
    plats: ["i skidbacken"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 2, max: 6 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
  inomhusträning: {
    verb: "träna inomhus",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["på gymmet", "hemma"],
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: -20, max: 40 },
  },
  utomhusträning: {
    verb: "träna utomhus",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i parken", "på altanen"],
    krav: ["fair", "cloudy", "clear"],
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    temperaturer: { min: 10, max: 30 },
  },
};

const intressen: Record<
  string,
  {
    verb: string;
    tidsåtgång: { min: number; max: number };
    tiderPåDygnet: { från: number; till: number };
    krav?: string[];
  }
> = {
  programmering: {
    verb: "programmera",
    tidsåtgång: { min: 1, max: 4 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  läsning: {
    verb: "läsa",
    tidsåtgång: { min: 1, max: 2 },
    tiderPåDygnet: { från: 8, till: 22 },
  },
  film: {
    verb: "titta på film/serier",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  brädspel: {
    verb: "spela brädspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    krav: ["fler än 1 personer"],
  },
  dataspel: {
    verb: "spela dataspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 19 },
  },
  keramik: {
    verb: "göra keramik",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  finsnickeri: {
    verb: "snickra",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  målning: {
    verb: "måla",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  video: {
    verb: "göra video",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 19 },
  },
  musik: {
    verb: "göra musik",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  rollspel: {
    verb: "spela rollspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
    krav: ["fler än 1 personer"],
  },
  rollspelsPrepp: {
    verb: "förbereda rollspel",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  diarama: {
    verb: "göra diarama",
    tidsåtgång: { min: 1, max: 3 },
    tiderPåDygnet: { från: 8, till: 20 },
  },
  sova: {
    verb: "gå och fucking lägga dig??",
    tidsåtgång: { min: 1, max: 9 },
    tiderPåDygnet: { från: 20, till: 24 + 8 },
  },
};

export default function WhatToDo() {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedIntresse, setSelectedIntresse] = useState("");
  const [location, setLocation] = useState({ lat: 59.334591, lon: 18.06324 });
  const [weather, setWeather] = useState<{
    time: string;
    now: Instant;
    forecast: {
      next_1_hours: Forecast;
      next_6_hours: Forecast;
      next_12_hours: Forecast;
      tomorrow: Forecast;
    };
  } | null>(null);
  const [textTvWeather, setTextTvWeather] = useState<
    | {
        num: string;
        title: string;
        content: string[];
        content_plain: string[];
        next_page: string;
        prev_page: string;
        date_updated_unix: number;
        permalink: string;
        id: string;
        breadcrumbs: [];
      }[]
    | null
  >(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    async function fetchTextTvWeather() {
      const response = await fetch(
        "https://api.texttv.nu/api/get/410?includePlainTextContent=1&app=kallesväder"
      );
      const data = await response.json();
      setTextTvWeather(data);
    }
    async function fetchWeather() {
      // https://developer.yr.no/doc/GettingStarted/
      // https://docs.api.met.no/doc/
      // https://api.met.no/weatherapi/locationforecast/2.0/documentation
      // https://api.met.no/doc/ForecastJSON
      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${location.lat}&lon=${location.lon}`
      );
      const data = await response.json();
      const today = new Date();

      const closestPassedHour: TimeSerie = data.properties.timeseries.find(
        ({ time }: { time: string }) =>
          new Date(time).getHours() === today.getHours()
      );
      const closestComingHour: TimeSerie = data.properties.timeseries.find(
        ({ time }: { time: string }) =>
          new Date(time).getHours() + 1 === today.getHours()
      );

      const tomorrow: TimeSerie = data.properties.timeseries.find(
        ({ time }: { time: string }) =>
          time >=
          new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
            9
          ).toISOString()
      );

      setWeather({
        time: closestPassedHour.time,
        now: closestPassedHour.data.instant,
        forecast: {
          next_1_hours: {
            summary: closestPassedHour.data.next_1_hours.summary,
            details: {
              ...closestPassedHour.data.instant.details,
              ...closestComingHour.data.next_1_hours.details,
              air_temperature_max:
                closestPassedHour.data.instant.details
                  .air_temperature_percentile_90,
              air_temperature_min:
                closestPassedHour.data.instant.details
                  .air_temperature_percentile_10,
            },
          },
          next_6_hours: closestPassedHour.data.next_6_hours,
          next_12_hours: closestPassedHour.data.next_12_hours,
          tomorrow: {
            summary: tomorrow.data.next_12_hours.summary,
            details: {
              ...tomorrow.data.next_1_hours.details,
              ...tomorrow.data.next_12_hours.details,
              ...tomorrow.data.next_6_hours.details,
            },
          },
        },
      });
    }

    if (location) {
      fetchWeather();
    }
    if (!textTvWeather) {
      fetchTextTvWeather();
    }
  }, [location]);

  const handleButtonClick = () => {
    const currentMonth = new Date().getMonth() + 1;
    const currentHour = new Date().getHours();
    if (!weather) return;
    const currentWeather = weather?.forecast.next_1_hours.summary.symbol_code;
    const currentTemperature = weather.now.details.air_temperature;

    const availableSports = Object.keys(sporter).filter((sport) => {
      const sportData = sport in sporter && sporter[sport];
      return (
        sportData &&
        sportData.månader.includes(currentMonth) &&
        (!sportData.krav || sportData.krav.includes(currentWeather)) &&
        (!sportData.temperaturer ||
          (currentTemperature >= sportData.temperaturer.min &&
            currentTemperature <= sportData.temperaturer.max)) &&
        currentHour >= sportData.tiderPåDygnet.från &&
        currentHour + sportData.tidsåtgång.min <= sportData.tiderPåDygnet.till
      );
    });

    const randomIndex = Math.floor(Math.random() * availableSports.length);
    const randomSport = availableSports[randomIndex];
    setSelectedSport(randomSport);

    const availableIntressen = Object.keys(intressen).filter((intresse) => {
      const intresseData = intresse in intressen ? intressen[intresse] : null;
      return (
        intresseData &&
        currentHour >= intresseData.tiderPåDygnet.från &&
        currentHour <= intresseData.tiderPåDygnet.till
      );
    });
    const randomIntresseIndex = Math.floor(
      Math.random() * availableIntressen.length
    );
    const randomIntresse = availableIntressen[randomIntresseIndex];
    setSelectedIntresse(randomIntresse);
  };

  return (
    <main>
      <section className="container max-w-screen-xl place-content-center flex h-dvh items-center flex-col">
        {selectedSport || selectedIntresse ? (
          <p className="text-2xl">
            Du kan till exempel
            {selectedSport
              ? ` ${sporter[selectedSport].verb} ${
                  sporter[selectedSport].plats[
                    Math.floor(
                      Math.random() * sporter[selectedSport].plats.length
                    )
                  ]
                }${
                  selectedIntresse
                    ? " eller så kan du kanske " +
                      intressen[selectedIntresse].verb +
                      "?"
                    : "?"
                }`
              : " " + intressen[selectedIntresse].verb + "?"}
          </p>
        ) : null}
        <button
          className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={handleButtonClick}
        >
          {!selectedSport && !selectedIntresse
            ? "Vad ska jag göra idag?"
            : "Nä tack, något annat?"}
        </button>
      </section>
    </main>
  );
}
