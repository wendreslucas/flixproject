import './styles';
import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  const { to, className, children } = props;
  return (
    <Link to={to} className={className} props={props}>
      {children}
    </Link>
  );
}

export default Button;
