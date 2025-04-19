// import {useEffect, useState} from "react"
// function useCurrencyInfo(){
//     const [data, setData] = useState({})
//    var myHeaders = new Headers();
//    myHeaders.append("apikey", "o7wVRIv1YDQOvqqh7gioP5zYCs4f5ONJ");
//    var results = {};
//    var requestOptions = {
//      method: "GET",
//      redirect: "follow",
//      headers: myHeaders,
//    };
//     useEffect(() => {
//         // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         // .then((res) => res.json())
//         // .then((res) => setData(res[currency]))

//     fetch("https://api.apilayer.com/currency_data/list", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {
//         const results = { ...result };
//         setData(results.currencies);
//       })
//       .catch((error) => console.log("error", error));
//     }, [])
//    // console.log(data);
//     return data
// }


// export default useCurrencyInfo;

//9IxzmEcEp4oKBXdCEiH7XIzDZ9ZJG0uj



const currencyData = {
  usd: 1,
  eur: 0.92,
  gbp: 0.79,
  inr: 83.15,
  jpy: 154.3,
  aud: 1.51,
  cad: 1.37,
  chf: 0.91,
  cny: 7.23,
  nzd: 1.63,
  sgd: 1.35,
  zar: 18.6,
  brl: 5.12,
  mxn: 17.02,
  rub: 92.18,
  krw: 1364.12,
  hkd: 7.83,
  sek: 10.68,
  nok: 11.05,
  dkk: 6.86,
  pln: 3.98,
  thb: 36.75,
  idr: 15950.0,
  myr: 4.75,
  php: 56.35,
  vnd: 24800.0,
  egp: 48.15,
  aed: 3.67,
  sar: 3.75,
  try: 32.35,
  twd: 31.25,
  huf: 352.1,
  czk: 23.0,
  ils: 3.65,
  ars: 880.0,
  clp: 960.15,
  cop: 3925.0,
  pkr: 278.45,
  bdt: 110.35,
  lkr: 300.1,
  mad: 10.0,
  kwd: 0.31,
  qar: 3.64,
  bhd: 0.38,
  omr: 0.38,
  ngn: 1400.0,
  kes: 130.45,
};

const useCurrencyInfo = () => {
  return currencyData;
};

export default useCurrencyInfo;
