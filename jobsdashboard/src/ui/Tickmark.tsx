import React from 'react';
import '../Tickmark.css';

type Props = {
    className?:string
}

const Tickmark : React.FC<Props> = ({className}) => {
  return (
    <div className={className+" tickmark"}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="tickmark-circle" cx="26" cy="26" r="25" fill="none" />
        <path className="tickmark-check" fill="none" d="M14,27.2l7.1,7.2l16.7-16.8" />
      </svg>
    </div>
  );
}

export default Tickmark;