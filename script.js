function firstChar(text) {
  // your code here
	if(text=="" || text==" "){
		return '';
	}
	else{
		return text.charAt(text);
		
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
