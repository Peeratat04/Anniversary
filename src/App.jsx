import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className='Navbar'>
          <h1>Anniversary 9 Months</h1>
        </div>
      </header>
      <body className='body'>
        <div className='cart-img-1'>
        <div className='cart-img-2 flex justify-between'>
            <div className='c-img-1'>
              <img src="public\Images\Pee.jpg" className='top-img-1 object-scale-down' alt="Pee" />
              <p>ด.ช.พีรธัช เคนผา</p>
            </div>
            <div className='c-img-2'>
              <div className='img-d'>
                <img src="public\Images\ดรีม.jpg" className='top-img-2' alt="Dream" /></div>
              <p>ด.ญ.นันทิกานต์ ต่างใจ</p>
            </div>
            <img className='bg-cart-t' src="https://i.pinimg.com/564x/d6/08/ff/d608ff3b51c405c56357b6979a665495.jpg" alt="" />
        </div>
        </div>
        <div></div>
      </body>


    </>
  )

  return (
    <div className="container mx-auto p-4">
      <header className="Navbar">
        <h1 className="text-center text-2xl font-bold">Anniversary 9 Months</h1>
      </header>
      <main className="body">
        <div className="cart-img-1">
          <div className="bg-cart-t mx-auto p-4">
            <p className="text-white">This is a sample content for the cart.</p>
          </div>
        </div>
        <div className="cart-img-2">
          <div className="c-img-1 mx-auto p-4 bg-gray-800 rounded-lg">
            <p className="text-white">More content here...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
