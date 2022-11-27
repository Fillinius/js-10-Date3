const date = new Date()
console.log(date)
console.log(date.getTime())


function addDays(date, days){
  days = new Date(1970, 0, days)
  date = date.getTime() + days.getTime()
  return date
}

const sumDay = addDays(date,5)
console.log(sumDay);

const sumDay1 = addDays(date,10)
console.log(sumDay1);
