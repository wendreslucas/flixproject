import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }) => {
    if (value) {
      return (
        value &&
        css`
          &:not([type='color']) + ${Label.Text} {
            transform: scale(0.6) translateY(-10px);
          }
        `
      );
    }
  }}
`;

function FormField(props) {
  const { label, name, onChange, suggestions, type, value } = props;
  const fieldId = `id_${name}`;
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const hasSuggestion = Boolean(suggestions);

  return (
    <Container>
      <Label>
        <Input
          as={tag}
          autoComplete="off"
          id={fieldId}
          list={hasSuggestion ? `suggestionFor_${fieldId}` : undefined}
          name={name}
          onChange={onChange}
          // autoComplete={hasSuggestion ? 'off' : 'on'}
          type={type}
          value={value}
        />
        <Label.Text>{label}</Label.Text>
        {hasSuggestion && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option
                key={`suggestionFor_${fieldId}_option${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </Container>
  );
}

export default FormField;
