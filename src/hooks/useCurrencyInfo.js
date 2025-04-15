import {useEffect, useState} from "react"


function useCurrencyInfo(){
    const [data, setData] = useState({})
   var myHeaders = new Headers();
   myHeaders.append("apikey", "o7wVRIv1YDQOvqqh7gioP5zYCs4f5ONJ");
   var results = {};
   var requestOptions = {
     method: "GET",
     redirect: "follow",
     headers: myHeaders,
   };
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // .then((res) => res.json())
        // .then((res) => setData(res[currency]))

    fetch("https://api.apilayer.com/currency_data/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const results = { ...result };
        setData(results.currencies);
      })
      .catch((error) => console.log("error", error));
    }, [])
   // console.log(data);
    return data
}


export default useCurrencyInfo;

//9IxzmEcEp4oKBXdCEiH7XIzDZ9ZJG0uj