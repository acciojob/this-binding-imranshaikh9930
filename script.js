//your code here
// Implementing myCall
Function.prototype.myCall = function(thisContext, ...args) {

	thisContext = thisContext || globalThis;

	const fnSymbol = Symbol();
	thisContext[fnSymbol] = this;

	const res = thisContext [fnSymbol](...args);

	delete thisContext[fnSymbol];

	return res;
  
  };
  
  // Implementing myApply
  Function.prototype.myApply = function(thisContext, args) {
    thisContext = thisContext || globalThis;

	const fnSymbol = Symbol();
	thisContext[fnSymbol] = this;

	const res = thisContext [fnSymbol](...args);

	delete thisContext[fnSymbol];

	return res;
  
  };
  
  // Implementing myBind
  Function.prototype.myBind = function(thisContext, ...args) {
     const originalFunction = this;

   
    return function(...additionalArgs) {
     
        const allArgs = [...initialArgs, ...additionalArgs];

    
        thisContext = thisContext || globalThis;

       
        const fnSymbol = Symbol();

        
        thisContext[fnSymbol] = originalFunction;

       
        const result = thisContext[fnSymbol](...allArgs);

   
        delete thisContext[fnSymbol];

      
        return result;
    };
  };
  
  module.exports = Function.prototype;
