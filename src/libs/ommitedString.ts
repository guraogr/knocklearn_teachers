export const ommitedString = (text: string) => {
  const MAX_LENGTH = 138;
  if (text.length > MAX_LENGTH) {
    return text.substr(0, MAX_LENGTH) + '...';
  }
  return text;
};
