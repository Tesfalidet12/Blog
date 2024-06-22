import { useState, useEffect } from "react";
const useFetch = (url) => {
  let [data, SetData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Could not fetch with this resource");
          }
          return response.json();
        })
        .then((data) => {
          SetData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setError(error.message);
            setIsPending(false);
            console.log("Error:", error.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
