import { useEffect, useState } from "react";

const useFetch = (url, method = "get") => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    fetch(url, { method })
      .then((response) => response.json())
      .then((jsonData) =>
        setState({
          data: jsonData,
          loading: false,
        })
      );
  }, [url, method]);

  return state;
};

export default useFetch;
