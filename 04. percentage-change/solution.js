function calculatePercentageChange(original, newAmount) {
    
  const difference = newAmount - original; 
  const percentageDifference = (difference / original ) * 100;
  
  return original !== newAmount ? Number(percentageDifference.toFixed(0)) : 0;
}


module.exports = { calculatePercentageChange };
