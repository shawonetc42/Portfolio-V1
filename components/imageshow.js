import React from 'react'

function Imageshow() {
  return (
    <div className="flex flex-col lg:p-44 sm:p-20  items-stretch">
    <div className="w-full px-5 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="items-stretch shadow-2xl bg-white flex grow flex-col w-full pb-9 max-md:mt-8">
          <a href="/">
            <img
              loading="lazy"
              srcSet="/images/111.png"
              className="aspect-[0.86] object-contain object-center w-full blur-none overflow-hidden"
            />
            <div className="justify-center text-black text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-9">
              Home Page 01
            </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch shadow-2xl bg-white flex grow flex-col w-full pb-9 max-md:mt-8">
          <a href="/">
            <img
              loading="lazy"
              srcSet="/images/111.png"
              className="aspect-[0.86] object-contain object-center w-full blur-none overflow-hidden"
            />
            <div className="justify-center text-black text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-9">
              Home Page 02
            </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch shadow-2xl bg-white flex grow flex-col w-full pb-9 max-md:mt-8">
          <a href="/">
            <img
              loading="lazy"
              srcSet="/images/111.png"
              className="aspect-[0.86] object-contain object-center w-full blur-none overflow-hidden"
            />
            <div className="justify-center text-black text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-9">
              Home Page 03
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-16 px-5 max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
          <div className="items-stretch shadow-2xl bg-white flex grow flex-col w-full pb-10 max-md:mt-8">
          <a href="/">
            <img
              loading="lazy"
              srcSet="/images/111.png"
              className="aspect-[0.86] object-contain object-center w-full blur-none overflow-hidden"
            />
            <div className="justify-center text-black text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-9">
              Home Dark
            </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch shadow-2xl bg-white flex grow flex-col w-full pb-10 max-md:mt-8">
          <a href="/">
            <img
              loading="lazy"
              srcSet="/images/111.png"
              className="aspect-[0.86] object-contain object-center w-full blur-none overflow-hidden"
            />
            <div className="justify-center text-black text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-9">
              Home Boxed
            </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch shadow-2xl bg-white flex grow flex-col w-full pb-10 max-md:mt-8">
          <a href="/">
            <img
              loading="lazy"
              srcSet="/images/111.png"
              className="aspect-[0.86] object-contain object-center w-full blur-none overflow-hidden"
            />
            <div className="justify-center text-black text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-9">
              Home RTL
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Imageshow