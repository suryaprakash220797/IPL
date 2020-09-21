function economicBowlers(matches,deliveries)
{
    const result={};
    for(let match of matches)
    {
        const season=match.season;
        if(season=='2015')
        { 
            const id=match.id;
            for(let del of deliveries)
            {
                if(id==del.match_id)
                {
                    const bowler=del.bowler;
                    const total_runs=parseInt(del.total_runs,10);
                    if(result[bowler])
                    {
                        result[bowler]+=total_runs;
                    }
                    else
                    {
                        result[bowler]=total_runs;
                    }


                }
            }

        }
    }
    const result1={};
    for(let matc of matches)
    {
        const seaso=matc.season;
        if(seaso=='2015')
        {
            const i=matc.id;
            for(let dele of deliveries)
            {
                if(i==dele.match_id)
                {
                    if(dele.ball=='6')
                    {
                        const bowle=dele.bowler;
                        if(result1[bowle])
                        {
                            result1[bowle]+=1;
                        }
                        else
                        {
                            result1[bowle]=1;
                        }
                    }
                }
            }
        }
    }
    const result2={}
    for(let i in result)
    {
        for(let j in result1)
        {
        if(i==j)
        {
        var tr=result[i];
        var to=result1[j];
        if(result2[i])
        {
            
        }
        else
        {
            result2[i]=tr/to;
        }
        //break;
    }
        }
    }
    let result3=sorting(result2);
    const result4={};
    for(let i=0;i<10;i++)
    {
        for(let j=0;j<result3[i].length-1;j++)
        {
            result4[result3[i][j]]=result3[i][j+1];

        }
        
    }

    // const result3={};
    // for(let i in result2)
    // {
    //     if(result2[i]<7.14)
    //     {
    //         if(result3[i])
    //         {

    //         }
    //         else
    //         {
    //             result3[i]=result2[i];
    //         }
    //     }
        
    // }

    return result4;
}
function sorting(result)
{
    var a=[];
    for(var key in result)
    {
        if(result.hasOwnProperty(key))
        {
            a.push([key,result[key]]);
        }
        
    }
    a.sort(function(c,b)
    {
        return c[1]-b[1];
    })
    return a;
}
module.exports=economicBowlers;