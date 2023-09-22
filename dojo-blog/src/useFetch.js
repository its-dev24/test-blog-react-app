import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data_state, setData] = useState(null);

  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch data from end point");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((er) => {
        if (er.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setError(er.message);

          setIsPending(false);
        }
      });
  }, [url]);

  return { data_state, isPending, error };
};

export default useFetch;
