export const formatNumber = (num: number) => {
  const result = num.toString().split('').reverse().join('')
    .replace(/([0-9]{3})/g, '$1 ')
    .split('').reverse().join('');
  if (result.charAt(0) === ' ') return result.substring(1);
  return result;
};

export const formatText = (text: string) => {
  let result = text.replace(/([^A-Z])([A-Z])/g, '$1 $2');
  result = result.replace(/([^ ])([A-Z])([a-z])/g, '$1 $2$3');
  result = result.replace(/([a-z])([0-9])/g, '$1 $2');
  result = result.charAt(0).toUpperCase() + result.substring(1);
  if (result.charAt(0) === ' ') return result.substring(1);
  return result;
};
