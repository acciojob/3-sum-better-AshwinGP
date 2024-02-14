function threeSum(arr, target) {
// write your code here
	var add=0;
  var ag=0;
  var ct=20000000000000;  
  
  for(var i=0;i<arr.length;i++){
           
        var sub =arr.slice(i,i+3);
         add=0;
         console.log(sub);
         if(sub.length==3){
             for(j=0;j<sub.length;j++){
                    add=add+sub[j];
             }
                 console.log(add);
      
                    if(target>add){
                        ag=target-add;
                    }
                //   console.log("this is ag> "+ag);
                    if(target<add){
                        ag=add-target;
                    }
                      console.log("ag<: "+ag)
             }
             if(ag<ct)
             {
                 ct=ag;
                 var origin=add;
             }
              }
	return origin
    

}

module.exports = threeSum;
