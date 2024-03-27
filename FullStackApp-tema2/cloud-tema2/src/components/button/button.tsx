interface ButtonProps {
  count: number;
  handleClick: () => void;
}

export const Button = ({ count, handleClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${count % 2 == 0 ? "backgroundRed" : "backgroundBlue"}`}
    ></button>
  );
};
