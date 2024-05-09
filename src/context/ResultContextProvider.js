import React , {createContext , useContext , useState} from "react";
import axios from 'axios';


const ResultContext = createContext();

// create context provider
export const ResultContextProvider = ({children}) => {
    let [results , setResults] = useState([]);
    const [loading , setLoading] = useState(false);
    const [searchTerm , setSearchTerm] = useState('');  

    const options = {
      method: 'GET',
      url: process.env.REACT_APP_URL,
      params: {
        query: '',
        limit: '10',
        related_keywords: 'true'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_KEY1,
        'X-RapidAPI-Host': process.env.REACT_APP_HOST1
      }
    };

    let options2 = {
      method: 'POST',
      url: process.env.REACT_APP_URL2,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.REACT_APP_KEY1,
        'X-RapidAPI-Host': process.env.REACT_APP_HOST2
      },
      data: {
        text: '',
        safesearch: 'off',
        region: 'wt-wt',
        color: '',
        size: '',
        type_image: '',
        layout: '',
        max_results: 100
      }
    };

        async function getResults(param) {
          console.log("calling for Getresults")
          setLoading(true);
          let op = {};

          if(param === '/search'){
            console.log("in Search");
            options.params.query = searchTerm;
            op = options;

            try {
                  const response = await axios.request(op);
                  console.log(response?.data?.results)
                  setResults(response?.data?.results)

            } catch (error) {
                  console.error(error);

            }
            }
            else {
                options2.data.text = searchTerm;
                op = options2;
                console.log("Calling Search images");

                try {
                  const response = await axios.request(op);
                  console.log(response?.data?.result);
                  setResults(response?.data?.result);
                } catch (error) {
                  console.error(error);
                }
            }
            setLoading(false)
    }
    

    async function getLatestNews(){
        setLoading(true)
        const options = {
            method: 'GET',
            url: process.env.REACT_APP_URL3,
            params: {
              country: 'us',
              language: 'en',
              pageSize: '10',
              category: 'sports'
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_KEY3,
              'X-RapidAPI-Host': process.env.REACT_APP_HOST3
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log("Calling LatesNews")
              console.log(response.data);
              setResults(response.data);
          } catch (error) {
              console.error(error);
          }
          setLoading(false)
    }

    async function getNews(){
                setLoading(true)
            const options = {
                    method: 'GET',
                    url: process.env.REACT_APP_URL4,
                    params: {
                    q: '',
                    country: 'us',
                    language: 'en',
                    pageSize: '10',
                    publisher: 'cnn.com,bbc.com'
                    },
                    headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_KEY3,
                    'X-RapidAPI-Host': process.env.REACT_APP_HOST3
                    }
                };
                
                try {
                    options.params.q = searchTerm;
                    const response = await axios.request(options);
                    console.log("calling get News");
                    console.log(response.data);
                    setResults(response.data);
                } catch (error) {
                    console.error(error);
                    console.log("Error in Seach data fetch");
                }
                setLoading(false)
    }

    const value = {
        getResults,
        results,
        loading,
        setSearchTerm,
        getLatestNews,
        getNews,
    }
    return (
        <ResultContext.Provider value={value}>
            {children}
        </ResultContext.Provider>
    )
}
export const useResultContext = () => useContext(ResultContext);
