export const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (arr) => {
  const randomIndex = getRandomIntegerNumber(0, arr.length);
  return arr[randomIndex];
};

export const getMixedArray = (arr) => {
  const result = [];
  while (arr.length > 0) {
    const random = getRandomIntegerNumber(0, arr.length - 1);
    const elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
};

export const getRandomQuantityElements = (elements, min, max, separator) => {
  const arr = elements.slice();
  const newArr = getMixedArray(arr).splice(0, getRandomIntegerNumber(min, max));
  return newArr.join(separator);
};

export const generateRandomBoolean = () => Math.random() > 0.5;

export const generateRandomDate = () => {
  const currentDate = new Date();
  currentDate.setFullYear(getRandomIntegerNumber(currentDate.getFullYear(), currentDate.getFullYear() - 100));
  currentDate.setMonth(currentDate.getMonth() - getRandomIntegerNumber(1, 12));
  currentDate.setDate(currentDate.getDate() - getRandomIntegerNumber(1, 31));
  return currentDate;
};
