import _ from "lodash";
import React, { createContext, useEffect, useState } from "react";
import { getApi } from "../particles/api";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({ children }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      const response = await getApi({
        routes: "options",
      })
        .then((res) => {
          const groupedData = _.groupBy(res, (item) => item[1]);
          const options = _.mapValues(groupedData, (group) =>
            group.map((item) => ({ value: item[2], label: item[3] }))
          );
          const optionData = { ...options };
          setOptions(optionData);
        })
        .catch((err) => {
          setError(err);
        });
    };

    fetchOptions();
  }, []);

  return (
    <OptionsContext.Provider value={{ options, loading, error }}>
      {children}
    </OptionsContext.Provider>
  );
};
