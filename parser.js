var at, //current index of JSON text
	ch; //character at current index

var next = function() {
	//increments at
	//updates ch
	at += 1;
	ch = json.charAt(at); // json is the JSON text passed into our parser
	return ch;
};

var error = function(message) {
	console.log(message);
	throw undefined;
};

var value = function() {
	switch(ch) {
		case '':
			return and();
		case '!':
			return not();
		case 'OR':
			return or();
		case 'AND':
			return and();
		case '>':
			return gt();
		case '<':
			return lt();
		case '=':
			return eq();
		case 't':
		case 'f':
			return bool();
		case 'n':
			return null_st();
		default:
			if(ch === '-' || (ch && ch >= 0 && ch <= 9)) { // number
        		return number();
      		} else {
        		error('bad JSON');
      		}
      		break;
	}
};