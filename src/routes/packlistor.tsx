import { useState } from "react";
import { packlistdata } from "../data/packlistor";

export default function Packlistor() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    packlistdata[0].title
  );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <main className="flex flex-col gap-8 container max-w-screen-xl pb-8">
      <div className="relative h-10 w-72 min-w-[200px]">
        <select
          value={selectedCategory || ""}
          onChange={handleCategoryChange}
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        >
          {/* <option value={""}>Alla listor</option> */}
          {packlistdata.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
      </div>
      {packlistdata
        .filter(
          (category) =>
            selectedCategory === "" || category.title === selectedCategory
        )
        .map(({ title, data }) => (
          <section id={title} key={title} className="flex flex-col">
            <p className="text-4xl self-center text-center pb-2 bg-white w-full">
              {title}
            </p>
            <div className="mt-2 gap-2 flex flex-row flex-wrap">
              {data.map(({ title: dataTitle, subtitle, items }) => (
                <div key={dataTitle} className="flex flex-col">
                  <p className="px-2 text-xl self-center font-medium text-gray-700 bg-white shadow-md rounded-t-xl bg-clip-border">
                    {dataTitle}
                  </p>
                  {subtitle && (
                    <p className="text-sm p-2 whitespace-pre-line text-gray-700 bg-white shadow-md  bg-clip-border">
                      {subtitle}
                    </p>
                  )}
                  {items && (
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-b-xl bg-clip-border">
                      <div className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 divide-y">
                        {items?.map((item) => (
                          <div
                            key={item}
                            role="button"
                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                          >
                            <label
                              htmlFor={`vertical-list-${item}`}
                              className="flex items-center w-full px-3 py-2 cursor-pointer"
                            >
                              <div className="grid mr-3 place-items-center">
                                <div className="inline-flex items-center">
                                  <label
                                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                                    htmlFor={`vertical-list-${item}`}
                                  >
                                    <input
                                      id={`vertical-list-${item}`}
                                      type="checkbox"
                                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                    />
                                    <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        ></path>
                                      </svg>
                                    </span>
                                  </label>
                                </div>
                              </div>
                              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {item}
                              </p>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
    </main>
  );
}
