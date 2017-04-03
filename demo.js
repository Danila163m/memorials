var a = 5;
var b = 13;

~~3.232323232; // 3

a.toString(2); // 01010101
a.toFixed(2);


NaN;
isNaN(1);
Infinity;

var string1 = "Go";
var string2 = "treee";
string2.length;
"dance".length;

var uni = "\u1552";
"\u1552".length;


"abcdef".charAt(2);

"abcdef".charAt(-1);

12 + " or " + "20";

var obj = {};


//Объект
var person = {
	"name" : "Alex",
	"age" : 25,
	wife : {
		name : "Eve",
		age : 24
	},
};

person.name 
person.wife.age

person.name = "Danila";


//Прототип
type : "human"
	head : 1
	legs : 2	

var Human = {
	type : "human",
	head : 1,
	legs : 2		
};

var Megahuman = Object.create(Human);

Megahuman.head = 2;

Megahuman.head; // 2
delete Megahuman.head;
Megahuman.head; // 1


//Функции и Замыкания
function getIt () {
    return this.x;
};

var obj1 = { get : getIt, x : 1 };
var obj2 = { get : getIt, x : 2 };

obj1.get();

var Nothing = { base : 22, 
	avr : function (x,y) {
		return this.x*y+base
	};
};

var a = 11;

(function() { console.log(a); })()
(function() { console.log(a); var a = 12; })()// ==> undefine 

//Замыкания(Clousers)

var getAnswer = function() {
	var answer = 42;//внутри функции
	return answer;
};

getAnswer();

//Фишка 1 (Замыкание)

var getAnswer = (function() {
	var answer = 42;

	return function inner() {
		return answer;
	};
}())

getAnswer();

//Фишка 2 (Замыкание)

function greeting (name) {
    var text = "Hello " + name;
    var greet = function() { console.log(text); }
    return greet;
}

a1 = greeting("Danila");
a1();

var a2 = greeting("Alex");
a2()

//Наследование 
var alex = new Human();//Не как в java/C++(Вызов конструктора) Human.prototype !!!


// конструктор базовых объектов
function base(spec) {
    var that = {}; // создать пустой объект
    that.name = spec.name; // создать свойство name и присвоить ему значение name от spec
    return that; // вернуть этот объект
}
 
// конструктор объектов, наследующих от "базового" объекта
function child(spec) {
    var that = base(spec); // создать объект с помощью "базового" конструктора
    that.sayHello = function() { об// добавить фунцкию в новый ъект
        return 'Hello, I\'m ' + that.name;
    };
    return that; // вернуть этот объект
}
 
// использование
var object = child({ name: 'a functional object' });
result.textContent = object.sayHello();

//

function Human(name) {
    this.name = name;
}

Human.prototype.say = function(what) {
    console.log(this.name + " : " + what);
}

var alex = new Human("Alex");

alex.say("hello!");

Human("Galex")//глобальная перемена name

// перепишем без глобальных переменных

function Human(name) {
	if (! (this instanceof Human)) {
		return new Human(name);
	}
	this.name = name;
}

//Super?

function Human(name) { this.name = name; }

Human.prototype.say = function(what) {
	console.log(this.name + " : " + what);
}

var alex = new Human("Alex");
alex.say("hi")
var jack = new Human("Jack")
jack.say("hi")

alex.say.apply(jack, ["hi"]) // apply ( thisArg ,[]); (call (,,,,,))

function speaksTo(someone) {
	console.log (this.name + " speaks to " + someone.name);
}

//Что предложил Дуглас Крокфорд

function object(o) {
	function F() {}
	F.prototype = o;
	return new F();	
}

var parent = { a : 1 };
var child = object(parent);

child.a // 1

//Ecmascript 5

Object.create();

var child = Object.create(parent);

//Arrays

var myArray = [];

var cities = ['Moscow', 'Samara', 'SPB', 'London'] // Recomend

var a = new Array(); // Быть осторожней

var b = new Array('Hey', 'You', 'Me');

var c = new Array(3); // => [*, *, *]

a.length // last element + 1

a.length = 2 // cat to 2 elements

.delete // Удаляет и оставляет пустату

.splice(3, 1) // со здвигом
//      |  |
//  index col-vo

a.reduce() // применяет функцию к элементам массива

b.concat(a, "end") // 

a.push(8)
a.pop(8);

a.join('') //Соединяет в строку c разделителе(separate)

a.reverse()

a.sort(); // по умолчанию Думает что все елементы строки 

function compare(a, b) {
	return a - b;
}

a.sort(compare)


'В js ассоциативные массивы' - 
obj['something'] = 45 // нет индекса это свойство объекта

//Регулярные выражения





















