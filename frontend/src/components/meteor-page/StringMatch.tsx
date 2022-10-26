export interface StringMatchProps {
  text: string;
  filter: string;
}

const StringMatch = ({ text, filter }: StringMatchProps) => {
  const cutMatchedString = (text: string, filter: string) => {
    const parts = [];
    while (text.toLowerCase().includes(filter)) {
      const idx = text.toLowerCase().indexOf(filter);
      parts.push(text.substring(0, idx));
      parts.push(text.substring(idx, idx + filter.length));

      text = text.substring(idx + filter.length);
    }

    parts.push(text);
    return parts;
  };


  if (filter.length === 0 || !text.toLowerCase().includes(filter)) {
    return <h3 className='meteor-item-card__title'>{text}</h3>;
  }

  return (
    <h3 className='meteor-item-card__title'>
      {cutMatchedString(text, filter).map((part, index) =>
        <span className={`${index % 2 === 1 ? '--string-match' : ''}`}>{part}</span>,
      )}
    </h3>
  );
};

export default StringMatch;
