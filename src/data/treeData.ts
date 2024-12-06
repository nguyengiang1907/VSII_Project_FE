export interface TreeNode {
    name: string;
    attributes?: {
      logo?: string;
    };
    children?: TreeNode[];
  }
  
  export const treeData: TreeNode = {
    name: "Aerial Working Platform",
    attributes: {
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
    },
    children: [
      {
        name: "Boom Lift",
        attributes: {
          logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
        },
        children: [
          {
            name: "Articulating Boom Lift",
            attributes: {
              logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
            },
            children: [
              {
                name: "Electric Articulating Boom Lift",
                attributes: {
                  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
                },
              },
            ],
          },
          {
            name: "Articulating Boom Lift",
            attributes: {
              logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
            },
            children: [
              {
                name: "Electric Articulating Boom Lift",
                attributes: {
                  logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhypfdtNH1Gnd4VwFyF_uLRB82idAAfA_pLDyVWhu_EiD2LxW6ljbUZEDdB0ViRR80gwfpgS5eJsSYy1P1S67h7vlk36S-d42TQrOGUUnWrsXcjz8ZSnWmQBkV1Ca9zeu_Nt1AKx269L7UF/s16000/LW900KN.jpg",
                },
              },
            ],
          },
        ],
      },
    ],
  };
  