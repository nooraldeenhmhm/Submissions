
const stringSize = (text) => {
   return text.length;
    

}
const replaceCharacterE = (text) => {
return text.replace("e", " ");
}
const concatString = (text1, text2) => {
   return text1+text2;

}
const showChar5 = (text) => {
   return text.charAt(4);

}
const showChar9 = (text) => {
   return text.substr(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
return text.trim();
}
const IsString = (text) => {
    if (typeof text == 'string' || text instanceof String) {
        return true;
    } else {
        return false;
}
}

const getExtension = (text) => {
   var x= text.indexOf(".");
  return  text.substr(x+1,(text.length)-1);

}
const countSpaces = (text) => {
   return text.match((/ /g) || []).length;
    
}
const InverseString = (text) => {
var s=text.split("");
var r=s.reverse();
return r.join("");

}

const power = (x, y) => {
  return  Math.pow(x,y);

}
const absoluteValue = (num) => {
    return Math.abs(num);

}
const absoluteValueArray = (array) => {
   for(var i=0;i<=array.length-1;i++){
       array[i]=Math.abs(array[i]);
   }
   return array;

}
const circleSurface = (radius) => {
    return Math.ceil((Math.PI*(Math.pow(radius,2))));

}
const hypothenuse = (ab, ac) => {
    var bc ;
    bc=Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2));
return bc;

}
const BMI = (weight, height) => {
    var bmi=(weight/(Math.pow(height,2)))
   
    return  Math.round( bmi * 100 + Number.EPSILON ) / 100;

}

const createLanguagesArray = () => {
    var x=["Html","CSS","Java","PHP"];
return x;
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5];

}

const replaceElement = (languages) => {
    languages.splice(2, 1,'Javascript');
return languages;


}

const addElement = (languages) => {
    languages.push('Ruby', 'Python');
   return languages;

}

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;

}

const removeFirst = (languages) => {
   
    languages.shift();
    return languages;
  
}

const removeLast = (languages) => {
    languages.pop();
    return languages;

}

const convertStrToArr = (social_arr) => {
    var arr = social_arr.split(",");
return arr;

}

const convertArrToStr = (languages) => {
    return languages.join();

}

const sortArr = (social_arr) => {
    return social_arr.sort();

}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}