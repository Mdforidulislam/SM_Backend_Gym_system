const startOfDay = new Date();
startOfDay.setHours(0,0,0,0);

const endOfDay = new Date(); 
endOfDay.setHours(23,59,59,999);

console.log(startOfDay,endOfDay);
