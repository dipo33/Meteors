export const formatNumber = (num: number) => {
  const result = num.toString().split('').reverse().join('')
    .replace(/([0-9]{3})/g, '$1 ')
    .split('').reverse().join('');
  if (result.charAt(0) === ' ') return result.substring(1);
  return result;
};
