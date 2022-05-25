import { useEffect, useState } from "react";
import axios from "axios";

/* const axios = require('axios').default; */

const useGetData = (url) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    getData();
    return (
      setState({
        data: [],
        loading: true,
        error: null,
      })
    )
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(url,{timeout: 3000});
/*       console.log(url);
      console.log(res.data); */
      setState({
        data: res.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      setState({
        data: [],
        error: error,
        loading: false,
      });
    }
  }
  return [state.data, state.loading, state.error];
};

export default useGetData;