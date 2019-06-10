
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
 text = text.replace('\n','').trim();
  var textarr=text.split(" ");
  
  
  if (textarr[0] === 'quit' || text==='exit') {
    quit();
  }

  else if (textarr[0]==='help'){
    help();
  }
  
  
   else if(textarr[0] ==='hello'){
    hello(textarr[1]);

  }
  else if (textarr[0]==='list'){

    list();
  }
 
  
 else {
    unknownCommand(text);
  }
}
/**
 * 

this function return list of possible commands 
@returns {void}

 */
function help(){
console.log('the possible commands is \n'+'hello\n'+'quit\n'+'exit\n'+'hello(arg)');


}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(m){
  if (!m){
console.log("hello!")

  }
 else {
 var x= "hello "+m;
  console.log(x.trim() +'!');
}
}
var tasks =[];
function list(){
 tasks=["task 1", "task 2"];
for (let i=0; i<=tasks.length-1; i++){
  console.log(i+1+"-"+tasks[i]);
}

}




/**
 * Exits the application
 * 
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


// The following line starts the application
startApp("Noor Alhamedi")
