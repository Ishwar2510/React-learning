
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [data,setdata]=useState(
    [
      {
      "adult": false,
      "backdrop_path": "/vbBGpVX6iP0TqyjwkvSLwj79UV4.jpg",
      "id": 814800,
      "title": "Goodnight Mommy",
      "original_language": "en",
      "original_title": "Goodnight Mommy",
      "overview": "When twin brothers arrive home to find their mother’s demeanor altered and face covered in surgical bandages, they begin to suspect the woman beneath the gauze might not be their mother.",
      "poster_path": "/oHhD5jD4S5ElPNNFCDKXJAzMZ5h.jpg",
      "media_type": "movie",
      "genre_ids": [
      27,
      18,
      53
      ],
      "popularity": 65.554,
      "release_date": "2022-09-16",
      "video": false,
      "vote_average": 5.941,
      "vote_count": 17
      },
      {
      "adult": false,
      "backdrop_path": "/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg",
      "id": 616037,
      "title": "Thor: Love and Thunder",
      "original_language": "en",
      "original_title": "Thor: Love and Thunder",
      "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "media_type": "movie",
      "genre_ids": [
      14,
      28,
      35
      ],
      "popularity": 3773.431,
      "release_date": "2022-07-06",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 3338
      },
      {
      "adult": false,
      "backdrop_path": "/pdfCr8W0wBCpdjbZXSxnKhZtosP.jpg",
      "id": 84773,
      "title": "The Lord of the Rings: The Rings of Power",
      "original_language": "en",
      "original_name": "The Lord of the Rings: The Rings of Power",
      "overview": "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
      "poster_path": "/suyNxglk17Cpk8rCM2kZgqKdftk.jpg",
      "media_type": "tv",
      "genre_ids": [
      10765,
      10759,
      18
      ],
      "popularity": 5975.998,
      "first_air_date": "2022-09-01",
      "vote_average": 7.566,
      "vote_count": 600,
      "origin_country": [
      "US"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/djNoBEjH9J6aCZSl0snB4fhOPxs.jpg",
      "id": 762968,
      "title": "Do Revenge",
      "original_language": "en",
      "original_title": "Do Revenge",
      "overview": "A dethroned queen bee at a posh private high school strikes a secret deal with an unassuming new student to enact revenge on one another’s enemies.",
      "poster_path": "/akIjKJDHcVN4bzifcEarKVPNpoa.jpg",
      "media_type": "movie",
      "genre_ids": [
      35
      ],
      "popularity": 88.924,
      "release_date": "2022-09-14",
      "video": false,
      "vote_average": 6.722,
      "vote_count": 18
      },
      {
      "adult": false,
      "backdrop_path": "/dU9pMo94W91RL2Q38KbbVIr6Kxu.jpg",
      "id": 556694,
      "title": "Three Thousand Years of Longing",
      "original_language": "en",
      "original_title": "Three Thousand Years of Longing",
      "overview": "A solitary scholar discovers an ancient bottle while on a trip to Istanbul and unleashes a djinn who offers her three wishes. Filled with reluctance, she is unable to come up with one until his stories spark in her a desire to be loved.",
      "poster_path": "/8q6BrcwGEBGbtwtbCUVKEt2lmEy.jpg",
      "media_type": "movie",
      "genre_ids": [
      14,
      18,
      10749
      ],
      "popularity": 288.03,
      "release_date": "2022-08-24",
      "video": false,
      "vote_average": 6.933,
      "vote_count": 150
      },
      {
      "adult": false,
      "backdrop_path": "/lvgtje2AOkYEYm4O5rIWuFUqB4K.jpg",
      "id": 97175,
      "title": "Fate: The Winx Saga",
      "original_language": "en",
      "original_name": "Fate: The Winx Saga",
      "overview": "The coming-of-age journey of five fairies attending Alfea, a magical boarding school in the Otherworld where they must learn to master their powers while navigating love, rivalries, and the monsters that threaten their very existence.",
      "poster_path": "/oHj6guMrLfQcBzo3uxwBJc8Y736.jpg",
      "media_type": "tv",
      "genre_ids": [
      10765,
      18
      ],
      "popularity": 282.212,
      "first_air_date": "2021-01-22",
      "vote_average": 8.331,
      "vote_count": 1006,
      "origin_country": [
      "US"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/yo0qfH2dQGGMxkfivdkz5zxVatD.jpg",
      "id": 830788,
      "title": "The Invitation",
      "original_language": "en",
      "original_title": "The Invitation",
      "overview": "After the death of her mother, Evie is approached by an unknown cousin who invites her to a lavish wedding in the English countryside. Soon, she realizes a gothic conspiracy is afoot and must fight for survival as she uncovers twisted secrets in her family’s history.",
      "poster_path": "/jcTq6gIskCsHlKDvCKKouEfiU66.jpg",
      "media_type": "movie",
      "genre_ids": [
      27,
      53
      ],
      "popularity": 123.396,
      "release_date": "2022-08-24",
      "video": false,
      "vote_average": 6.3,
      "vote_count": 54
      },
      {
      "adult": false,
      "backdrop_path": "/3UbHGmu9vIMSC5uNfnGt7DjetqT.jpg",
      "id": 105248,
      "title": "Cyberpunk: Edgerunners",
      "original_language": "ja",
      "original_name": "サイバーパンク：エッジランナーズ",
      "overview": "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
      "poster_path": "/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg",
      "media_type": "tv",
      "genre_ids": [
      16,
      10759,
      10765
      ],
      "popularity": 161.547,
      "first_air_date": "2022-09-13",
      "vote_average": 8.897,
      "vote_count": 69,
      "origin_country": [
      "JP"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/o9nWHhPOIKiAf0TBYMvclvsKf6a.jpg",
      "id": 1013228,
      "title": "I Used to Be Famous",
      "original_language": "en",
      "original_title": "I Used to Be Famous",
      "overview": "A former boy band star unexpectedly gets a second shot at success when he forms a bond with a gifted young drummer.",
      "poster_path": "/hJMnsf6vzgoNx0bv3uh3PTCjmks.jpg",
      "media_type": "movie",
      "genre_ids": [
      35,
      18,
      10402
      ],
      "popularity": 7.741,
      "release_date": "2022-09-09",
      "video": false,
      "vote_average": 7.333,
      "vote_count": 6
      },
      {
      "adult": false,
      "backdrop_path": "/7bck0VVQW3YEMitkacJcxJKveQK.jpg",
      "id": 862965,
      "title": "Emily the Criminal",
      "original_language": "en",
      "original_title": "Emily the Criminal",
      "overview": "Emily, who is saddled with student debt and locked out of the job market due to a minor criminal record, gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles, ultimately leading to deadly consequences.",
      "poster_path": "/iZvzMpREGiqDQ5eYbx8z70qPgst.jpg",
      "media_type": "movie",
      "genre_ids": [
      80,
      53
      ],
      "popularity": 30.562,
      "release_date": "2022-08-12",
      "video": false,
      "vote_average": 7.554,
      "vote_count": 37
      },
      {
      "adult": false,
      "backdrop_path": "/9GvhICFMiRQA82vS6ydkXxeEkrd.jpg",
      "id": 92783,
      "title": "She-Hulk: Attorney at Law",
      "original_language": "en",
      "original_name": "She-Hulk: Attorney at Law",
      "overview": "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
      "poster_path": "/hJfI6AGrmr4uSHRccfJuSsapvOb.jpg",
      "media_type": "tv",
      "genre_ids": [
      35,
      10765
      ],
      "popularity": 5337.985,
      "first_air_date": "2022-08-18",
      "vote_average": 7.281,
      "vote_count": 702,
      "origin_country": [
      "US"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg",
      "id": 532639,
      "title": "Pinocchio",
      "original_language": "en",
      "original_title": "Pinocchio",
      "overview": "A wooden puppet embarks on a thrilling adventure to become a real boy.",
      "poster_path": "/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg",
      "media_type": "movie",
      "genre_ids": [
      14,
      12,
      10751
      ],
      "popularity": 6626.152,
      "release_date": "2022-09-07",
      "video": false,
      "vote_average": 6.765,
      "vote_count": 464
      },
      {
      "adult": false,
      "backdrop_path": "/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg",
      "id": 94997,
      "title": "House of the Dragon",
      "original_language": "en",
      "original_name": "House of the Dragon",
      "overview": "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
      "poster_path": "/wW5WW34KhCDNGRs3gnzqrzQeiEB.jpg",
      "media_type": "tv",
      "genre_ids": [
      10765,
      18,
      10759
      ],
      "popularity": 5177.782,
      "first_air_date": "2022-08-21",
      "vote_average": 8.641,
      "vote_count": 1172,
      "origin_country": [
      "US"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/7id7oE3gqZuO0piWN20Ev7V90wl.jpg",
      "id": 877957,
      "title": "Drifting Home",
      "original_language": "ja",
      "original_title": "雨を告げる漂流団地",
      "overview": "Sixth-graders Kosuke and Natsume grew up in the same apartment building as childhood friends. During summer break, while playing in the apartment building that is set to be demolished, they find themselves caught in a strange phenomenon. All they can see around them is a vast sea. Will Kosuke and the others make it back to their world? A journey of farewells in summer has just begun.",
      "poster_path": "/iNf1wC8cK6e8zgNyuMUqWFT7Din.jpg",
      "media_type": "movie",
      "genre_ids": [
      16,
      18,
      9648,
      14
      ],
      "popularity": 15.053,
      "release_date": "2022-09-09",
      "video": false,
      "vote_average": 7,
      "vote_count": 7
      },
      {
      "adult": false,
      "backdrop_path": "/vW2oUgMX3ZhKMPTwYbGnkYDxdUq.jpg",
      "id": 999127,
      "title": "Broad Peak",
      "original_language": "pl",
      "original_title": "Broad Peak",
      "overview": "After climbing Broad Peak mountain, Maciej Berbeka learns his journey to the summit is incomplete. 25 years later, he sets out to finish what he started.",
      "poster_path": "/n7eiUpUb27Vpd3MBfLro9rkUo0F.jpg",
      "media_type": "movie",
      "genre_ids": [
      18
      ],
      "popularity": 23.359,
      "release_date": "2022-09-09",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 6
      },
      {
      "adult": false,
      "backdrop_path": "/3xGfsAYAxVmYj1CbE5vAkmMJbHo.jpg",
      "id": 724665,
      "title": "Confess, Fletch",
      "original_language": "en",
      "original_title": "Confess, Fletch",
      "overview": "The roguishly charming and endlessly troublesome Fletch becomes the prime suspect in a murder case while searching for a stolen art collection. The only way to prove his innocence? Find out which of the long list of suspects is the culprit - from the eccentric art dealer and a missing playboy to a crazy neighbor and Fletch’s Italian girlfriend.",
      "poster_path": "/4dqEk1X8rHSOWWfnVEuzgXj24Mr.jpg",
      "media_type": "movie",
      "genre_ids": [
      80,
      35
      ],
      "popularity": 54.551,
      "release_date": "2022-09-16",
      "video": false,
      "vote_average": 5,
      "vote_count": 4
      },
      {
      "adult": false,
      "backdrop_path": "/twybTlqm4v7JKjkxktZqmffGT8k.jpg",
      "id": 128013,
      "title": "Santo",
      "original_language": "es",
      "original_name": "Santo",
      "overview": "Two cops must learn to work together to catch the world's most-wanted drug dealer, whose face has never been revealed.",
      "poster_path": "/qIF53PuAJB0SE37IuPe77xCBuse.jpg",
      "media_type": "tv",
      "genre_ids": [
      80,
      18
      ],
      "popularity": 61.095,
      "first_air_date": "2022-09-16",
      "vote_average": 9,
      "vote_count": 3,
      "origin_country": [
      "ES"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/Eu4i6qFUzXxIFTNxr8HC0zqACb.jpg",
      "id": 112321,
      "title": "A Private Affair",
      "original_language": "es",
      "original_name": "Un asunto privado",
      "overview": "Marina Quiroga, a daring upper-class girl with a detective's soul, sets off to catch the serial killer that has been terrorizing her town with her faithful butler Hector's help.",
      "poster_path": "/lmGRZEuIQtArmyGjt6Ay5Y74hk2.jpg",
      "media_type": "tv",
      "genre_ids": [
      35,
      9648,
      18
      ],
      "popularity": 14.703,
      "first_air_date": "2022-09-16",
      "vote_average": 6,
      "vote_count": 2,
      "origin_country": [
      "ES"
      ]
      },
      {
      "adult": false,
      "backdrop_path": "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
      "id": 361743,
      "title": "Top Gun: Maverick",
      "original_language": "en",
      "original_title": "Top Gun: Maverick",
      "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      "media_type": "movie",
      "genre_ids": [
      28,
      18
      ],
      "popularity": 1893.932,
      "release_date": "2022-05-24",
      "video": false,
      "vote_average": 8.37,
      "vote_count": 3724
      },
      {
      "adult": false,
      "backdrop_path": "/2k9tBql5GYH328Krj66tDT9LtFZ.jpg",
      "id": 760741,
      "title": "Beast",
      "original_language": "en",
      "original_title": "Beast",
      "overview": "A recently widowed man and his two teenage daughters travel to a game reserve in South Africa. However, their journey of healing soon turns into a fight for survival when a bloodthirsty lion starts to stalk them.",
      "poster_path": "/iRV0IB5xQeOymuGGUBarTecQVAl.jpg",
      "media_type": "movie",
      "genre_ids": [
      53,
      27
      ],
      "popularity": 6977.82,
      "release_date": "2022-08-11",
      "video": false,
      "vote_average": 7.09,
      "vote_count": 321
      }
      ]
  );
  const url=" https://api.themoviedb.org/3/trending/all/day?api_key="
 
  useEffect(()=>{
    apicall();
  },[])
  async function apicall(){
    let response= await fetch();
    let data=await response.json();
    setdata(data.results);



  }
  return (
    <div className="App" style={{display:'flex', flexWrap:"wrap",justifyContent:'center'}}>
     {
      data.map((e)=>{
        return <Card key={e.id} title={e.title} poster={e.poster_path} overview={e.overview}  />

      })
     }
    </div>
  );
}

export default App;
