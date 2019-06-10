
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
  
  var textarr=text.split(" ");
  
  if (textarr[0] === 'quit\n' || text==='exit\n') {
    quit();
  }
  else if (textarr[0]==='help\n'){
    help();
  }
  
  
   else if(textarr[0] ==='hello'){
    hello(textarr[1]);

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
console.log('the possible commands is \n'+'hello\n'+'quit\n'+'exit\n');


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
 var x= "hello "+m;
  console.log(x.trim() +'!');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


// The following line starts the application
startApp("Noor Alhamedi")
