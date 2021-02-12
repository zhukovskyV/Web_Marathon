let Number = 1;
let BigInt = 1n;
let String = "it is string"
let Boolean = true;
let NULL = null;
let undef;
let obj = {};
let sym = Symbol("a");
function lol() {}

alert( `Number is ${
    typeof(Number)}\nBigInt is ${
    typeof(BigInt)}\nString is ${
    typeof(String)}\nBoolean is ${
    typeof(Boolean)}\nNULL is ${
    typeof(NULL)}\nundef is ${
    typeof(undef)}\nobj is ${
    typeof(obj)}\nsym is ${
    typeof(sym)}\nlol is ${
    typeof(lol)}\n`);