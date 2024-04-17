import React , {useEffect,useState} from 'react'
import { useResultContext } from '../context/ResultContextProvider';
import { useDebounce } from 'use-debounce';
import { Links } from './Links';
import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
export const Search = () => {
    const navigate = useNavigate();
    const [text , setText] = useState('');
    const { setSearchTerm} = useResultContext();
    // const [debouncedValue] = useDebounce(text,300);
    function clickHandler(){
        setSearchTerm(text)
        // console.log(text);
        navigate("/search");
    }
    

  return (
    <div>
        <div className=' sm:ml-48  sm:-mt-20 flex flex-wrap ml-3'>
            <input value={text} type='text' className='sm:w-96 w-70 h-10 dark:bg-gray-500 border
            dark:text-white font-semibold rounded-full outline-none shadow-sm p-6 text-black hover:shadow-lg
            mb-5' 
            placeholder='Search Google ' 
            onChange={(e)=>setText(e.target.value)}/>
            {
                text && (
                    <button type='button' className='
                 relative -top-2 right-9 text-2xl text-gray-500 z-20
                  dark:text-gray-50' 
                    onClick={()=>clickHandler()}
                    ><FaSearch />
                    </button>
                )
            } 
        </div>
        <Links/>
    </div>
  )
}
