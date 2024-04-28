import parse from "html-react-parser";
import { useEffect, useState } from "react";

export type Instant = {
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

export type Forecast = {
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

export type TimeSerie = {
  time: string;
  data: {
    instant: Instant;
    next_1_hours: Forecast;
    next_6_hours: Forecast;
    next_12_hours: Forecast;
  };
};

export default function Weather() {
  const [location, setLocation] = useState({ lat: 59.334591, lon: 18.06324 });
  const [yrLoc, setYrLoc] = useState({
    category: { id: "CA01", name: "Capital" },
    country: { id: "SE", name: "Sweden" },
    elevation: 17,
    id: "2-2673730",
    isInOcean: false,
    name: "Stockholm",
    position: {
      lat: 59.32938,
      lon: 18.06871,
    },
    timeZone: "Europe/Stockholm",
    urlPath: "",
  });
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
      // https://www.yr.no/api/v0/locations/search?language=en&q=stockholm
      const yrLocation = await fetch(
        `https://www.yr.no/api/v0/locations/${location.lat},${location.lon}/`
      );
      const data = await yrLocation.json();
      setYrLoc(data);
    }
    if (location) {
      fetchWeather();
    }
    if (!textTvWeather) {
      fetchTextTvWeather();
    }
  }, [location]);

  return (
    <section className="container max-w-screen-xl ">
      <div className="flex w-full max-w-[50rem] flex-col rounded-br-xl bg-white bg-clip-border p-4 text-gray-700 ">
        <div className="p-4 mb-2">
          <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {"Väder idag "}
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
        <iframe
          height="400"
          width="100%"
          src={`https://www.yr.no/en/content/${yrLoc.id}/card.html`}
        />
        <iframe
          height="400"
          width="100%"
          src={`https://www.yr.no/en/content/${yrLoc.id}/meteogram.svg`}
        />
        <iframe
          height="400"
          width="100%"
          src={`https://www.yr.no/en/content/${yrLoc.id}/table.html`}
        />
      </div>
      <div className="flex w-full max-w-[30rem] flex-col rounded-br-xl bg-white bg-clip-border p-4 text-gray-700 ">
        {textTvWeather
          ? parse(
              textTvWeather[0].content_plain
                .find((content) => content.includes("för Stockholm"))
                ?.replaceAll("\n", "<br>")
                .split("Borlänge")[0] ?? "Inget väder"
            )
          : null}
      </div>
    </section>
  );
}
