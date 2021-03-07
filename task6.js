// task 6

function error_printer(s) {
        let l = s.length; 
        let count = 0; 
        for (i=0;i<l;i++){ 
        let  newReg = new RegExp('[^a-m]'); 
           if(newReg.test(s[i])==true) { 
             count = count + 1; 
           }
          }
          return(count+'/'+l);
    }


let s = 'abczyw'
console.log(error_printer(s))
