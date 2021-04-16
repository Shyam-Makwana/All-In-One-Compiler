
# Project definition
**Make a compiler for language described as follows-
Following is a valid sentence in a string, char and int operation based compiler. Generate its appropriate
language description and compiler-**

Valid sentences in language :
*	string s;
*	string str = “Shyam”;
*	string str = pqr + xyz;
*	string str = “Shyam” + “Mahesh”;
*	char c;
*	char c = ‘A’;
*	int pos = pqr ? xyz;

# Grammer Rules
```
START ->  EXPR SEMICOLON NEWLINE

EXPR  ->  'string' VARNAME STR 
       |  'char' VARNAME CHAR
       |  'int' VARNAME INT

STR   ->  ASSGN STR1 
       |  ε  
STR1  ->  VARNAME SOP VARNAME 
       |  "VALUESTR" STR2     
STR2  ->  SOP "VALUESTR" 
       |  ε                                 

CHAR  ->  ASSGN CHAR1                                	      
CHAR1 ->  'VALUECHAR'                                    

INT   ->  ASSGN INT1                                  	    	   
INT1  ->  VARNAME IOP VARNAME                     

ASSGN ->  '='
SOP   ->  '+' 
       | '-' 
       | '<->'
IOP   ->  '?'
 
```

# WebApp
Technologies used : HTML ,  bootstrap , jquery , NodeJS , Express 
	
###  To Run locally 
* clone the repo
* run  ```npm install```  
* run ``` npm start```

