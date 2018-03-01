/*jslint jquery:true */
/**
 
 * usage: var cardDeck = new playingCards(conf);
 * override defaults for playingCards() and for card() with
 *    playingCards.defaults
 *    playingCards.card.defaults
 
 */

if (Array.indexOf === undefined) {
    // doens't exist in oldIE
    /* Finds the index of the first occurence of item in the array, or -1 if not found */
    Array.prototype.indexOf = function(v) {
        for (var i = 0; i < this.length; ++i) {
            if (this[i] === v) {
                return i;
            }
        }
        return - 1;
    };
}
 (function(window,document,undefined){

    /**
     * The playing card library core object
     *
     * @param obj conf Configuration option overrides
     *
     * @return obj an instance of the constructed library object (deck of cards)
     */
    var playingCards = window.playingCards = function(conf) {
        var c = objExtend(playingCards.defaults, conf);
        if (! (this instanceof playingCards)) {
            // in jquery mode
            c.el = $(this); // capture the context (this will be the cardTable/Deck element)
            return new playingCards(c);
        }
        this.conf = c;
        this.init();
        if (this.conf.startShuffled) {
            this.shuffle(5);
        }
        return this;
    };
    /**
     * initializer - builds the deck
     */
    playingCards.prototype.init = function() {
        this.cards = [];
        var o = this.conf,
            l,i,s,r,j;
        // populate draw pile
        for (i = 0; i < o.decks; i++) {
            // standard
            for (s in o.suits) {
                for (r in o.ranks) {
                    l = this.cards.length;
                    this.cards[l] = new playingCards.card(r, o.ranks[r], s, o.suits[s]);
                }
            }
           
        }
    };
   
   
    playingCards.prototype.draw = function() {
        return this.cards.length > 0 ? this.cards.pop() : null;
    };
   
    playingCards.prototype.addCard = function(card) {
        this.cards.push(card);
    };
   
    playingCards.prototype.count = function() {
        return this.cards.length;
    };


var cards1 = new Array();
var cards2 = new Array();
var cards3 = new Array();

function spreadToArrays(cards)
{
    cards1=[];
    cards2=[];
    cards3=[];
  for(var i =0 ;i<cards.length;i++)
  {

if(i==0||i==3||i==6||i==9||i==12||i==15||i==18)
{

    cards1.push(cards[i]);
}

else if(i==1||i==4||i==7||i==10||i==13||i==16||i==19)
{

    cards2.push(cards[i]);
}

else if(i==2||i==5||i==8||i==11||i==14||i==17||i==20)
{

    cards3.push(cards[i]);
}



  }


}


playingCards.prototype.shuffle1=function()
{



spreadToArrays(this.cards);

console.log(cards1.length);
console.log(cards2.length);
console.log(cards3.length);


var k=0;
  for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards2[j];
    k++;

  }

  for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards1[j];
    k++

  }
   for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards3[j];
    k++

  }


}


playingCards.prototype.shuffle2=function()
{



spreadToArrays(this.cards);

console.log(cards1.length);
console.log(cards2.length);
console.log(cards3.length);


var k=0;
  for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards3[j];
    k++;

  }

  for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards2[j];
    k++

  }
   for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards1[j];
    k++

  }


}




playingCards.prototype.shuffle3=function()
{



spreadToArrays(this.cards);

console.log(cards1.length);
console.log(cards2.length);
console.log(cards3.length);


var k=0;
  for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards2[j];
    k++;

  }

  for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards3[j];
    k++

  }
   for(var j = 0;j<7;j++)
  {

    this.cards[k] = cards1[j];
    k++

  }


}

playingCards.prototype.showC=function()
{



                document.getElementById('cardD').innerHTML = "";
				        document.getElementById('ca').innerHTML = "";
                document.getElementById('cardD').innerHTML += "<h2>Your Card</h2> ";
                document.getElementById('cardD').innerHTML += "<br>";
                document.getElementById('cardD').innerHTML += "<br>";
                

               
               document.getElementById('cardD').innerHTML+=this.cards[10].getHTML();



               document.getElementById('tryAgain').style.display = 'block';


}


    /**
     * shuffle the deck
     *
     * @param int n The number of times to shuffle (defaults to 5)
     */
    playingCards.prototype.shuffle = function(n) {
        if (!n) {
            n = 5;
        }
        var l = this.cards.length,
            r,tmp,i,j;

        for (i = 0; i < n; i++) {
            for (j = 0; j < l; j++) {
                r = Math.floor(Math.random() * l);
                tmp = this.cards[j];
                this.cards[j] = this.cards[r];
                this.cards[r] = tmp;
            }
        }
    };

   

    /*
     * requires jquery (currently)
     * TODO: put this in a UI extension pack along with all the other demo methods
     */
    playingCards.prototype.spread = function(dest) {
        if (!this.conf.el && !dest) {
            return false;
        }
        var to = this.conf.el || dest,
            l = this.cards.length,
            i;
        to.html('');
        // clear (just a demo)
        for (i = 0; i < l; i++) {


           
            to.append(this.cards[i].getHTML());
        }
    };
    /**
     * configuration defaults
     */
    playingCards.defaults = {
        "decks": 1,
        // TODO: enable 'font' option -- loading cards.ttf
        "renderMode": 'css',
        // For a coustom " of "-String
        "ofString": " of ",
        "startShuffled": true,
        // "jokers": 2,
        // "jokerText": "Joker",
        "ranks": {
            // "2": "Two",
            // "3": "Three",
            "4": "Four",
            "5": "Five",
            "6": "Six",
            "7": "Seven",
            "8": "Eight",
            // "9": "Nine",
            // "10": "Ten",
            // "J": "Jack",
            // "Q": "Queen",
            "K": "King",
            "A": "Ace"
        },
        "suits": {
            "S": "Spades",
            "D": "Diamonds",
            // "C": "Clubs",
            "H": "Hearts"
        }
    };

    /**
     * create a playing card
     *
     * @param string rank The numeric or letter value of the card (short value)
     * @param string rankString The full text representation of the rank (localized)
     * @param string suit The letter value of the suite (short value)
     * @param string suitString The full text representation of the suit (localized)
     * @param obj conf Overriding configuration
     *
     * @return object The card object
     */
    playingCards.card = function(rank, rankString, suit, suitString, conf) {
        if (! (this instanceof playingCards.card)) {
            return new playingCards.card(rank, rankString, suit, suitString, conf);
        }

        this.conf = objExtend(playingCards.card.defaults, conf);

        if (suit === undefined) {
            //Arguments are rank, suit
            suit = rankString;
            rankString = playingCards.defaults.ranks[rank];
            suitString = playingCards.defaults.suits[suit];
        }

        this.rank = rank;
        this.rankString = rankString;
        this.suit = suit;
        this.suitString = suitString;
        return this;
    };
    /**
     * configuration defaults
     */
    playingCards.card.defaults = {
        "singleFace": false
        // false will use a different image for each suit/face, true will use diamond image for all
    };
    
    /**
     * Simple object extend to override default settings
     */
    function objExtend(o, ex) {
        if (!ex) {
            return o;
        }
        for (var p in ex) {
            o[p] = ex[p];
        }
        return o;
    }

   
   })(this,this.document);
