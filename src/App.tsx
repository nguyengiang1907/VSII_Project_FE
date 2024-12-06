import React from "react";
import SearchCategory from "./component/SearchCategory";
import { treeData } from "./data/treeData";

const App: React.FC = () => {

  const categories = [
    {
      id: 1,
      name: "Aerial Working Platform",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
      subCategories: [
        {
          id: 101,
          name: "Boom Lift",
          logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
          subCategories: [
            {
              id: 105,
              name: "Articulating Boom Lift",
              logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
              subCategories: [
                { id: 10111, name: "Electric Articulating Boom Lift", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
                { id: 10112, name: "Electric Articulating Boom Right", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
              ],
            },
            {
              id: 1012,
              name: "Diesel Articulating Boom Lift",
              logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
              subCategories: [
                { id: 10128, name: "Diesel Articulating Boom Lift V1", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
                { id: 10129, name: "Diesel Articulating Boom Lift V2", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Aerial Working Platform",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
      subCategories: [
        {
          id: 102,
          name: "Boom Lift",
          logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
          subCategories: [
            {
              id: 1012,
              name: "Articulating Boom Lift",
              logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
              subCategories: [
                { id: 10121, name: "Electric Articulating Boom Lift", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
                { id: 10122, name: "Electric Articulating Boom Right", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
              ],
            },
            {
              id: 1013,
              name: "Diesel Articulating Boom Lift",
              logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
              subCategories: [
                { id: 10131, name: "iPhone 13", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
                { id: 10132, name: "iPhone 14", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg", subCategories: [] },
              ],
            },
          ],
        },
      ],
    },
  ];
  

  return (
    <div>
      <SearchCategory categories={categories} />
    </div>
  );
};

export default App;
