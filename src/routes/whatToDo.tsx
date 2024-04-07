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
    temperaturer: { max: number; min: number };
  }
> = {
  skridsko: {
    verb: "åka skridsko",
    månader: [10, 11, 12, 1, 2, 3, 4],
    plats: ["på isbanan", "på sjön", "i skärgården"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: -20, max: 10 },
  },
  längdskidor: {
    verb: "åka längdskidor",
    månader: [11, 12, 1, 2, 3, 4],
    plats: ["i skidspåret", "i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: -20, max: 10 },
  },
  utförsåkning: {
    verb: "åka utförsåkning",
    månader: [1, 2, 3, 4],
    plats: ["i skidbacken", "i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: -20, max: 10 },
  },
  randonné: {
    verb: "åka randonné",
    månader: [1, 2, 3, 4],
    plats: ["i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: -20, max: 10 },
  },
  turskidor: {
    verb: "åka turskidor",
    månader: [1, 2, 3, 4],
    plats: ["i fjällen"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: -20, max: 10 },
  },
  vandring: {
    verb: "vandra",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen", "i fjällen"],
    temperaturer: { min: 10, max: 30 },
  },
  tältning: {
    verb: "tälta",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen", "i fjällen"],
    temperaturer: { min: 10, max: 30 },
  },
  orientering: {
    verb: "orientera",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen"],
    temperaturer: { min: 0, max: 30 },
  },
  segling: {
    verb: "segla",
    månader: [5, 6, 7, 8, 9],
    plats: ["i skärgården"],
    temperaturer: { min: 10, max: 30 },
  },
  utomhusklättring: {
    verb: "klättra utomhus",
    månader: [5, 6, 7, 8, 9],
    plats: ["vid klipporna"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: 10, max: 30 },
  },
  inomhusklättring: {
    verb: "klättra inomhus",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i klätterhallen"],
    temperaturer: { min: -20, max: 40 },
  },
  mountainbike: {
    verb: "cykla mountainbike",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["i skogen", "i fjällen"],
    temperaturer: { min: 10, max: 30 },
  },
  landsvägscykel: {
    verb: "cykla landsvägscykel",
    månader: [5, 6, 7, 8, 9],
    plats: ["på vägen"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: 10, max: 30 },
  },
  gravelbike: {
    verb: "cykla gravelbike",
    månader: [4, 5, 6, 7, 8, 9, 10],
    plats: ["på vägen", "på grusvägar"],
    temperaturer: { min: 10, max: 30 },
  },
  löpning: {
    verb: "springa",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i skogen", "i parken"],
    temperaturer: { min: -20, max: 40 },
  },
  simning: {
    verb: "simma",
    månader: [5, 6, 7, 8, 9],
    plats: ["i sjön", "i havet"],
    temperaturer: { min: 10, max: 30 },
  },
  inomhussimning: {
    verb: "simma",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i poolen"],
    temperaturer: { min: -20, max: 40 },
  },
  kajak: {
    verb: "kajaka",
    månader: [5, 6, 7, 8, 9],
    plats: ["i skärgården", "i havet"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: 10, max: 30 },
  },
  downhill: {
    verb: "köra downhill",
    månader: [5, 6, 7, 8, 9],
    plats: ["i skidbacken"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: 10, max: 30 },
  },
  inomhusträning: {
    verb: "träna inomhus",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["på gymmet", "hemma"],
    temperaturer: { min: -20, max: 40 },
  },
  utomhusträning: {
    verb: "träna utomhus",
    månader: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    plats: ["i parken", "på altanen"],
    krav: ["fair", "cloudy", "clear"],
    temperaturer: { min: 10, max: 30 },
  },
};

type Instant = {
  air_temperature: number;
  wind_speed: number;
  wind_from_direction: number;
  wind_speed_of_gust: number;
  air_temperature_max?: number;
  air_temperature_min?: number;
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
  if (symbol_code === "sky_night" || symbol_code === "clearsky_night") {
    return "clear_night";
  }
  return symbol_code;
}

function forecast(time: string, forecast: Forecast) {
  const {
    air_temperature_max,
    air_temperature_min,
    probability_of_precipitation,
    precipitation_amount,
    precipitation_amount_min,
    precipitation_amount_max,
  } = forecast.details;
  return (
    <div className="flex">
      {time}:
      <span className="material-symbols-outlined">
        {handleSymbol(forecast.summary.symbol_code)}
      </span>
      {air_temperature_min
        ? `${air_temperature_min}° - ${air_temperature_max}°`
        : ""}
      {precipitation_amount || precipitation_amount_min ? (
        <>
          <span className="material-symbols-outlined">umbrella</span>
          {precipitation_amount &&
            `${precipitation_amount} ${
              precipitation_amount_min && precipitation_amount_max
                ? `(${precipitation_amount_min}-${precipitation_amount_max})`
                : ""
            } mm`}
          {`(${probability_of_precipitation}%)`}
        </>
      ) : null}
    </div>
  );
}

export default function WhatToDo() {
  const [selectedSport, setSelectedSport] = useState("");
  const [location, setLocation] = useState({ lat: 59.334591, lon: 18.06324 });
  const [weather, setWeather] = useState<{
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

      const {
        data: {
          instant: {
            details: {
              air_temperature,
              air_temperature_max,
              air_temperature_min,
              wind_speed,
              wind_from_direction,
              wind_speed_of_gust,
            },
          },
          next_1_hours,
          next_6_hours,
          next_12_hours,
        },
      } = data.properties.timeseries.find(
        ({ time }: { time: string }) => time >= today.toISOString()
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
        now: {
          air_temperature,
          air_temperature_max,
          air_temperature_min,
          wind_speed,
          wind_from_direction,
          wind_speed_of_gust,
        },
        forecast: {
          next_1_hours,
          next_6_hours,
          next_12_hours,
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
    if (!weather) return;
    const currentWeather = weather?.forecast.next_1_hours.summary.symbol_code;
    const currentTemperature = weather.now.air_temperature;

    const availableSports = Object.keys(sporter).filter((sport) => {
      const sportData = sport in sporter && sporter[sport];
      return (
        sportData &&
        sportData.månader.includes(currentMonth) &&
        (!sportData.krav || sportData.krav.includes(currentWeather)) &&
        (!sportData.temperaturer ||
          (currentTemperature >= sportData.temperaturer.min &&
            currentTemperature <= sportData.temperaturer.max))
      );
    });

    const randomIndex = Math.floor(Math.random() * availableSports.length);
    const randomSport = availableSports[randomIndex];
    setSelectedSport(randomSport);
  };

  return (
    <section className="container max-w-screen-xl place-content-center flex h-dvh items-center">
      {weather && (
        <div className="text-center">
          <div>
            {new Intl.DateTimeFormat("se-SE", {
              weekday: "long",
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date())}
          </div>
          <div className="flex gap-4 justify-center">
            <div className="flex gap-1">
              <span className="material-symbols-outlined">
                device_thermostat
              </span>{" "}
              <div
                className={
                  weather.now.air_temperature >= 0
                    ? "text-red-400"
                    : "text-blue-400"
                }
              >
                {weather.now.air_temperature}°
              </div>
            </div>
            <div className="flex gap-1">
              <span className="material-symbols-outlined">air</span>
              {weather.now.wind_speed} ({weather.now.wind_speed_of_gust}) m/s
              <span
                className={"material-symbols-outlined"}
                style={{
                  transform: `rotate(${weather.now.wind_from_direction}deg)`,
                }}
              >
                arrow_downward
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            {forecast("Närmsta timme", weather.forecast.next_1_hours)}
            {forecast("Kommande 6 timmar", weather.forecast.next_6_hours)}
            {forecast("Kommande 12 timmar", weather.forecast.next_12_hours)}
            {forecast("Imorgon", weather.forecast.tomorrow)}
          </div>
          <button
            className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={handleButtonClick}
          >
            {!selectedSport
              ? "Vad ska jag göra idag?"
              : "Nä tack, något annat?"}
          </button>
          {selectedSport && (
            <p>
              Du kan till exempel {sporter[selectedSport].verb}{" "}
              {
                sporter[selectedSport].plats[
                  Math.floor(
                    Math.random() * sporter[selectedSport].plats.length
                  )
                ]
              }
              !
            </p>
          )}
        </div>
      )}
    </section>
  );
}
