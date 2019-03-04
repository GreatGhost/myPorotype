function myCall(context){
	//1
	if(typeof this !=='function'){
		throw new TypeError('error');
	}
	//2
	context=context||window;

	//3
	
	context.fn=this;

	//4
	const args=[...arguments].slice(1);
	//5
	const result=context.fn(...args);
	//6
	delete context.fn;
	//
	return result;
}
Function.prototype.myCall=myCall;
var obj={name:'1'};
getName.myCall(obj,'str1','str2');
function getName(p1,p2){
	console.log(p1,p2);
	console.log(this.name);
}


Function.prototype.myApply=function(context){
	
}