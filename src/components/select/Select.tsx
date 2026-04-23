import "./Select.scss";

type SelectProps = {
  text: string;
  name: string;
  value?: string;
  isRequired: boolean;
  handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Select({
  text,
  name,
  value,
  isRequired,
  handleSelect,
}: SelectProps) {
  return (
    <div className="select">
      <label htmlFor={text}>{text}</label>
      <select
        value={value}
        name={name}
        required={isRequired}
        onChange={handleSelect}
      >
        <option value="">Bitte wählen</option>
        <option value="Männlich">Männlich</option>
        <option value="Weiblich">Weiblich</option>
        <option value="Divers">Divers</option>
      </select>
    </div>
  );
}
