// Monsters Script

function Book(_book,_number){
	this.book = _book;
	this.number = _number;
	
	this.updateBook = function(){
		this.bookLink = "img/"+this.book+""+this.number+".jpg";
	}
}

var firstBook = new Book("book","1");
var secondBook = new Book("book","2");
var thirdBook = new Book("book","3");
var fourthBook = new Book("book","4");
var fifthBook = new Book("book","5");
var sixthBook = new Book("book","6");
var seventhBook = new Book("book","7");



firstBook.updateBook();
secondBook.updateBook();
thirdBook.updateBook();
fourthBook.updateBook();
fifthBook.updateBook();
sixthBook.updateBook();
seventhBook.updateBook();


var booksArray = [firstBook,secondBook,thirdBook,fourthBook,fifthBook,sixthBook,seventhBook];

			for(var i in booksArray){
				i = parseInt(i);
				var idName = booksArray[i].name;
				//console.log(booksArray[i]);
				document.write("<img id='"+idName+"' src='"+booksArray[i].bookLink+"' onclick='clickBook(this)'/>");
				console.log(1+i);
				if((1+i)%4==0){
					console.log(1+i);
					document.write("<br/>");
				}
			}

			function clickBook(_obj){
				
				var color;
				for(var i in booksArray){
					if(booksArray[i].name === _obj.id){
						color = monsterArray[i].color;
						monsterArray[i].setMood("mad");

					} else{
						booksArray[i].setMood("neut");
					}
					booksArray[i].updateBook();
					document.getElementById(booksArray[i].name).setAttribute("src",booksArray[i].bookLink);
				}
				if(color == undefined)
					color = "white";

				document.body.style.backgroundColor = color;
			}