import { useState } from 'react';

const ReadMore = ({ text, maxLength }: any) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <pre className='text-sm text-black whitespace-pre-wrap break-words font-montserrat'>
        {isReadMore ? text.slice(0, maxLength) : text}
        {text.length > maxLength && (
          <h6 onClick={toggleReadMore} style={{ color: 'blue', cursor: 'pointer' }}>
            {isReadMore ? '... Ler mais' : ' Mostrar menos'}
          </h6>
        )}
      </pre>
    </div>
  );
};

export default ReadMore;