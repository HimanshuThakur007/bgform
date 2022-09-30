import React  from "react";

const InputField = ({ value, id, label, name, placeholder, type, onChange,onKeyDown,onKeyUp }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      id ={id}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onKeyUp = {onKeyUp}
    />
  </div>
);

export default InputField;