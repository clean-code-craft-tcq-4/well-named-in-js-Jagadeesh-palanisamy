import {getColor,getPairNumber} from './colorCoder.js'	 
  function colorResult(pairNumber){
	 let testPair1 = getColor(pairNumber);
     console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
	  if(pairNumber===4){
	  console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "BROWN");
	 }else if(pairNumber===5){
	 console.assert(testPair1.majorColor == "WHITE");
			console.assert(testPair1.minorColor == "SLATEGRAY");
	}else if(pairNumber===23){
	 console.assert(testPair1.majorColor == "RED");
			console.assert(testPair1.minorColor == "GREEN");
	}}
	 function colorPairResult(testPair2){
	   pairNumber =getPairNumber(testPair2);
       console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
	  }
	 function test(){
			colorResult(4);
            colorResult(5);
			colorResult(23);
			let testPair2 = new colorPair();
			testPair2.majorColor="YELLOW";
			testPair2. minorColor ="GREEN";
            colorPairResult(testPair2);
			console.assert(pairNumber==18);
			testPair2 = new colorPair();
			testPair2.majorColor="RED";
			testPair2. minorColor ="BLUE";
           colorPairResult(testPair2);
			console.assert(pairNumber==6);
}
test();
