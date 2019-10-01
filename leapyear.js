Leapyear = (year) => {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}
console.log("2016 ",Leapyear(2016))
console.log("100",Leapyear(100))