define("controller/demo/main",["./a","./b"],function(a){var b=a("./a"),c=a("./b");b.add(10,2),c.minus(10,2),c.go(100,100)}),define("controller/demo/a",[],function(a,b){b.add=function(a,b){console.log(a+b)}}),define("controller/demo/b",["controller/demo/a"],function(a,b){var c=a("controller/demo/a");b.minus=function(a,b){console.log(a-b)},b.go=c.add});