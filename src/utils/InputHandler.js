const handleMilliseconds = (value) => {
  const target = parseInt(value);
  if (isNaN(target) || target < 0 || target > 999) {
    return false;
  }
  return true;
};

const handleTime = (value) => {
  const target = parseInt(value);
  if (isNaN(target) || target < 0 || target > 59) {
    return false;
  }
  return true;
};

const handleNumber = (value) => {  
  const target = parseInt(value);  
  if (isNaN(target) || target < 0) {
    return false;
  }
  return true;
};

const inputHandler = {
  hours: handleNumber,
  minutes: handleTime,
  seconds: handleTime,
  milliseconds: handleMilliseconds,
  distance: handleNumber,  
};

export default inputHandler;
