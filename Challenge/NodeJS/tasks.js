var tasks =[{taskname:"play", checked:"no"}];
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
  else if (textarr[0]==='add'){

    add(textarr[1]);
  }
  else if (textarr[0]==='remove'){

    remove(textarr[1]);
  }
  else if (textarr[0]==='edit'){
     var indx=textarr[1];
     var chng=textarr[2];
    edit(indx,chng);
  }

  else if (textarr[0]==='checked'){

    checked(textarr[1]);
  }
  else if (textarr[0]==='unchecked'){

    unchecked(textarr[1]);
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
console.log('the possible commands is \n'+'hello\n'+'quit\n'+'exit\n'+'hello(arg)'+'list\n'+'add\n'+'remove\n');


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

function list(){
 
for (let i=0; i<tasks.length; i++){
  if (tasks[i].checked !=="done"){
  console.log(i+1+"-"+"[ ]"+tasks[i].taskname);
}
else{
  console.log(i+1+"-"+"[✓]"+tasks[i].taskname);
}

}
}
function add(v){
if (!v){
  console.log("ERROR")
}
else{
  var task={taskname:v,checked:'no'};
  tasks.push(task);
 
}

}
function remove(w){
if (!w){
  tasks.pop();
 

}
else if(w>tasks.length){
console.log("this task isn't existed!")

}
else {
/*var index= w.parseInt();*/
tasks.splice(w-1,1);

}
}
function edit(indx1,chng1){
if(!indx1 && !chng1){
  console.log("ERROR");
}
else if(indx1 && !chng1){
  var task={taskname:indx1,checked:'no'};
  tasks.pop();
  tasks.push(task);
}
else{
  var task={taskname:chng1,checked:'no'};
  tasks[indx1-1]=task;

}


}

function checked(n){
  if (!n){
    console.log("ERROR")
  }
  else{
  tasks[n-1].checked="done";
  }
   
  }

  function unchecked(n){
    if (!n){
      console.log("ERROR")
    }
    else{ 
    tasks[n-1].checked="no";}
     
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
