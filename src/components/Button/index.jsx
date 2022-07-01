import './styles';
import React from 'react';

function Button(props) {
  const { href, className, children } = props;
  return (
    <a href={href} className={className} props={props}>
      {children}
    </a>
  );
}

export default Button;
