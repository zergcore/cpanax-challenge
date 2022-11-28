import { useEffect,useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts]=useState([]);
	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API); //request
            setProducts(response.data.products);
        }
        fetchData();
    }, []);
  return products;
}

export default useGetProducts