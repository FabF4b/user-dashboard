import "./Input.scss";

type InputProps = {
  text: string;
  type: string;
  value?: string;
  pattern?: string;
  name: string;
  isRequired: boolean;
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  text,
  type,
  value,
  name,
  pattern,
  isRequired,
  handleInput,
}: InputProps) {
  return (
    <div className="input">
      <label htmlFor={text}>{text}</label>
      <input
        id={text}
        type={type}
        name={name}
        pattern={pattern}
        value={value}
        required={isRequired}
        onChange={handleInput}
      />
    </div>
  );
}
