import { useState } from "react";
 


export default function Home() {
  return (

    

    <main className="flex gap-3 flex-col justify-between p-24 max-w-5xl mx-auto">
      <img src="/them.png"></img>
    
      <button type="button">Click Me! Or else...</button>

      
 
      <div>
        <h2 className="text-4xl">I am Social</h2>
 
        <ul>
          <li>
            Instagram: {" "}
            <a
              className="text-blue-600 underline"
              href="https://www.instagram.com/__sachin18/">
              @sachin
            </a>
          </li>
        </ul>
      </div>
 
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl">I am a Project (I am developed by AI)</h2>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">I am Stockie</h3>
            <p>I am a stock analysis tool developed using c++. I help newbies and experts a like invest in stocks more efficiently and effectively. I allow people to compare stocks, stock categories, and future stock projections. I rate stocks and give my daily top 10 stock picks. I am stockie, your personal investment firm.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">I am Teacher</h3>
            <p>I am a teaching course. I teach computing and the future of technology. Use me to learn about technology and to stay updated on this ever innovating field. Go through my modules at your own pace, and answer the mini quizzes and knowledge games to assert your training into your internal software known as your brain. At the end play the jeopardy game, you deserve it. Finally, you are done, download your certificate and show your soom to be boss!</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">I am Coming Soon</h3>
            <p>Keep reloading the page to see what comes here!</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-3xl text-bold">I am Coming Very Soon</h3>
            <p>Keep reloading the page even faster to see what comes here!</p>
          </div>
        </div>
      </div>
 
      {/* An example of how to use JS functions in JSX*/}
      The date is {new Date().toUTCString()}
 
    </main>
  )
}
