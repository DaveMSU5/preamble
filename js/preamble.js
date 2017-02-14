$(document).ready(function(){

//hard-coded Preamble and set it equal to str variable
var str = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.";

var count = 0;
// splits string by looking for spaces
words = str.split(" "); 
    for (i=0 ; i < words.length ; i++){
       // inner loop counts
       if (words[i] != "")
          count += 1; 
    }
//sends total_count to innerHTML for display using <div> element and assigns total_count to count
var total_count = document.getElementById("total_count");
total_count.innerHTML = count;

//sends start_t to innerHTML for display using <div> element
var start_t = document.getElementById("start_t");
//uses match method and word boundaries to find all words that begin wtih 't'
//b matches at a position that is followed by a word character but not proceeded by one or vice versa
//S matches a single space character
//g and i are just global and case INsensitive search
start_t.innerHTML = str.match(/(\b t\S+\b)/ig);
//used the .length property to return the number of words that start with 't' 
numb_start_t.innerHTML = (str.match(/(\bt\S+\b)/ig)).length;

//sends end_e to innerHTML for display using <div> element
var end_e = document.getElementById("end_e");
//uses match method and word boundaries to find all words that end in 'e'
end_e.innerHTML = str.match(/(\b \w+(e\b))/ig);
//w matches any non-word character
//e\b allows the match method to search for 'e' at the end of each word
numb_end_e.innerHTML = (str.match(/(\b\w+(e\b))/ig)).length;


//sends numb_both to innerHTML for display using <div> element
var numb_both = document.getElementById("numb_both");
//stores number of words that begins with the letter 't' 
var first_numb = str.match(/(\bt\S+\b)/ig).length;
//converts the string to an integer
var converted_first_numb = parseInt(first_numb);
//stores number of words that ends with the letter 'e'
var second_numb = (str.match(/(\b\w+(e\b))/ig)).length;
//converts the string to an integer
var converted_second_numb = parseInt(second_numb);
//adds both the numbers
numb_both.innerHTML = converted_first_numb + converted_second_numb;

});