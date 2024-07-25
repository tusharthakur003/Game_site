import React from 'react'
import ItchIoGame from '../../games/JoinGames';
import { Link } from 'react-router-dom';
export default function Home() {

return (
      <>
      <div className='min-h-[80vh]'>
      <ItchIoGame/>
      </div>
        {/* <main>
        <div className="">
          <img draggable="false" className="banner_image" src="https://acloserlisten.com/wp-content/uploads/2020/01/video-game-banner.jpg" srcSet />
        </div>
        <div className="category_heading text-center text-2xl font-bold text-gray-800 uppercase mt-8">Play free Games</div>
            <div className="category_game flex justify-center mt-4 mb-4">
              <Link to="https://4e634835-88c8-4de5-8ce4-341fe892a1e0.poki-gdn.com/e9056d93-d3b7-4235-be5c-21b4aa3484a9/index.html?country=IN&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v5.12.0+29bedb4acf8dafb63c9407897f25591326e2b507&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fstick-merge&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=3%2C37%2C69%2C77%2C242%2C385%2C927%2C929%2C1014%2C1126%2C1140%2C1141%2C1143%2C1155%2C1156%2C1190%2C1197&ab=372d1d2fb397343a240619df4558e76734e4d551&experiment=control-38740565&game_id=4e634835-88c8-4de5-8ce4-341fe892a1e0&game_version_id=e9056d93-d3b7-4235-be5c-21b4aa3484a9&inspector=0&csp=3" className="mx-2"><img className="game-img w-40 h-40 object-cover" src="https://app-cdn.acelitchi.com/prod/package/2022/12/15/Jk3b41bWjjdfK0w.webp" /></Link>
              <Link to="https://65c8f8ac-0e71-47b4-89e4-cc61495bb786.poki-gdn.com/f067ab00-366d-4fde-b273-320811ec187c/index.html?country=IN&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v5.12.0+29bedb4acf8dafb63c9407897f25591326e2b507&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbubble-shooter-lak&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=4%2C72%2C102%2C103%2C254%2C852%2C909%2C1082%2C1140%2C1141&ab=372d1d2fb397343a240619df4558e76734e4d551&experiment=control-38740565&game_id=65c8f8ac-0e71-47b4-89e4-cc61495bb786&game_version_id=f067ab00-366d-4fde-b273-320811ec187c&inspector=0&csp=3" className="mx-2"><img className="game-img w-40 h-40 object-cover" src="https://img.poki.com/cdn-cgi/image/quality=78,width=1200,height=1200,fit=cover,f=png/575d8cdc8afccb74a6defb4c113ade4c.png" /></Link>
              <Link to="https://5dd312fa-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/8b7f2a9d-a44e-44e4-afef-a1e7c17085d7/index.html?country=IN&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v5.12.0+29bedb4acf8dafb63c9407897f25591326e2b507&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fsubway-surfers&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=3%2C4%2C6%2C9%2C86%2C93%2C96%2C103%2C228%2C903%2C929%2C1103%2C1126%2C1137%2C1140%2C1143%2C1147%2C1156%2C1159%2C1160%2C1163%2C1185%2C1190%2C1193&ab=372d1d2fb397343a240619df4558e76734e4d551&experiment=control-38740565&game_id=5dd312fa-015f-11ea-ad56-9cb6d0d995f7&game_version_id=8b7f2a9d-a44e-44e4-afef-a1e7c17085d7&inspector=0&csp=3" className="mx-2"><img className="game-img w-40 h-40 object-cover" src="https://play-lh.googleusercontent.com/Lf-c_8Tk6ppqF8aGmMhWNDFvWDmKakkRXGXZh0e33xHlgJ4o3n7D-eIVCOGT8X7eeuY" /></Link>
              <Link to="https://bd02000c-1843-44be-b257-cf172cebe4ec.poki-gdn.com/eab89929-d3af-49cb-9049-0c733f1e02ec/index.html?country=IN&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v5.12.0+29bedb4acf8dafb63c9407897f25591326e2b507&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbullet-bros&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=3%2C48%2C49%2C77%2C96%2C929%2C1013%2C1141%2C1190&ab=372d1d2fb397343a240619df4558e76734e4d551&experiment=control-38740565&game_id=bd02000c-1843-44be-b257-cf172cebe4ec&game_version_id=eab89929-d3af-49cb-9049-0c733f1e02ec&inspector=0&csp=3" className="mx-2"><img className="game-img w-40 h-40 object-cover" src="https://img.poki.com/cdn-cgi/image/quality=78,width=314,height=314,fit=cover,f=auto/084675aa53d52f2fbfb09a3b7016c620.png" /></Link>
              <Link to="https://68808795-016c-435b-a275-06b86a4c9353.poki-gdn.com/c202a8a8-5237-4f47-9d13-9e561f63d838/index.html?country=IN&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v5.12.0+29bedb4acf8dafb63c9407897f25591326e2b507&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fblocky-puzzle&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=7%2C13%2C1141%2C72&ab=372d1d2fb397343a240619df4558e76734e4d551&experiment=control-38740565&game_id=68808795-016c-435b-a275-06b86a4c9353&game_version_id=c202a8a8-5237-4f47-9d13-9e561f63d838&inspector=0&csp=3" className="mx-2"><img className="game-img w-40 h-40 object-cover" src="https://play-lh.googleusercontent.com/glxKFJFnCoF5wZECb7Soikdi_vXs-MoeJqUoZ5mZs23eJaX26D1mpVHOxRWp6oQUu0w=w240-h480-rw" /></Link>
            </div>
        </main> */}

      </>
    );
}

