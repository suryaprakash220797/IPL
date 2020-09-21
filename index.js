const csv=require('csvtojson');
const matchesPlayedPerYear=require("./ipl/matchesPlayedPerYear");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const fs= require("fs");
const JSON_OUTPUT_FILE_PATH="./public/data.json";
const matchesWonByEachTeam =require("./ipl/matchesWonByEachTeam");
const JSON_OUTPUT_FILE_PATH1="./public/data1.json";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const extraRunsConceded =require("./ipl/extraRunsConceded");
const JSON_OUTPUT_FILE_PATH2="./public/data2.json";
const economicBowlers =require("./ipl/economicBowlers");
const JSON_OUTPUT_FILE_PATH3="./public/data3.json";
const matchesWonByRcb =require("./ipl/matchesWonByRcb");
const matchesWonByEachTeam1 = require('./ipl/matchesWonByEachTeam1');
const JSON_OUTPUT_FILE_PATH4="./public/data4.json";
const JSON_OUTPUT_FILE_PATH5="./public/data5.json";



function main()
{
    csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches=>{
    csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries=>{
      // console.log(deliveries.slice(0,5));
       
        let result2=extraRunsConceded(matches,deliveries);
        saveextraruns(result2); 
        let result3=economicBowlers(matches,deliveries);
       saveEconomicBowlers(result3);
       

    });
    
  // console.log(matches[0]);
    let result=matchesPlayedPerYear(matches);
    saveMatchesPlayedPerYear(result);
    let result1=matchesWonByEachTeam(matches);
    saveMatchesWon(result1);
    let result4=matchesWonByRcb(matches);
    saveMatchesWonByRcb(result4);
    let result5=matchesWonByEachTeam1(matches);
    saveMatchesWonByEachTeam1(result5);
    
    
    
}

);
}

function saveMatchesPlayedPerYear(result)
{
    const jsonData={matchesPlayedPerYear:result};
    const jsonString=JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveextraruns(result2)
{
    const jsonData={extraRunsConceded:result2};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH2,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveMatchesWon(result1)
{
    const jsonData={matchesWonByEachTeam:result1};
    const jsonString=JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH1,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveEconomicBowlers(result3)
{
    const jsonData={economicBowlers:result3};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH3,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveMatchesWonByRcb(result4)
{
    const jsonData={matchesWonByRcb:result4};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH4,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
function saveMatchesWonByEachTeam1(result5)
{
    const jsonData={matchesWonByEachTeam1:result5};
    const jsonString=JSON.stringify(jsonData);
    
    fs.writeFile(JSON_OUTPUT_FILE_PATH5,jsonString,"utf8",err=>{
        if(err)
        {
            console.error(err);
        }
    });
    
}
main();