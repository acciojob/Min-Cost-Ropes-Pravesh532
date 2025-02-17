function mincost(arr)
{ 

	 arr.sort((a, b) => a - b); // रस्सियों को छोटी से बड़ी क्रम में सॉर्ट करें
    let cost = 0;

    while (arr.length > 1) {
        // सबसे छोटी दो रस्सियों को जोड़ें
        let first = arr.shift();
        let second = arr.shift();
        let newRope = first + second;

        cost += newRope;

        // नई रस्सी को सही स्थान पर डालें (Sorted Order Maintain करें)
        let index = arr.findIndex(x => x > newRope);
        if (index === -1) {
            arr.push(newRope);
        } else {
            arr.splice(index, 0, newRope);
        }
    }

    return cost;

	


	
	
// return the min cost
  
}

module.exports=mincost;
