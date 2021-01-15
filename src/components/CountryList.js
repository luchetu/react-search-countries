import React from 'react';

const CountryList = ({countries}) => {

  return (
    <>
    { countries.map((data,index) => {
        if (data) {
          return (
            <div key={index}>
              <h1>{data.name}</h1>
	         </div>
    	   )
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList