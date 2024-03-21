import React , {createContext , useContext , useState} from "react";
import axios from 'axios';

// create context

const ResultContext = createContext();
// const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
// const baseUrl = "https://google-search74.p.rapidapi.com/?query=";
// const baseUrl2 = "&limit=10&related_keywords=true";
// const baseUrl = 'https://google-search-2.p.rapidapi.com/';
// const url = 'videos?query=football&num=10&gl=us&hl=en_us&page=0&nfpr=0&device=desktop';
// const url = 'https://google-search-2.p.rapidapi.com/query=football&num=10&gl=us&hl=en_us&page=0&nfpr=0&device=desktop';
// const url = 'https://google-search-2.p.rapidapi.com/videos?query=football&num=10&gl=us&hl=en_us&page=0&nfpr=0&device=desktop';

// create context provider
export const ResultContextProvider = ({children}) => {
    let [results , setResults] = useState([]);
    // const [data , setData] = useState('');
    const [loading , setLoading] = useState(false);
    const [searchTerm , setSearchTerm] = useState('');
    const [ans ,setAns] = useState({})

    // const getResults = async (type) =>{
    //     setLoading(true);

    //     const response = await fetch(`${baseUrl}${type}`, {
    //         method:'GET',
    //         headers:{
    //             'x-user-agent':'desktop',
    //             'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    //             'x-rapidapi-key': "bd6c052731msh6e9b939faced74ep1d45b7jsn3e8447d33070",
    //         }
    //     });

    //     const data = await response.json();
    //     console.log(data);
    //     setResults(data);
    //     setLoading(false);
    // }
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
    //         'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    //     }
    // };
    // const getResults = async (serach_word) =>{
    //     setLoading(true)
    //     try {
    //         const response = await fetch(baseUrl+serach_word+baseUrl2, options);
    //         // const ans = await response.text();
    //         const ans2 = await response.json();
            
    //         // setResults(ans2);
    //         console.log("in Json = ",ans2);
    //         await setData(ans2);
    //         // console.log(ans);
    //         // console.log("result = ",results);
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     // console.log(results);
    //     setLoading(false)
    // }
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
    //         'X-RapidAPI-Host': 'google-search-2.p.rapidapi.com'
    //     }
    // };
    // const getResults = async() =>{
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         setResults(result);
    //         console.log("response = ",result);

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    // const getResults = async (url) => {
    //     setLoading(true);
    //     try{
    //         const res = await fetch(baseUrl+url,{
    //             method: 'GET',
    //             headers: {
    //             'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
    //             'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    //         }
    //         });
    //         const data2 = await res.json();
            
            
    //         // console.log();
    //         // setResults(data2.results[0]);
    //         setData('search = ', data2.search_term);
    //         console.log(data2);
    //         // console.log("result = ",results);
    //         console.log(data);
    //         setLoading(false);
    //     }catch(error){
    //         console.log(error);
    //     }   
    //   };

    // const options = {
    //     method: 'GET',
    //     url: 'https://google-search72.p.rapidapi.com',
    //     params: {
    //       q: 'India',
    //       gl: 'us',
    //       lr: 'lang_en',
    //       num: '10',
    //       start: '0'
    //     },
    //     headers: {
    //       'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
    //       'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
    //     }
    //   };
      
    // async function getResults(argu){
    //     setLoading(true);
    //     try {
    //         // options.params.q = searchTerm;
    //         options.url = options.url + argu;
    //         console.log("url = ",options.url);
    //         const response = await axios.request(options);
    //         console.log("response .data. items = ",response.data);
    //         setResults(response.data.items);
    //     } catch (error) {
    //         console.log("Error h Fetching m");
    //         console.error(error);
    //     }
    //     setLoading(false);
    // }  

    let options = {
        method: 'GET',
        url: 'https://real-time-web-search.p.rapidapi.com/search',
        params: {
          q: 'create an online store',
          limit: '15'
        },
        headers: {
          'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
          'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
        }
      };
    let options2 = {
        method: 'GET',
        url: 'https://real-time-image-search.p.rapidapi.com/search',
        params: {
          query: 'beach',
          region: 'us'
        },
        headers: {
          'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
          'X-RapidAPI-Host': 'real-time-image-search.p.rapidapi.com'
        }
      };
        async function getResults(param) {
            console.log("path =",param);
            setLoading(true);
            let op = {};
            if(param === '/search'){
            options.params.q = searchTerm;
            op = options;
            }
            else {
                options2.params.query = searchTerm;
                op = options2;
            }
            
            try {
                const response = await axios.request(op);
                console.log(response.data.data);
                setResults(response.data.data);
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
    }
    
    //   async function getResults2(param) {
    //     console.log("path =",param);
    //     setLoading(true);
    //     options.params.q = searchTerm;
        
    //         try {
    //             const response = await axios.request(options);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     setLoading(false)
    // }

    async function getLatestNews(){
        setLoading(true)
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/top-headlines',
            params: {
              country: 'us',
              language: 'en',
              pageSize: '10',
              category: 'sports'
            },
            headers: {
              'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
              'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setResults(response.data);
          } catch (error) {
              console.error(error);
              console.log("New fetch m error h");
          }
          setLoading(false)
    }

    async function getNews(){
                setLoading(true)
            const options = {
                    method: 'GET',
                    url: 'https://news-api14.p.rapidapi.com/search',
                    params: {
                    q: '',
                    country: 'us',
                    language: 'en',
                    pageSize: '10',
                    publisher: 'cnn.com,bbc.com'
                    },
                    headers: {
                    'X-RapidAPI-Key': '3b2be45b61msh0e30dc9598c6363p1d0092jsn605cc24df0a2',
                    'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
                    }
                };
                
                try {
                    options.params.q = searchTerm;
                    const response = await axios.request(options);
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
