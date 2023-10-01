// Code your solution in this file!
const returnFirstTwoDrivers= function(driversArray){
      let result = driversArray.slice(0, 2);
    return result;
}


const returnLastTwoDrivers = function(driversArray){
 return driversArray.slice(-2);
     
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(integer) {
   return function fareMultiplier(multiper){
    return integer * multiper
   }
}

const fareDoubler = createFareMultiplier(2) ;

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }
  