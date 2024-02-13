function threeSum(arr, target) {
// write your code here
	var a=0;
	var b=0;
	for(let i=0;i<arr.length;i++){
		a=a+[i];
		if(target==a-1||target==a+1){
			b=a;
		}
	}
  return b;
}

module.exports = threeSum;
