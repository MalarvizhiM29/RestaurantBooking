import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const baseUrl = "http://localhost:2020/api";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseUrl+url);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url,baseUrl]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseUrl+url);
      setData(res.data);
    } catch (err) {
      console.error("Error refetching data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
