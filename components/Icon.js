import React from 'react'

function Icon() {
  return (
    <div className="flex w-[1017px] max-w-full mx-auto justify-between gap-5  mt-8 mb-4 items-start max-md:flex-wrap">
      
      <div className="flex grow basis-[0%] flex-col items-center">
        <img
          loading="lazy"
          srcSet="/images/e.png"
          className="aspect-[1.23] object-contain object-center w-16 overflow-hidden max-w-full"
        />
        <div className="justify-center text-black text-center text-xl font-bold leading-8 self-stretch mt-8">
          Exentsive Documentation
          <br />
          Clean Code
        </div>
      </div>
      <div className="self-stretch flex grow basis-[0%] flex-col items-center">
        <img
          loading="lazy"
          srcSet="/images/f.png"
          className="aspect-[1.23] object-contain object-center w-16 overflow-hidden max-w-full"
        />
        <div className="justify-center text-black text-center text-xl font-bold leading-8 self-stretch mt-8">
          Free Lifetime
          <br />
          Updates
        </div>
      </div>
      <div className="self-stretch flex grow basis-[0%] flex-col items-center">
        <img
          loading="lazy"
          srcSet="/images/g.png"
          className="aspect-[1.23] object-contain object-center w-16 overflow-hidden max-w-full"
        />
        <div className="justify-center text-black text-center text-xl font-bold leading-8 self-stretch mt-8">
          Get Professional
          <br />
          Support
        </div>
      </div>
    </div>
  )
}

export default Icon