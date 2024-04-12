import React, { useId } from "react";
import { v4 as uuidv4 } from "uuid";

const Country = (props) => {
    const handleremovebtn = (name) =>{
        props.onremoveCountry(name);
    }
    

  return (
    <div className="grid grid-cols-3 gap-10  m-5">
      {props.country.map((country) => {
        const countryName = { country, id: uuidv4() };
        const { name, flags, capital, population, area } = countryName.country;
        const nameis = name.common;
        const flagis = flags.png;
        const populationis = population;
        const areais = area;
        return (
          <div key={countryName.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
              <img
                className="rounded-t-lg w-full"
                src={flagis}
                alt=""
              />
            </a>

            <div class="p-5">
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Name: </strong>{nameis}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Population: </strong>{populationis}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Capital: </strong>
                {Array.isArray(capital) ? capital.join(", ") : capital}
              </p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <strong>Area: </strong>{areais}
              </p>

              <button onClick={()=>handleremovebtn(name.common)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Delete Country
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
