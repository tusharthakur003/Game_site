import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import pointer from '../store/PointContext';

const Premium = () => {
  const coins = useContext(pointer);
  const navigate = useNavigate();
  const [warning, setWarning] = useState('');

  const handleClick = (e, path) => {
    e.preventDefault();
    if (coins.points < 10) {
      setWarning('You do not have enough coins. Play Get Coins game to collect coins');
    } else {
      setWarning('');
      coins.points = coins.points - 10;
      navigate(path);
    }
  }

  return (
    <>
      <div 
        style={{ 
          backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")` 
        }}
        className="bg-cover bg-center min-h-screen"
      >
        <h1 className="category_heading text-center text-2xl font-bold text-red-800 pt-4 uppercase">
          Welcome To Premium Membership: Level Up Your Gaming
        </h1>
        {warning && (
          <div className="text-center text-red-600 mb-4">{warning}</div>
        )}
        <div className='flex flex-wrap mx-20'>
          {[
            {
              path: '/games/chess/',
              imgSrc: 'https://th-thumbnailer.cdn-si-edu.com/pRfvxLYMPrsDVdNX9gFIJr3qSMQ=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/5e/20/5e20f146-9fe0-4937-9068-2ed746676d70/10-a-game-designer.jpg',
              title: 'Chess'
            },
            {
              path: '/games/whackamole',
              imgSrc: 'https://www.researchgate.net/publication/284137030/figure/fig1/AS:321769559871488@1453727249882/The-purpose-built-version-of-the-whack-a-mole-game-developed-by-18.png',
              title: 'Whackamole'
            },
            {
              path: '/games/snake',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-d1D3os2A_8b4UvQDEaM7N0JbkcYxYvM5A&s',
              title: 'Snake'
            },
            {
              path: '/games/clicker',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSYPZnf_gI3phvqHCfHnpbSGLc2luslhoQA&s',
              title: 'Get Coins'
            }
          ].map((game, index) => (
            <div key={index} className="max-w-xs mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg dark:border-gray-700">
              <Link to="#" onClick={(e) => handleClick(e, game.path)}>
              
                <img 
                  className="rounded-t-lg w-full h-48 object-cover" 
                  src={game.imgSrc} 
                  alt={game.title} 
                />
              </Link>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">{game.title}</p>
                <Link 
                  onClick={(e) => handleClick(e, game.path)}
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Play
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Premium;
