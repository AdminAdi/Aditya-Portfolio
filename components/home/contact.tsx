import { Button, HeaderSmall } from '@shared-components';
import { useRouter } from 'next/router';

export default function Contact(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <div className="relative h-auto py-10 lg:py-10">
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 h-auto place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="Meet and Greet!" />
              <h1 className="sm:w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal lg:leading-7">
                Impressed Already? <span className="text-pink">Schedule</span> a call with him.
                {/* Gender specific????? */}
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Let’s grab a cup of coffee.
              </h1>
              <div className="mt-8">
                <a 
                  href="mailto:itsmeaditya3254@gmail.com"
                  className="group relative inline-flex items-center px-8 py-4 bg-gray-800/80 hover:bg-gray-700/90 rounded-full border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Glow effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Email icon */}
                  <svg 
                    className="w-6 h-6 text-pink-400 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  
                  {/* Email text */}
                  <span className="text-lg font-medium text-pink-300 group-hover:text-white transition-colors duration-300">
                    itsmeaditya3254@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
            <img src="/images/vectors/contact.svg" alt="" className="w-3/4" />
          </div>
        </div>
        <div className="flex justify-center items-center w-full z-30">
          <Button
            type="solid"
            text="Let's Connect! 🚀 "
            onClickHandler={() => router.push('/connect')}
          />
        </div>
      </div>
    </>
  );
}
