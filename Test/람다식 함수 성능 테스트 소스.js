//람다식과 기존 함수 표현식 성능 보기 - 동일 메카니즘 로직;

//자바나 기타부타 컴파일 랭귀지에선 람다식이 빠르다는게 입증됨;
//인터프리터 랭귀지에선 내부 컴파일러가 돌지 않는 이상 빠를수가 없음;
//람다식으로는 정의 함수(무조건 최고로 빠름, 비동기 로직상 제약은 존재함)를 사용할수 없음 - 사용할수있으나 함정 구문 참조;

//IE Edge
var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => { i, ++g; return n.$once } ); exec( io ); }a.length = 0;console.log( "es5함수1 : " + ( new Date() - st ).toString() );
var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => ( i, ++g, n.$once ) ); exec( io ); }a.length = 0;console.log( "es5함수2 : " + ( new Date() - st ).toString() );
var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = function( n ){ i, ++g; return n.$once; }; exec( io ); }a.length = 0;console.log( "기본함수1 : " + ( new Date() - st ).toString() );
var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function( i, n ){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ c( i, n ); }a.length = 0;console.log( "기본함수2 : " + ( new Date() - st ).toString() );
var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function(){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ exec( c ); }a.length = 0;console.log( "정의함수 : " + ( new Date() - st ).toString() );


//firefox;
var ml = 1000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => { i, ++g; return n.$once } ); exec( io ); }a.length = 0;console.log( "es5함수1 : " + ( new Date() - st ).toString() );
var ml = 1000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => ( i, ++g, n.$once ) ); exec( io ); }a.length = 0;console.log( "es5함수2 : " + ( new Date() - st ).toString() );
var ml = 1000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = function( n ){ i, ++g; return n.$once; }; exec( io ); }a.length = 0;console.log( "기본함수1 : " + ( new Date() - st ).toString() );
var ml = 1000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function( i, n ){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ c( i, n ); }a.length = 0;console.log( "기본함수2 : " + ( new Date() - st ).toString() );
var ml = 1000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function(){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ exec( c ); }a.length = 0;console.log( "정의함수 : " + ( new Date() - st ).toString() );


//Chrome & NodeJS & electron;
var ml = 10000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => { i, ++g; return n.$once } ); exec( io ); }a.length = 0;console.log( "es5함수1 : " + ( new Date() - st ).toString() );
var ml = 10000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => ( i, ++g, n.$once ) ); exec( io ); }a.length = 0;console.log( "es5함수2 : " + ( new Date() - st ).toString() );
var ml = 10000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = function( n ){ i, ++g; return n.$once; }; exec( io ); }a.length = 0;console.log( "기본함수1 : " + ( new Date() - st ).toString() );
var ml = 10000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function( i, n ){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ c( i, n ); }a.length = 0;console.log( "기본함수2 : " + ( new Date() - st ).toString() );
var ml = 10000000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function(){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ exec( c ); }a.length = 0;console.log( "정의함수 : " + ( new Date() - st ).toString() );



//람다식과 기존 함수 표현식 성능 보기 - 람다식 함정 - 매우 빈번함 - 범용적 라이브러리들도 이함정에 많이 빠져있음;
var exec = function( fn ){ return fn( 10 ); }
var i=0, iLen=1000000;
var st = new Date();
for( ; i<iLen; ++i ) exec( ( n ) => ( 5 + n ) );
console.log( new Date() - st );


//당연히 이게 빠름;
var exec = function( n ){ return 5 + n; }
var st = new Date();
var i=0, iLen=1000000;
for( ; i<iLen; ++i ) exec( 10 );
console.log( new Date() - st );



//계속 돌려보기;
var fn = function(){

	console.log("--------------------------------------------------");
	var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => { i, ++g; return n.$once } ); exec( io ); }a.length = 0;console.log( "es5함수1 : " + ( new Date() - st ).toString() );
	var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = ( n => ( i, ++g, n.$once ) ); exec( io ); }a.length = 0;console.log( "es5함수2 : " + ( new Date() - st ).toString() );
	var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ var io = a[ i ] = function( n ){ i, ++g; return n.$once; }; exec( io ); }a.length = 0;console.log( "기본함수1 : " + ( new Date() - st ).toString() );
	var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function( i, n ){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ c( i, n ); }a.length = 0;console.log( "기본함수2 : " + ( new Date() - st ).toString() );
	var ml = 900000;var a = [];var g = 0;var n = { $once : function(){ return ++g; } };var exec = function( fn ){ return fn( n ); };var c = function(){ i, ++g; return n.$once; };var st = new Date();var i=0; iLen=ml; for( ; i<iLen; ++i ){ exec( c ); }a.length = 0;console.log( "정의함수 : " + ( new Date() - st ).toString() );


	setTimeout( fn, 1 );
};
setTimeout( fn, 1 );