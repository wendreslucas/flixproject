import React from 'react';

function FormField(props) {
  const { label, name, onChange, type, value } = props;
  return (
    <div>
      <label>
        {label}
        <input name={name} onChange={onChange} type={type} value={value} />
      </label>
    </div>
  );
}

export default FormField;
