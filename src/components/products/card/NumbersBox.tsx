import { useState } from 'react';
import { Number, NumberBox, NumberWrapper } from './NumbersBox.css';

interface Props {
  imagesOfNumber: number;
  setNumber: (value: number) => void;
}

const NumbersBox = ({ imagesOfNumber, setNumber }: Props) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const OnClickHandeler = (num: number) => {
    setNumber(num);
    setCurrentNumber(num);
  };

  const OnMouseEnterHandeler = (num: number) => {
    setNumber(num);
  };

  const OnMouseLeaveHandeler = () => {
    setNumber(currentNumber);
  };

  return (
    <div className={NumberWrapper}>
      {Array.from({ length: imagesOfNumber }, (_, i) => i + 1).map((num) => (
        <div
          className={NumberBox}
          onClick={() => OnClickHandeler(num - 1)}
          onMouseEnter={() => OnMouseEnterHandeler(num - 1)}
          onMouseLeave={OnMouseLeaveHandeler}
        >
          <div key={num} className={Number}>
            {num}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NumbersBox;
