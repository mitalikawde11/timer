/*
  Implement an alarm clock / timer which will beep after a specified amount of time has passed. 
  The user can specify an unlimited number of alarms using command line arguments.
*/

const alarms = (process.argv).slice(2);

for(const ele of alarms) {
  // if an input is NaN and a negative number then skip it 
  if(!Number.isNaN(ele) && ele > 0){
    let t = ele * 1000;
    
    setTimeout(() => {
    process.stdout.write('\x07');
   }, t);

  }
    
}
