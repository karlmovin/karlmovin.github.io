import { useEffect, useState } from "react";

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

type Instant = {
  details: {
    air_temperature: number;
    wind_speed: number;
    wind_from_direction: number;
    wind_speed_of_gust: number;
    air_temperature_max?: number;
    air_temperature_min?: number;
    air_pressure_at_sea_level?: number;
    air_temperature_percentile_10?: number;
    air_temperature_percentile_90?: number;
    cloud_area_fraction?: number;
    cloud_area_fraction_high?: number;
    cloud_area_fraction_low?: number;
    cloud_area_fraction_medium?: number;
    dew_point_temperature?: number;
    fog_area_fraction?: number;
    relative_humidity?: number;
    ultraviolet_index_clear_sky?: number;
    wind_speed_percentile_10?: number;
    wind_speed_percentile_90?: number;
  };
};

type Forecast = {
  summary: {
    symbol_code: string;
    symbol_confidence: string;
  };
  details: {
    probability_of_precipitation: number;
    precipitation_amount?: number;
    precipitation_amount_max?: number;
    precipitation_amount_min?: number;
    probability_of_thunder?: number;
    air_temperature_max?: number;
    air_temperature_min?: number;
    air_temperature?: number;
  };
};

type TimeSerie = {
  time: string;
  data: {
    instant: Instant;
    next_1_hours: Forecast;
    next_6_hours: Forecast;
    next_12_hours: Forecast;
  };
};

function handleSymbol(symbol_code: string) {
  // console.log(symbol_code);
  if (symbol_code.includes("partly")) {
    return symbol_code.replace("partly", "partly_");
  }
  if (symbol_code.includes("fair")) {
    return symbol_code.replace("fair", "clear");
  }
  if (symbol_code.includes("rain")) {
    return "rainy";
  }
  if (symbol_code.includes("clearsky")) {
    return symbol_code.replace("clearsky", "clear");
  }
  return symbol_code;
}

function forecast(time: string, forecast: Forecast) {
  const {
    summary: { symbol_code, symbol_confidence },
    details: {
      air_temperature,
      air_temperature_max,
      air_temperature_min,
      probability_of_precipitation,
      precipitation_amount,
      precipitation_amount_min,
      precipitation_amount_max,
    },
  } = forecast;
  return (
    <div className="flex">
      {time}:
      <span className="material-symbols-outlined">
        {handleSymbol(symbol_code)}
      </span>
      {symbol_confidence ? `(${symbol_confidence})` : ""}
      {air_temperature
        ? `${air_temperature}°`
        : air_temperature_max && air_temperature_min
        ? `~${
            Math.floor(
              (air_temperature_min +
                (air_temperature_max - air_temperature_min) / 2) *
                10
            ) / 10
          }°`
        : ""}
      {air_temperature_min && air_temperature_max
        ? `(${air_temperature_min}° - ${air_temperature_max}°)`
        : ""}
      {precipitation_amount ||
      precipitation_amount_min ||
      precipitation_amount_max ? (
        <>
          <span className="material-symbols-outlined">umbrella</span>
          {precipitation_amount ||
            (precipitation_amount_min &&
              `${precipitation_amount} ${
                precipitation_amount_min && precipitation_amount_max
                  ? `(${precipitation_amount_min}-${precipitation_amount_max})`
                  : ""
              } mm`)}
          {`(${probability_of_precipitation}%)`}
        </>
      ) : null}
    </div>
  );
}

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

      const tomorrow = data.properties.timeseries.find(
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
              ...tomorrow.data.next_6_hours.details,
              ...tomorrow.data.next_12_hours.details,
            },
          },
        },
      });
    }

    if (location) {
      fetchWeather();
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
      <div className="absolute flex  w-full max-w-[30rem] flex-col rounded-br-xl bg-white bg-clip-border p-4 text-gray-700 ">
        <div className="p-4 mb-2">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Väder{" "}
            {new Intl.DateTimeFormat("se-SE", {
              weekday: "long",
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date())}{" "}
            (
            <a href="https://developer.yr.no/doc/GettingStarted/">powered by</a>{" "}
            <a
              href="https://www.yr.no/"
              className="bg-[#00A5D8] text-white rounded-full p-1"
            >
              YR
            </a>
            )
          </h5>
        </div>
        {weather && (
          <div>
            <div className="flex gap-4">
              <div className="flex gap-1">
                {new Intl.DateTimeFormat("se-SE", {
                  weekday: "long",
                  hour: "2-digit",
                  minute: "2-digit",
                }).format(new Date(weather.time))}
                :
                <span className="material-symbols-outlined">
                  device_thermostat
                </span>{" "}
                <div
                  className={
                    weather.now.details.air_temperature >= 0
                      ? "text-red-400"
                      : "text-blue-400"
                  }
                >
                  {weather.now.details.air_temperature}°
                </div>
              </div>
              <div className="flex gap-1">
                <span className="material-symbols-outlined">air</span>
                {weather.now.details.wind_speed} (
                {weather.now.details.wind_speed_of_gust}) m/s
                <span
                  className={"material-symbols-outlined"}
                  style={{
                    transform: `rotate(${weather.now.details.wind_from_direction}deg)`,
                  }}
                >
                  arrow_downward
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              {forecast("< 1h", weather.forecast.next_1_hours)}
              {forecast("< 6h", weather.forecast.next_6_hours)}
              {forecast("< 12h", weather.forecast.next_12_hours)}
              {forecast("Imorgon 9-15", weather.forecast.tomorrow)}
            </div>
          </div>
        )}
      </div>
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
