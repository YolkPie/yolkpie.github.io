webpackJsonp([15],{166:/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/boilerplates/rxjs/codepan.js ***!
  \********************************************************************//*! dynamic exports provided *//*! all exports used */function(a){a.exports="/*\r\n  timer takes a second argument, how often to emit subsequent values\r\n  in this case we will emit first value after 1 second and subsequent\r\n  values every 2 seconds after\r\n*/\r\nconst source = Rx.Observable.timer(1000, 2000);\r\n//output: 0,1,2,3,4,5......\r\nconst subscribe = source.subscribe(val => console.log(val));\r\n"}});