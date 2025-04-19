// import { useEffect,useState } from "react";

// function calculateData(from,to){
//     const [amount,setAmount] = useState(0);

//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "o7wVRIv1YDQOvqqh7gioP5zYCs4f5ONJ");

//     var requestOptions = {
//       method: "GET",
//       redirect: "follow",
//       headers: myHeaders,
//     };
//       useEffect(()=>{
//          fetch(
//            `https://api.apilayer.com/currency_data/live?source=${from}&currencies=${to}`,
//            requestOptions
//          )
//            .then((response) => response.json())
//            .then((result) => {
             
//              const rate = result.quotes[`${from}${to}`];
//              console.log(rate)
//              setAmount(result.quotes[`${from}${to}`]);
//            })
//            .catch((error) => console.log("error", error));

//       },[from,to])
   
//       return amount;

// }

// export default calculateData;

const calculateRate = (from, to, rates) => {
  if (!rates[from] || !rates[to]) return 0;
  return rates[to] / rates[from];
};

export default calculateRate;
