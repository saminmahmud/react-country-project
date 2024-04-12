import { useState, useEffect, useLayoutEffect } from 'react'
import Axios from 'axios';

import './App.css'
import Country from './components/Country';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [country, setCountry] = useState ([]);
  const [filteredCountries, setFilteredCountries] = useState(country);
  const [isloading, setisloading] = useState (false);
  const [iserror, setiserror] = useState ("");
  const [inputtext, setinputtext] = useState("");

  const Fetchdata = async () => {
    setisloading(true);
    try{
      await Axios.get(url).then((res)=>{
        setCountry(res.data);
        setFilteredCountries(res.data);
        // console.log(res.data);
        setisloading(false);
      });
    }catch(error){
      setiserror(error.message);
    }
  }

  useEffect (() =>{
    Fetchdata();
  },[]);
  
  const handleremovebtn = (name) =>{
    const filtered = country.filter((country) => country.name.common !== name);
    setCountry(filtered)
    setFilteredCountries(filtered);
    handleInputChange(e);
    // console.log("id is",name);
}

  const handleInputChange = (e) => {
    setinputtext(e.target.value);
  };

  useEffect (() =>{
    // console.log(inputtext);
    let value = inputtext.toLowerCase();
    const newCountries = country.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    } )
    setFilteredCountries(newCountries);
  },[inputtext, country]);


  return (
    <>
      <h1 className=' m-2 font-bold flex justify-center' >Country App</h1>
      <hr className='mb-5' />
      {
        !isloading && <div className='text-center' > <input value={inputtext} className=' text-black rounded-sm bg-orange-100 p-1' onChange={handleInputChange}  type="text" placeholder='search here...' /></div>
      }
      { isloading && <h1 className=' m-2 font-bold flex justify-center'>Loading ...</h1> }
      { iserror && <h1 className=' m-2 font-bold flex justify-center'>{iserror}</h1> }
      { country && <Country country={filteredCountries} onremoveCountry={handleremovebtn}/> }

    </>
  )
}

export default App
