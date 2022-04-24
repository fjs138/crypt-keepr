# CryptKeepr
Dashboard for crypto news, calculator, tickers<br>
<br>

## Deployment
[![Netlify Status](https://api.netlify.com/api/v1/badges/3e01cfbb-cf04-4379-8587-5f6a806650f0/deploy-status)](https://app.netlify.com/sites/stoic-beaver-5c50a6/deploys)

https://cryptkeepr.com


## The Goal
I wanted a way to quickly check the value of Bitcoin, Peloton, and Zoom, from a single view, without any authentication or credential requirements.


## Technology Stack

| Technology    	| Use           	  | Description     	|
| :------------------|:-------------------| :----------------	|
| HTML, CSS, JS 			| Languages     | 				  |
| React	| Front-end			  |	JavaScript library for building user interfaces            |
|Axios|	http client|	A library for server communications; Axios is a Promise-based HTTP client that works in both browsers and Node.|
|dotenv| obfuscate credentials| Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.|

## Project Specifications
* Display a calculator for converting US dollars and crypto
* Display a crypto news widget
* Display pertinent stock prices 

## Anatomy of Project


| File/Folder    	| Purpose           	  |
| :------------------|:-------------------|
| src/components/CurrencyConverter.js		 			| Currency converter component|
| src/components/ExchangeRate.js		 			| Exchange rate component    |
| src/components/Feed.js	 			| Crypto news component     |
| src/components/Ticker.js| Stock ticker component     |



## License
MIT License

Copyright (c) 2015 Frank Santaguida

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

