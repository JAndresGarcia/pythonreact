import React, { useEffect, useState } from "react";

const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (method === "GET") {
          response = await fetch(url);
        } else if (method === "POST") {
          response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
        }

        if (!response.ok) {
          throw new Error("Failed to get data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url, method, body]);

  return { data, error, loading };
};

export default useFetch;
