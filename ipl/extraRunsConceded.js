function extraRunsConceded(matches,deliveries) {
    const result={}
    for (let match of matches)
     {
      const season = match.season;
     // console.log(season);
    
      if (season=='2016') 
      {
        const id=match.id;
         for(let del of deliveries)
        { 
        if(id==del.match_id)
        {
            
            const bowling_team=del.bowling_team;
            const extra_runs=parseInt(del.extra_runs,10);
          
            if (result[bowling_team]) 
            {
                result[bowling_team] += extra_runs;
              } else {
                result[bowling_team] =extra_runs ;
              }
            
        }
         }
      }
    }

    return result;
}
  
module.exports=extraRunsConceded;