import React from "react";

export default function Select({
  label,
  defaultValue,
  optionList,
  hidden,
  id,
  name,
  onChange,
  value,
  error,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultValue && (
          <option hidden={!!hidden} value="">
            {defaultValue}
          </option>
        )}
        {optionList?.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </>
  );
}
