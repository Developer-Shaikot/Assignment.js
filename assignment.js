

function kilometerToMeter(kilometer){
    const meter= kilometer/ 1000;
    return meter;
}
const roadMeter = kilometerToMeter(5000);
console.log(roadMeter);  



function budgetCalculator(watch, mobile, laptop){
    const classicwatch = watch * 3;
    const android = mobile * 3;
    const hp = laptop * 3;
    const total = classicwatch + android + hp;
    return total;
}
const value = budgetCalculator(50, 100, 500);
console.log(value); 



function hotelCost(day){
	cost = [100,80,50];
	c = 0;
	sum = 0;
	for(i=0;i < day;i++){
		if(i == 10 || i == 20){ c+=1; }
		sum += cost[c];
	}
	return sum;
}

console.log(hotelCost(22));


function megaFriend(names) {
    var presentName = names[0];
    for (var i=0; i<names.length;i++)
    {
        var currentName=names[i];
        if(currentName.length> presentName.length){
            presentName=currentName;
        }
    }
    return presentName;
    
}
var output= megaFriend(['Akash','Plabon','abrarfahim','Rayhanul'])
console.log(output);



