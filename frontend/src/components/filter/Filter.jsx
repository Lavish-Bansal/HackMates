import React,{useState} from 'react'
import "./Filter.css"

function Filter({onFilter }) {
    
  const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationChange = (event) => {
        const location = event.target.value;
        setSelectedLocation(location);
        onFilter(location);// Call the parent component's onFilter function with the selected location
    }

  return (
    <div>
        <label htmlFor="locationFilter" className='text-[18px] text-black font-semi-bold' >Filter :</label>
        <select className='text-black rounded-md py-1 px-2 ml-1' id="locationFilter" value={selectedLocation} onChange={handleLocationChange}>
            <option className='text-black' value="">All location</option>
            <option value="Delhi">Delhi</option>
            <option value="GreaterNoida">Greater Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Noida">Noida</option>
        </select>
    </div>
  )
}

export default Filter