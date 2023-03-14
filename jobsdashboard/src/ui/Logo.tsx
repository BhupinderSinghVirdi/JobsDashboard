import React from 'react';

type Props = {
    className?:string
}

const Logo : React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
        <img src='/TeraSearch.jpg'></img>
    </div>
  );
}

export default Logo;