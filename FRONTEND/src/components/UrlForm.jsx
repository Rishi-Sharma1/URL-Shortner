import React, {useState} from 'react'
import { createShortUrl } from '../api/shortUrl.api.js';

const UrlForm = () => {

  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [copied, setCopied] = useState(false)


  const handleSubmit = async ()=>{
    const shortUrl = await createShortUrl(url)
    console.log(shortUrl);  
    setShortUrl(shortUrl);  
  }

  const handleCopy = (()=>{
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)

    setTimeout(()=>{
      setCopied(false)
    }, 2000)
  })

  return (
    <div  className='space-y-4'>
      <div>
        <label htmlFor="url" className='block text-sm font-medium text-gray-700 mb-1'>
          Enter your URL
        </label>
        <input type="url" id="url" value={url} onInput={(event)=>{setUrl(event.target.value)}} placeholder='https://exaple.com' required className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
      </div>

      <button type='submit' onClick={handleSubmit} className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50'>
        Shorten Url
      </button>

      {shortUrl && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
              />
               <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                  copied 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
      )}
      </div>
)}

export default UrlForm
