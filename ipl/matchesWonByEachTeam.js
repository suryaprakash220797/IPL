// function matchesWonByEachTeam(matches) {
//     const result = {};
//     for (let match of matches) {
//       const season = match.season;
//       const winner=match.winner;
//       if(season==result[season])
//       {
          
//           if(result[season][winner])
//           {
//             result[season][winner]+=1;
//           }
//       }
//      else{
//         result[season][winner]=1;
//      }
//     return result;
//   }
// }
  
//   module.exports=matchesWonByEachTeam;
function matchesWonByEachTeam(matches) {
    const result = [];
    for (let match of matches) {
      const season = match.season;
      if (result.includes(season)) {
        continue;
      } else {
        result.push(season);
      }
    }
    const result1={};
    for(let i in result)
    {
        const result2={};
    for(let match of matches)
    {
        const season=match.season;
        
        if(result[i]==season)
        {
            const winner=match.winner;
            
            if(result2[winner])
            {
                result2[winner]+=1;
            }
            else{
                result2[winner]=1;
            }

        }
    }
    result1[result[i]]=result2;
}
    return result1;
  }
  
  module.exports=matchesWonByEachTeam;