const majorColors = ["WHITE", "RED", "BLACK", "YELLOW", "VIOLET"];
const minorColors = ["BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"];
function colorPair(){
           this.majorColor;           
		   this.minorColor;
		   }
colorPair.prototype.toString=function(){
	return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
}
function getColor(pairNumber)
{
	let minorSize = majorColors.length;
	let majorSize = minorColors.length;
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new colorPair();
	pair.majorColor = majorColors[majorIndex];
	pair.minorColor = minorColors[minorIndex];
	return pair;
}
function getPairNumber(pair)
        {
        let majorIndex = -1;
        for (let i = 0; i < majorColors.length; i++){
                if (majorColors[i] == pair.majorColor)
                {
                    majorIndex = i;
                    break;
                }}
let minorIndex = -1;
            for (let i = 0; i < minorColors.length; i++)
            {
                if (minorColors[i] == pair.minorColor)
                {
                    minorIndex = i;
                    break;
                }
            }
    if (majorIndex == -1 || minorIndex == -1)
            {
                throw `Unknown Colors:${pair.toString()}`;
            }
     return (majorIndex * minorColors.length) + (minorIndex + 1);
	 }
