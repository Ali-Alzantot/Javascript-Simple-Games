

 (function($,window,document,undefined) {    

    if ($.fn) {
         // we can use library methods
         // attach this as an extension to the library
         $.fn.playingCards = playingCards;
    }
    /*
     * requires jquery (currently)
     */


     var first = true;
     playingCards.prototype.spread = function(dest, slowly) {

        document.getElementById('cardD').innerHTML="";
		document.getElementById('ca').innerHTML="";
         if (!this.conf.el && !dest) {
             return false;
         }
         var to = this.conf.el || dest,
             l = this.cards.length,
             i;
         to.html('');
         // clear (just a demo)
         if (slowly) {


if(first)
{
          document.getElementById("infoHeader").innerHTML="Now Choose The Column Where Your Card Appear x3";
         var shuff =    document.getElementById('shuffler');
         shuff.parentNode.removeChild(shuff);
            var spre =    document.getElementById('SpreadSlow');
             spre.parentNode.removeChild(spre);
document.getElementById("next").style.display = 'block';
first = false;

     }
             var thisThis = this;
             var i = 0;
             var endinterval = setInterval(function() {


                if(i%3==0)
                {
document.getElementById('ca').innerHTML+="<br>";
document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

             
            }
			
                document.getElementById('ca').innerHTML+=thisThis.cards[i].getHTML();





                 if(i+1==21)
{
document.getElementById('ca').innerHTML+="<br>";
document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";

document.getElementById('ca').innerHTML+="<br>";
  document.getElementById('ca').innerHTML+="<input type='radio' name='choose' id='1' style='margin-left:2em'>";
document.getElementById('ca').innerHTML+="<input type='radio' name='choose' id='2'style='margin-left:5em'>";
  document.getElementById('ca').innerHTML+="<input type='radio' name='choose' id='3'style='margin-left:5em'>";
  document.getElementById('ca').innerHTML+="<br><br>";
}
                 i++;
                 if (i >= l) {
                     clearInterval(endinterval);
                 }
             }, 50);

           
         }


          else {
             for (i = 0; i < l; i++) {



          if(i%7==0)
          {

 document.getElementById('cardD').innerHTML+="<br>";
document.getElementById('cardD').innerHTML+="<br>";

document.getElementById('cardD').innerHTML+="<br>";

document.getElementById('cardD').innerHTML+="<br>";

document.getElementById('cardD').innerHTML+="<br>";

document.getElementById('cardD').innerHTML+="<br>";


          }

             document.getElementById('cardD').innerHTML+=this.cards[i].getHTML();


             }
         }


     };

// function changeOrder()
// {
    

// if(document.getElementById("1").checked==true)
//  {
//      console.log("1");
     
//  }

    
// }








    /**
     * generate (and cache) html for the card
     * 
     * @return string The HTML block to show the card
     */
    playingCards.card.prototype.getHTML = function() {
        if (this.html) {
            return this.html;
        }
        this.suitCode = "&nbsp;";
        this.colorCls = '';
        switch (this.suit) {
        case "S":
            this.suitCode = "&spades;";
            break;
        case "D":
            this.colorCls = "red";
            this.suitCode = "&diams;";
            break;
        case "C":
            this.suitCode = "&clubs;";
            break;
        case "H":
            this.colorCls = "red";
            this.suitCode = "&hearts;";
            break;
        }

        // concatenating strings with "+" is slow, using array join is faster: http://code.google.com/speed/articles/optimizing-javascript.html
        // TODO: run perf test to be sure that in this case we are getting better perf in IE
        var txt = this.rank;
        if (this.rank === "N") {
            txt = this.rankString.split('').join('<br />');
        }
        var strBuild = ['<div class="playingCard"><div class="front ', this.colorCls, '"><div class="corner">', txt, '<br />', this.suitCode, '</div>'];
        strBuild = strBuild.concat(this.buildIconHTML());
        strBuild = strBuild.concat('<div class="corner cornerBR flip">', txt, '<br />', this.suitCode, '</div></div></div>');
        this.html = strBuild.join('');
        return this.html;
    };
    /**
      * build the middle of the playing card HTML
     *
     * @return string The HTML block for the middle of the card
      */
    playingCards.card.prototype.buildIconHTML = function() {
        // TODO: could we optimize this with a for loop that breaks/continues to named positions?
        if (this.rank === "A") {
            return ['<div class="suit suit0">', this.suitCode, '</div>'];
        }
        if (this.rank === "J" || this.rank === "Q" || this.rank === "K" || this.rank === "N") {
            var n = 'D';
            var imgPrefix = this.conf.imgPrefix || '';
            if (!this.conf.singleFace) {
                n = this.suit;
            }
            return [
            '<div class="suit A1">', this.suitCode, '</div>',
            '<img class="suit ', this.rank, ' face" src="', imgPrefix, 'img/', this.rank, n, '.gif"/>',
            '<div class="suit C5 flip">', this.suitCode, '</div>'
            ];
        }
        var ret = [],
            list = ['4', '5', '6', '7', '8', '9', '10'];
        // all of these will have A1, A5, C1, C5 icons
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit A1">', this.suitCode, '</div>',
            '<div class="suit A5 flip">', this.suitCode, '</div>',
            '<div class="suit C1">', this.suitCode, '</div>',
            '<div class="suit C5 flip">', this.suitCode, '</div>'
            ]);
        }
        list = ['2', '3'];
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit B1">', this.suitCode, '</div>',
            '<div class="suit B5 flip">', this.suitCode, '</div>'
            ]);
        }
        list = ['3', '5', '9'];
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit B3">', this.suitCode, '</div>'
            ]);
        }
        list = ['6', '7', '8'];
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit A3">', this.suitCode, '</div>',
            '<div class="suit C3">', this.suitCode, '</div>'
            ]);
        }
        list = ['7', '8', '10'];
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit B2">', this.suitCode, '</div>'
            ]);
        }
        list = ['8', '10'];
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit B4 flip">', this.suitCode, '</div>'
            ]);
        }
        list = ['9', '10'];
        if (list.indexOf(this.rank) !== -1) {
            ret = ret.concat([
            '<div class="suit A2">', this.suitCode, '</div>',
            '<div class="suit A4 flip">', this.suitCode, '</div>',
            '<div class="suit C2">', this.suitCode, '</div>',
            '<div class="suit C4 flip">', this.suitCode, '</div>'
            ]);
        }
        return ret;
    };
})(typeof(jQuery) !== 'undefined' ? jQuery: function(){},this,this.document);