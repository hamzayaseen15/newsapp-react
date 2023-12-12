import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
           "source":{
              "id":null,
              "name":"CNBC"
           },
           "author":"Jenni Reid",
           "title":"Ukraine war live updates: Putin tells reporters he will run for re-election in March; U.S. aid hangs in balance after failed vote - CNBC",
           "description":"The fate of crucial military support from Ukraine's biggest funder is in limbo.",
           "url":"https://www.cnbc.com/2023/12/08/russia-ukraine-live-updates.html",
           "urlToImage":"https://image.cnbcfm.com/api/v1/image/107344970-1702025501084-gettyimages-1831281608-a1_08224_libkos.jpeg?v=1702026408&w=1920&h=1080",
           "publishedAt":"2023-12-08T12:01:00Z",
           "content":"Ukraine began using train platforms on Thursday to bypass a border blockade by Polish truck drivers, Ukrzalynitsya, Ukraine's rail network, said.\r\nThe first train deployed in the operation moved 23 t… [+1280 chars]"
        },
        {
           "source":{
              "id":"cnn",
              "name":"CNN"
           },
           "author":"Alicia Wallace",
           "title":"What to expect from the November jobs report - CNN",
           "description":"Employers are growing more cautious, pulling down some job postings and reining in hiring. Employees are sticking around more and not bouncing as readily for better opportunities.",
           "url":"https://www.cnn.com/2023/12/08/economy/november-jobs-report-final/index.html",
           "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1760543633.jpg?c=16x9&q=w_800,c_fill",
           "publishedAt":"2023-12-08T12:00:00Z",
           "content":"Employers are growing more cautious, pulling down some job postings and reining in hiring. Employees are sticking around more and not bouncing as readily for better opportunities.\r\nWelcome to the wai… [+6037 chars]"
        },
        {
           "source":{
              "id":"cnn",
              "name":"CNN"
           },
           "author":"Zachary Cohen, Marshall Cohen",
           "title":"Exclusive: Pro-Trump lawyer Kenneth Chesebro cooperating in multiple state probes into 2020 fake electors plot - CNN",
           "description":"The pro-Trump lawyer who helped devise the 2020 fake electors plot is now cooperating with Michigan and Wisconsin state investigators.",
           "url":"https://www.cnn.com/2023/12/08/politics/kenneth-chesebro-cooperating-multiple-investigations/index.html",
           "urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/231130151436-kenneth-chesebro-10202023.jpg?c=16x9&q=w_800,c_fill",
           "publishedAt":"2023-12-08T11:00:00Z",
           "content":"The pro-Trump lawyer who helped devise the 2020 fake electors plot and already pleaded guilty to the conspiracy in Georgia is now cooperating with Michigan and Wisconsin state investigators in hopes … [+4777 chars]"
        },
        {
           "source":{
              "id":"fox-news",
              "name":"Fox News"
           },
           "author":"Lawrence Richard",
           "title":"US embassy in Baghdad struck by more than a dozen rockets in early morning attack - Fox News",
           "description":"The U.S. embassy in Baghdad, located in the center of Iraq's capital, was attacked early Friday morning when more than a dozen rockets struck the facility and nearby buildings.",
           "url":"https://www.foxnews.com/world/us-embassy-baghdad-struck-more-dozen-rockets-early-morning-attack",
           "urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2023/12/GettyImages-1321012008.jpg",
           "publishedAt":"2023-12-08T10:54:00Z",
           "content":"The U.S. embassy in Baghdad was attacked by several rockets on Friday morning that caused minor material damage but no casualties, U.S. and Iraqi officials said.\r\nExplosions were heard near the embas… [+2697 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"BBC News"
           },
           "author":null,
           "title":"Israel Gaza war: UPenn loses $100m donation after House antisemitism testimony - BBC.com",
           "description":"A major University of Pennsylvania donor withdraws grant after Congress hearing about antisemitism on campus.",
           "url":"https://www.bbc.com/news/world-us-canada-67655910",
           "urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/A1EF/production/_131955414_gettyimages-1825464429.jpg",
           "publishedAt":"2023-12-08T10:45:00Z",
           "content":"Watch: University leaders testify on antisemitism as Jewish students say they have faced threats\r\nA major University of Pennsylvania donor has withdrawn a $100m (£79.3m) grant after a controversial a… [+5151 chars]"
        },
        {
           "source":{
              "id":"reuters",
              "name":"Reuters"
           },
           "author":"Reuters",
           "title":"Israel, on Reuters finding its forces killed Lebanon journalist, says area a combat zone - Reuters",
           "description":"The Israeli military, responding on Friday to a Reuters investigation that determined its forces killed a Reuters journalist in southern Lebanon on Oct. 13, said the incident took place in an active combat zone and was under review.",
           "url":"https://www.reuters.com/world/middle-east/israel-reuters-finding-its-forces-killed-lebanon-journalist-says-area-combat-2023-12-08/",
           "urlToImage":"https://www.reuters.com/resizer/x-qA_GaNqhWp7858MD7TTvD1Ogo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GTMWOY4ZB5NO7CS7RZAGQ6WHKM.jpg",
           "publishedAt":"2023-12-08T10:13:08Z",
           "content":"JERUSALEM, Dec 8 (Reuters) - The Israeli military, responding on Friday to a Reuters investigation that determined its forces killed a Reuters journalist in southern Lebanon on Oct. 13, said the inci… [+2666 chars]"
        },
        {
           "source":{
              "id":"al-jazeera-english",
              "name":"Al Jazeera English"
           },
           "author":"Al Jazeera",
           "title":"US raises criticism of Israel ahead of UNSC ceasefire meeting - Al Jazeera English",
           "description":"US officials urge Israel to protect Gaza civilians but are unlikely to back calls for permanent truce.",
           "url":"https://www.aljazeera.com/news/2023/12/8/us-raises-criticism-of-israel-ahead-of-unsc-ceasefire-resolution-meeting",
           "urlToImage":"https://www.aljazeera.com/wp-content/uploads/2023/12/AP23326760819336-1702024786.jpg?resize=1920%2C1440",
           "publishedAt":"2023-12-08T09:45:41Z",
           "content":"Senior United States officials have aimed rare levels of criticism at Israels conduct in its war on Gaza as the United Nations Security Council (UNSC) prepares to meet.\r\nThe council is expected to co… [+4172 chars]"
        },
        {
           "source":{
              "id":"reuters",
              "name":"Reuters"
           },
           "author":"Reuters",
           "title":"Hunter Biden hit with federal charges for evading tax - Reuters",
           "description":null,
           "url":"https://www.reuters.com/legal/doj-files-new-criminal-charges-against-hunter-biden-cnn-2023-12-08/",
           "urlToImage":"https://www.aljazeera.com/wp-content/uploads/2023/12/AP23326760819336-1702024786.jpg?resize=1920%2C1440",
           "publishedAt":"2023-12-08T09:35:00Z",
           "content":null
        },
        {
           "source":{
              "id":null,
              "name":"CNBC"
           },
           "author":"Tanaya Macheel",
           "title":"Stock futures are little changed ahead of key November jobs report: Live updates - CNBC",
           "description":"Stock futures were little changed Friday morning as investors looked ahead to a key U.S. jobs report.",
           "url":"https://www.cnbc.com/2023/12/07/stock-market-today-live-updates.html",
           "urlToImage":"https://image.cnbcfm.com/api/v1/image/107141820-1666881034209-gettyimages-1437011624-dscf7946_73c97758-2e1f-4582-bf29-48e03f3231d2.jpeg?v=1685916194&w=1920&h=1080",
           "publishedAt":"2023-12-08T09:15:00Z",
           "content":"Stock futures were little changed Friday morning as investors looked ahead to a key U.S. jobs report.\r\nFutures tied to the Dow Jones Industrial Average ticked higher by 31 points, or 0.1%. S&amp;P 50… [+1483 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"Hindustan Times"
           },
           "author":"Soumi Pyne",
           "title":"Tarot Card Readings: Tarot daily prediction for December 8, 2023 - Hindustan Times",
           "description":"Let us delve into your daily tarot predictions for December 8, 2023. | Horoscope",
           "url":"https://www.hindustantimes.com/astrology/horoscope/tarot-card-readings-tarot-daily-prediction-for-december-8-2023-101702025462811.html",
           "urlToImage":"https://www.hindustantimes.com/ht-img/img/2023/12/08/1600x900/tarot_1693036250665_1702025667104.jpg",
           "publishedAt":"2023-12-08T09:05:17Z",
           "content":"Aries: You might be feeling pretty hurt from a relationship that didn't work out so well. Take some time to patch yourself up and feel better. Sometimes, we rush into things without realizing they mi… [+4452 chars]"
        },
        {
           "source":{
              "id":"associated-press",
              "name":"Associated Press"
           },
           "author":"MARCIA DUNN",
           "title":"Asteroid will pass in front of bright star Betelgeuse to produce a rare eclipse visible to millions - The Associated Press",
           "description":"One of the biggest and brightest stars in the night sky will momentarily vanish. That's because an asteroid will pass in front of it in a one-of-a-kind eclipse. The rare event will occur late Monday into early Tuesday. Weather permitting, it should be visible…",
           "url":"https://apnews.com/article/asteroid-star-eclipse-betelgeuse-b9e3796c1ca915afdb84ed41509da9c8",
           "urlToImage":"https://dims.apnews.com/dims4/default/9554f62/2147483647/strip/true/crop/1280x720+0+280/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1b%2F28%2F23ca5c58eb701c63feed67a3ff88%2F31f3cb5d133c4b3fa4a0b4d258e35059",
           "publishedAt":"2023-12-08T08:08:47Z",
           "content":"CAPE CANAVERAL, Fla. (AP) One of the biggest and brightest stars in the night sky will momentarily vanish as an asteroid passes in front of it to produce a one-of-a-kind eclipse.\r\nThe rare and fleeti… [+2551 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"Spaceflight Now"
           },
           "author":null,
           "title":"SpaceX launches Falcon 9 rocket from California carrying 22 Starlink satellites – Spaceflight Now - Spaceflight Now",
           "description":"A Falcon 9 rocket lifted off from Vandenberg Space Force Base, California, with another batch of satellites for SpaceX's Starlink network at 12:03 a.m. PST Friday (3:03 a.m. EST / 0803 UTC).",
           "url":"https://spaceflightnow.com/2023/12/08/live-coverage-spacex-to-launch-falcon-9-rocket-from-california-carrying-22-starlink-satellites/",
           "urlToImage":"http://spaceflightnow.com/wp-content/uploads/2022/12/20221214f9swot1.jpg",
           "publishedAt":"2023-12-08T07:30:00Z",
           "content":"File photo of a SpaceX Falcon 9 rocket on the launch pad at Vandenberg Space Force Base, California. Credit: SpaceX\r\nA Falcon 9 rocket lifted from the West Coast with another batch of satellites for … [+1898 chars]"
        },
        {
           "source":{
              "id":"espn",
              "name":"ESPN"
           },
           "author":"Mike Reiss",
           "title":"Jabrill Peppers -- Patriots needed win over Steelers with Bill Belichick taking 'flak' - ESPN",
           "description":"Patriots safety Jabrill Peppers essentially dedicated Thursday night's win over the Steelers to Bill Belichick and said he doesn't like \"all of the flak\" the Pats head coach has been getting this season.",
           "url":"https://www.espn.com/nfl/story/_/id/39068769/jabrill-peppers-patriots-needed-win-steelers-bill-belichick-taking-flak",
           "urlToImage":"https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1208%2Fr1263790_1296x729_16%2D9.jpg",
           "publishedAt":"2023-12-08T07:16:00Z",
           "content":"PITTSBURGH -- In a celebratory locker room following the New England Patriots' 21-18 win over the Pittsburgh Steelers on Thursday at Acrisure Stadium, veteran safety Jabrill Peppers essentially dedic… [+2356 chars]"
        },
        {
           "source":{
              "id":"engadget",
              "name":"Engadget"
           },
           "author":"Richard Lai",
           "title":"Google admits that a Gemini AI demo video was staged - Engadget",
           "description":"Google admits that it staged part of a Gemini AI demo video, in which there was actually no voice interaction as implied.",
           "url":"https://www.engadget.com/google-admits-that-a-gemini-ai-demo-video-was-staged-055718855.html",
           "urlToImage":"https://s.yimg.com/ny/api/res/1.2/3.jmN_ecySPiRqce1SMj.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/64cc7ab0-9587-11ee-b756-3c1be413307c",
           "publishedAt":"2023-12-08T05:57:00Z",
           "content":"Google is counting on its very own GPT-4 competitor, Gemini, so much that it staged parts of a recent demo video. In an opinion piece, Bloomberg says Google admits that for its video titled \"Hands-on… [+1418 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"CBS Sports"
           },
           "author":"",
           "title":"NBA In-Season Tournament championship bracket set: Lakers will face Pacers for NBA Cup - CBS Sports",
           "description":"Lakers rout Pelicans to advance to Saturday's final",
           "url":"https://www.cbssports.com/nba/news/nba-in-season-tournament-championship-bracket-set-lakers-will-face-pacers-for-nba-cup/",
           "urlToImage":"https://sportshub.cbsistatic.com/i/r/2023/12/08/769e6e02-2d1a-4001-bf32-b53766824c17/thumbnail/1200x675/b2be379a943ade24761e34103b25057d/untitled-design-2023-12-07t201416-247.png",
           "publishedAt":"2023-12-08T05:23:42Z",
           "content":"The championship match for the inaugural In-Season Tournament is now set after the Los Angeles Lakers dominated the New Orleans Pelicans en route to a 133-89 win Thursday night in Las Vegas. The Lake… [+5227 chars]"
        },
        {
           "source":{
              "id":"fox-news",
              "name":"Fox News"
           },
           "author":"Sarah Rumpf-Whitten",
           "title":"UPenn president Liz Magill called to resign by Wharton board following disastrous testimony on antisemitism - Fox News",
           "description":"The board of the UPenn's Wharton business school called President Liz Magill to resign following her Congressional testimony remarks on anti-Semitism on campus.",
           "url":"https://www.foxnews.com/us/upenn-president-liz-magill-called-resign-wharton-board-following-disastrous-testimony-antisemitism",
           "urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2023/12/GettyImages-1833214278.jpg",
           "publishedAt":"2023-12-08T04:33:00Z",
           "content":"University of Pennsylvania President Liz Magill has been asked to resign by the board of Penn's Wharton business school, according to a letter obtained by Fox News Digital.\r\n\"As a result of the Unive… [+2616 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"New York Post"
           },
           "author":"Mark W. Sanchez",
           "title":"Yankees 'in the market for pitching' after landing Juan Soto - New York Post ",
           "description":"“We’re in the market for pitching,” Yankees general manager Brian Cashman said over Zoom on Thursday. “Rotation, bullpen, combo, all of the above.”",
           "url":"https://nypost.com/2023/12/07/sports/yankees-in-the-market-for-pitching-after-landing-juan-soto/",
           "urlToImage":"https://nypost.com/wp-content/uploads/sites/2/2023/12/newspress-collage-cxyszdqs0-1702029604688.jpg?quality=75&strip=all&1702011659&w=1024",
           "publishedAt":"2023-12-08T04:22:00Z",
           "content":"The Yankees are not done.\r\nIts not going to be just him, GM Brian Cashman said of Juan Soto. We got to continue working at what else we can add to this roster.\r\nThe biggest need, Cashman acknowledged… [+2824 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"The Detroit News"
           },
           "author":"Anne Snabes",
           "title":"Mystery respiratory illness hitting dogs has Mich. pet owners on edge - Detroit News",
           "description":"So far, no cases of the illness that leaves dogs with a lingering cough have officially been detected in Michigan but the head of state's diagnostics",
           "url":"https://www.detroitnews.com/story/news/local/michigan/2023/12/07/mystery-respiratory-illness-hitting-dogs-has-mich-pet-owners-on-edge/71801597007/",
           "urlToImage":"https://www.detroitnews.com/gcdn/authoring/authoring-images/2023/12/06/PDTN/71827801007-20231206-dgdog-0384.jpg?crop=8255,4645,x0,y429&width=3200&height=1801&format=pjpg&auto=webp",
           "publishedAt":"2023-12-08T04:05:57Z",
           "content":"As a mysterious respiratory illness spreads among dogs in the U.S., researchers in Michigan are testing samples from sick canines while veterinarians are urging clients to educate themselves, try to … [+8979 chars]"
        },
        {
           "source":{
              "id":null,
              "name":"VentureBeat"
           },
           "author":"Rachel Kaser",
           "title":"Baldur's Gate 3 wins Game of the Year at The Game Awards 2023 - VentureBeat",
           "description":"Larian Studio's Baldur's Gate 3 has taken home the top honor of Game of the Year at The Game Awards 2023.",
           "url":"https://venturebeat.com/games/baldurs-gate-3-wins-game-of-the-year-at-the-game-awards-2023/",
           "urlToImage":"https://venturebeat.com/wp-content/uploads/2023/08/Baldurs-Gate-3-Party.jpg?w=1200&strip=all",
           "publishedAt":"2023-12-08T04:05:00Z",
           "content":"Do you want to get the latest gaming industry news straight to your inbox? Sign up for our daily and weekly newsletters here. \r\nThe Game Awards of 2023 are a wrap, and Baldur’s Gate 3 has won the top… [+5309 chars]"
        }
     ]
     constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
     }
render() {
return (
    <div className='container my-3'>
        <h2>News App - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=> {
                    return    <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title} description={element.description} 
                        imageUrl={element.urlToImage}
                        newsUrl=""/>
                    </div>
        })}
        </div>
    </div>
)
}
}

export default News
