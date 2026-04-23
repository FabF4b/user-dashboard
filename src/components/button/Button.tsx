type ButtonProps = {
  text: string;
  type?: "submit" | "reset" | "button";
  form?: string;
  id?: string;
  clickEvent?: () => void;
};

export default function Button({
  text,
  id,
  form,
  type,
  clickEvent,
}: ButtonProps) {
  return (
    <button id={id} onClick={clickEvent} form={form} type={type}>
      {text}
    </button>
  );
}
