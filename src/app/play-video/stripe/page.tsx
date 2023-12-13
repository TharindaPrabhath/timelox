import React from "react";

export default function Stripe() {
  return (
    <div>
      <div className="flex max-w-[341px] flex-col items-stretch px-5">
        <header className="bg-black flex w-full flex-col justify-center items-center px-16 py-3 rounded-md">
          <div className="bg-white flex w-[60px] shrink-0 h-[27px] flex-col" />
        </header>
        <div className="flex w-full items-stretch justify-between gap-3.5 mt-11 px-px">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f71c1bed090e1807bfa78bf4b0a0a32cf68bf82c5807e33046200033cfdb45c?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-[17.5] object-contain object-center w-full fill-zinc-900 stroke-[1px] stroke-black overflow-hidden shrink-0 flex-1 my-auto"
          />
          <span className="text-zinc-900 text-xs capitalize flex-1">
            or pay with card
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0857a4cf157e25a153c5cc449d3b9ed0dfe68d5ac15c19f072ea38681b88b156?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-[17.5] object-contain object-center w-full fill-zinc-900 stroke-[1px] stroke-black overflow-hidden shrink-0 flex-1 my-auto"
          />
        </div>
        <div className="text-black text-base font-medium capitalize w-full mt-9">
          Email
        </div>
        <div className="border shadow-sm bg-white flex w-full flex-col justify-center mt-2.5 pl-16 pr-6 py-3 rounded-3xl border-solid border-black items-end">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ced087eeaea71174edae7023418f3791d9cb637a82aae71a8ebb635421a52090?apiKey=a9e210de0ede48479f065d558e6a4bec&"
            className="aspect-square object-contain object-center w-[26px] overflow-hidden max-w-full"
          />
        </div>
        <div className="text-black text-base font-medium capitalize w-full mt-5">
          Card Information
        </div>
        <form className="border bg-white flex items-center justify-between gap-5 mt-2.5 pt-5 px-3 rounded-3xl border-solid border-black">
          <div className="flex grow basis-[0%] flex-col items-stretch my-auto">
            <div className="text-zinc-900 text-xs capitalize whitespace-nowrap">
              1234 1234 1245 2258
            </div>
            <div className="text-zinc-900 text-xs capitalize mt-9">MM\YY</div>
          </div>
          <div className="self-stretch flex grow basis-[0%] flex-col items-end">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a06b7a2bd67564485493ebf58f8d53bd891dda5c52feebfd6dec2fdb6e047f57?apiKey=a9e210de0ede48479f065d558e6a4bec&"
              className="aspect-[5.88] object-contain object-center w-[94px] overflow-hidden max-w-full"
            />
            <div className="self-stretch flex items-stretch justify-between gap-4 mt-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5158206cf79459c946d33ee114dfec72f296063172948bc0525195cfad086406?apiKey=a9e210de0ede48479f065d558e6a4bec&"
                className="aspect-[0.02] object-contain object-center w-px stroke-[1px] stroke-stone-300 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-900 text-xs capitalize my-auto">
                CVC
              </div>
            </div>
          </div>
        </form>
        <div className="text-black text-base font-medium capitalize w-full mt-5">
          Country or region
        </div>
        <div className="border shadow-sm bg-white flex min-h-[48px] w-full flex-col mt-1.5 rounded-3xl border-solid border-black" />
        <button className="text-white text-center text-lg font-medium capitalize whitespace-nowrap shadow-sm bg-indigo-800 w-full justify-center items-center mt-8 px-16 py-4 rounded-3xl">
          pay $65.00
        </button>
      </div>
    </div>
  );
}
