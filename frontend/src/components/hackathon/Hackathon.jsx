import React,{useState} from 'react'
import SearchBar from '../search/SearchBar';
import Filter from '../filter/Filter';
import Card from '..//Card';

function Hackathon() {
    
    const [searchResults, setSearchResults] = useState([]);
    const [filteredLocation,setFilteredLocation] = useState('');


    const handleSearch = (query) => {
        // perform search logi here (fetch hackathon matching the query)
        console.log('Search Query: ',query);
  
        setSearchResults([...searchResults, query])
      }
  
      const hadleFilter = (location) => {
        // Perform filter logic here (e.g., filter hackathons by location)
      console.log('Filtering hackathons by location:', location);
      // Update filtered location state
      setFilteredLocation(location);
      }


  return (
    <div>
        {/* top */}
        <div className='w-full flex items-center mt-5 justify-between '>
            <SearchBar onSearch={handleSearch}/>

            <Filter onFilter={hadleFilter} />
          </div>

          {/* bottom all hackathon list*/}
          <div className='w-full h-[1px] mt-10 mb-7 bg-black '></div>
          <div className='flex flex-wrap bg-yellow-10'>

            <div className='mx-3 my-3 w-[300px] border bg-blue-200 h-[150px] rounded-md shadow-sm hover:shadow-md transition-all 200ms ease'></div>
            <div className='mx-3 my-3 w-[300px] border bg-blue-200 h-[150px] rounded-md shadow-sm hover:shadow-md transition-all 200ms ease'></div>
            <div className='mx-3 my-3 w-[300px] border bg-blue-200 h-[150px] rounded-md shadow-sm hover:shadow-md transition-all 200ms ease'></div>

            <div></div>
            {
              searchResults.map((result,id) => (
                <Card id={id} result={result}/>
              ))
            }
            {
              filteredLocation.length > 0 && (
                filteredLocation.map((result,id) => (
                  <Card id={id} result={result}/>
                ))
              )
            }
          </div>
    </div>
  )
}

export default Hackathon