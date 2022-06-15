import {majorColors,minorColors} from './colorCoder.js';
const colorPairs = [];
let pairNo = 1;
for(let i=0;i<majorColors.length;i++){
  for(let j=0;j<minorColors.length;j++){
    let objecc={};
    objecc={"PairNo":pairNo,
     "MajorColor":majorColors[i],
     "MinorColor":minorColors[j]
    }
    pairNo++;
    colorPairs.push(objecc)
    
  }
}
console.log(colorPairs)
