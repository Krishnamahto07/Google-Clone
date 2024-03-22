import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../context/ResultContextProvider'
import Loading from './Loading'
export default function Results() {
  const {getResults,results,searchTerm,loading,getNews,getLatestNews} = useResultContext();
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/search') {
      getResults(location.pathname);
    }
    if(location.pathname === '/imagesearch') {
      getResults(location.pathname);
    }
    if (location.pathname === '/news') {
      getNews();
    }
    if(location.pathname === '/latestnews')
      getLatestNews();
  },[location.pathname , searchTerm])


  if(loading) return <Loading/>
  switch(location.pathname) {
    case '/search':
      return(
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {
            results?.map((result,index)=>{
              return (
              <div key={index} className=''>
                <p className='font-bold text-md '>{result.title}</p>
                <a href={result.domain} target="_blank" rel="noreferrer" className='underline text-sm'>{result.domain}</a>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>{result.snippet}</p>
                <a href={result.url} rel="noreferrer" className='text-sm underline'>{result.url}</a>
              </div>
              )
            })
          }

        </div>
      );
    case '/imagesearch':
      return (
        
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 px-5 w-full'>
          { results ? 
          <div className="w-full flex flex-wrap justify-between">
                {
                  results?.map((result,index)=>{
                    return (
                      <div key={index} className='flex flex-col break-words w-[350px] gap-2'>
                        
                        <div className=''><img className='object-contain' rel='noreferrer' src={result.url} alt='img' loading='lazy' width="full" /></div>
                        <a href={result.contextLink}>{result.contextLink}</a>
                        <p className='text-md font-semibold'>{result.title}</p>
                        <a href={result.source_url} className='hover:underline hover:text-blue-700 text-sm'>{result.source_url}</a>
                      </div>
                    )
                  })
                }
            </div> :

          <h3 className="text-2xl font-semibold">First Search something</h3>
          } 
        </div>
      );
    case '/news':
      return (
        <div className='flex flex-wrap flex-col gap-5 mx-5 sm:mx-25 w-full'>
          {
            results?.articles?.map((result,index)=>{
              return (
                <div key={index} className="flex flex-col justify-between px-3">
                  <h3 className='text-xl font-semibold'>{result.title}</h3>
                  <a className='underline' href={result.url}>{result.url}</a>
                  <div className='flex  gap-2'>
                    <p className='text-md font-semibold'>{result.publisher.name}</p>
                    <p className='text-sm'>{result.published_date}</p>
                  </div>
                  <a className='text-sm hover:underline hover:to-blue-800' href={result.publisher.url}>{result.publisher.url}</a>
                </div>
              )
            })
          }
        </div>
      );
    case '/latestnews':
          return (
            <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
              {
                results?.articles?.map((result,index)=>{
                return(
                  <div key={index} className='flex flex-col gap-3'>
                      <h3 className='text-xl font-bold'>{result.title}</h3>
                      <a href={result.url} className="hover:underline" >{result.url}</a>
                      <p className="font-semibold">{result.published_date}</p>
                  </div>
                )
                })
              }
            </div>
          );
      default:
        return 'ERROR !';
  }
}
