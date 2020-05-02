document.addEventListener('DOMContentLoaded', function()
{
    let checkPageButton=document.getElementById('startTrackingButton');
    checkPageButton.addEventListener('click', function()
    {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
        {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'newDivs=[]; d1=new Date(); d2=new Date("04/08/2020");weeksLeft=Math.floor((d2.getTime()-d1.getTime())/(1000*60*60*24*7)); classDist=[]; for(j=3;j<=12;j++) classDist[j]=4; classDist[3]=2; classDist[4]=4; classDist[5]=2; ele=document.getElementById("tblMain"); for(let i=3;i<=ele.rows.length-2;i++){ ele2=ele.rows[i]; text=ele2.cells[3]; ele2.style.color="black"; if(text.innerText<=55){ele2.style.backgroundColor="red"; checkClasses(ele2,i,55);} else if(text.innerText<=75) { ele2.style.backgroundColor="yellow"; checkClasses(ele2,i,75);} else {ele2.style.backgroundColor="green"; } } getReport(ele.rows.length-2); function checkClasses(ele2,i,limit){ s=ele2.cells[2].innerText.trim(); num=parseInt(s.substring(0,s.indexOf("/"))); den=parseInt(s.substring(s.indexOf("/")+1, s.length)); console.log(num + "  " + den); console.log(((num+weeksLeft*classDist[i])/(den+weeksLeft*classDist[i]))); console.log("max classes left" + weeksLeft*classDist[i]); maxPer=((num+weeksLeft*classDist[i])/(den+weeksLeft*classDist[i])); maxClassesLeft=Math.floor(weeksLeft*classDist[i]); ff=Math.ceil((55*den-100*num)/45); sf=Math.ceil((75*den-100*num)/25); if(sf<=0) sf=""; if(ff<=0) ff=""; if(maxPer<0.55) { console.log("minimum classes to get to 55%" + Math.ceil((55*den-100*num)/45)); } else if(maxPer<0.75){console.log("minimum classes to get to 75%" + Math.ceil((75*den-100*num)/25));} newDivs[i]=document.createElement("p"); newDivs[i].innerHTML="<table style=\'background-color: cadetblue;\' width=\'100%\'  cellspacing=\'2\' cellpadding=\'2\' border=\'1\'><th>Subject</th><th>Max class left</th><th>Max %</th><th>Min classes to 55%</th><th>Min classes to 75%</th><tr><td width=\'20%\'  style=\'color:cyan\'>"+ele2.cells[0].innerText+"</td><td  style=\'color:yellow\'>"+maxClassesLeft +"</td><td  style=\'color:white\'>"+maxPer.toFixed(2)+"</td><td  style=\'color:chartreuse\'>"+ff+"</td><td style=\'color:chartreuse\'>"+sf+"</td></tr></table>";} function getReport(n){ document.getElementById("chartTeacher").innerHTML=""; for(i=3;i<=n;i++) if(newDivs[i]!=null) document.getElementById("chartTeacher").appendChild(newDivs[i]);} newDivs=null; classDist=null; maxPer=null; maxClassesLeft=null; ff=null;sf=null;'
                })
                /*BE VERY CAREFUL ABOUT USING SINGLE AND DOUBLE QUOTES. THE ENTIRE STUFF FOR CODE IS A STRING SO SINGLE QUOTES. INSIDE THAT WE NEED A NEW STRING FOR INNERHTML HENCE DOUBLE QUOTES AND WITHIN THAT STRING WE AGAIN NEED QUOTES FOR STYLE, WIDTH ETC. WE USE SINGLE QUOTES AS WE NEED TO USE ALTERNATING PAIRS OF SINGLE N DOUBLE QUOTES TO AVOID AMBIGUITY. '..."STYLE=\'..\'"'BECOMES "STYLE='..' " BUT '.."STYLE=\"..\" "' BECOMES '.."STYLE=".."' SO THIS IS CLEARLY WRONG*/
          }); 
          document.body.style.background='linear-gradient(to right, #8e2dec, #400ae1)';
          checkPageButton.style.visibility='hidden';
          /*REMOVE THE BUTTON ELSE RE-EXECUTING THE SCRIPT MEANS ALL LET VARIABLES WILL BE LET AGAIN HENCE CAUSING ERRORS*/
          
          //document.body.style.backgroundColor='green newDivs[i].innerHTML="<table width=\'100%\'  cellspacing=\'2\' cellpadding=\'2\' border=\'1\'><th>Subject</th><th>Max class left</th><th>Max %</th><th>Min classes to 55%</th><th>Min classes to 75%</th><tr><td width=\'20%\'  style=\"color:cyan\">"+ele2.cells[0].innerText+"</td><td  style=\'color:yellow\'>"+maxClassesLeft +"</td><td  style=\'color:white\'>"+maxPer.toFixed(2)+"</td><td  style=\'color:chartreuse\'>"+ff+"</td><td style=\'color:chartreuse\'>"+sf+"</td></tr></table>";' ;
    })
        
})