define([], function(){
	return {
		"login": "login",
	    "help": "help",    // #help
    	"search/:query": "search",  // #search/kiwis
    	"search/:query/p:page": "search"   // #search/kiwis/p7
  	};
});