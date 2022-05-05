import React from 'react'
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <>
      <div className="App">
        <Header />

        <main className='App-main'>
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default MainLayout;
