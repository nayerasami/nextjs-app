import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-gray py-4 fixed bottom-0 w-full">
    <div className="container mx-auto text-center ">
      <p> Footer &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
  )
}

export default Footer