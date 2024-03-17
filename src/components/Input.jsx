export default function Input({
  label,
  type,
  id,
  name,
  onChange,
  value,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type ? type.toLowerCase() : "text"}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
      <p className="error">{error}</p>
    </div>
  );
}
