export const getShortDescription = (text, maxCount) => {
  return text.length <= maxCount ? text :
    text.substring(0, maxCount).trim() + '...';
};
