// const URL="https://dogapi.dog/api/v2/facts";
// const URLS="https://meowfacts.herokuapp.com/?count=3";
// const factPara=document.querySelector("#fact");
// const getFacts=async()=>{
//     console.log("getting data.....");
//     let response= await fetch(URL);
//     console.log(response);//json format
//     let data= await response.json();
//     console.log(data);
// };
//ajax is asynchronus js & xml
//json is javascript object notation
//JSON() method- returns second promise that resolves with result of parsing the response body text as json (input is json ,output is js object) 
// function getFacts(){
//     fetch(URLS)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     })
// }
const countryList = {
  AUD: "AU",
  BGN: "BG",
  BRL: "BR",
  CAD: "CA",
  CHF: "CH",
  CNY: "CN",
  CZK: "CZ",
  DKK: "DK",
  EUR: "FR",
  GBP: "GB",
  HKD: "HK",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  ISK: "IS",
  JPY: "JP",
  KRW: "KR",
  MXN: "MX",
  MYR: "MY",
  NOK: "NO",
  NZD: "NZ",
  PHP: "PH",
  PLN: "PL",
  RON: "RO",
  SEK: "SE",
  SGD: "SG",
  THB: "TH",
  TRY: "TR",
  USD: "US",
  ZAR: "ZA",
};