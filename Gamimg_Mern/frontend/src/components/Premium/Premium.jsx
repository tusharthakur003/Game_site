import React from 'react'
// import { useAuth } from '../../store/auth'

const Premium = () => {
  // const {services} = useAuth();

  return (
    <>
   {/* <div className='flex'>
    {
      services.map((curr, index)=>{
        const {price, description, provider, service} = curr;
        return(
          <div className="max-w-60 mt-10 mb-10 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700" key={index}>
        <a href="#">
          <img className="rounded-t-lg" src="https://play-lh.googleusercontent.com/_98TlKnoYRzn1ii0UDwcjCNSf0rpW0OSTJoSJeEFHYCLGwVv-094sl5aVKqLAbrP9rM" alt />
        </a>
        <div className="p-5">
          <p className="mb-3 font-normal text-black-700 dark:text-black-400">{provider}</p>
          <p className="mb-3 font-normal text-black-700 dark:text-black-400">{price}</p>
          <p className="mb-3 font-normal text-black-700 dark:text-black-400">{service}</p>
          <p className="mb-3 font-normal text-black-700 dark:text-black-400">{description}</p>

          <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Play
          </a>
      </div>
      
         </div>
        )
      })
    }
   </div> */}
   <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")` 
    }}>
      <h1 className="category_heading text-center text-2xl font-bold text-red-800 pt-4 uppercase ">"Welcome To Premium Membership: Level Up Your Gaming"</h1>
        <div className='flex mx-20'>
          
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/n4yvW6CvtvMQ4erMgvh6xV-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">MultiVersus</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/9hDKdsVj5FdHEAydY9g6Nn-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">League of Legends</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/g8WQQ4XGCFvU28jBXPnyRZ-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">Dauntless</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/jJi9BMrRNgWBd4vCpzJKk5-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">Teamfight Tactics</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/fSc9yE5JtkYSJCyP7ZGzfH-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">Roblox</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
        </div>
        <div className='flex mx-20'>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/PFz3G4KsncVmt2itSZawsH-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-white-700 dark:text-white-400">Crusader Kings 2</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/P5DWHiWXXDMpbRKa5Ejjik-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">War Thunder</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/GvFNWMpWXpad649uCzchz6-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">Rocket League</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/n6XQRm8McXu9TdL8bYAbnP-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">Spelunky Classic</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
          <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/yTtPjjvZBYmmGAPaZkAPCf-1200-80.jpg.webp" alt />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-black-700 dark:text-black-400">Brawlhalla</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Play
            </a>
        </div>
        
          </div>
        </div>
        <div className='flex mx-20'>
              <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/8bEXHBi9Mp8Jh5Er6Jt35m-1200-80.jpg.webp" alt />
              </a>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">StarCraft II</p>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Play
                </a>
            </div>
            
              </div>
              <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/NLL3uVqcBV2QQir5YFZfkQ-1200-80.jpg.webp" alt />
              </a>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">Valorant</p>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Play
                </a>
            </div>
            
              </div>
              <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/TCE4nFFtdxbimgMucjwstf-1200-80.jpg.webp" alt />
              </a>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">Halo Infinite</p>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Play
                </a>
            </div>
            
              </div>
              <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/yiHSeCA4rYE86etzM2sciN-1200-80.jpg.webp" alt />
              </a>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">Path of Exile</p>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Play
                </a>
            </div>
            
              </div>
              <div className="max-w-60 mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="https://cdn.mos.cms.futurecdn.net/JFEAyDzEwyzbkzmYzULAeU-1200-80.jpg.webp" alt />
              </a>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">EVE Online</p>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Play
                </a>
            </div>
            
              </div>
        </div>
  </div>
    </>
   
  )
}

export default Premium
