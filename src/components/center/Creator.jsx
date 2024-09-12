import React from 'react';
import Text from './Text';

function Creator() {
    const data = [
        {t1:"creator", t2:"carter"},{t1:"new york", t2:"los angeles"}
    ]
  return (
    <div className='flex items-center justify-between gap-28'>
        {data.map((item, index) => (
            <div key={index}> <Text t1={item.t1} t2={item.t2}/> </div>
        ))}
    </div>
  );
}

export default Creator;
