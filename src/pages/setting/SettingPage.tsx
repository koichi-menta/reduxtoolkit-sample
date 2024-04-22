import { useDispatch } from "react-redux";
import {
  reserveInput,
  type ReserveInput,
} from "../../redux/slice/settingSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type ContainerProps = {};
type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleConfirmButton: () => void;
} & ContainerProps;

const Component = ({ handleChange, handleConfirmButton }: Props) => (
  <div>
    <div>
      <label htmlFor="reserver">
        予約者：
        <input
          id="reserver"
          type="text"
          name="reserver"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
    <div>
      <label htmlFor="dateOfUse">
        利用日：
        <input
          id="dateOfUse"
          type="text"
          name="dateOfUse"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
    <div>
      <label htmlFor="remarks">
        備考：
        <input
          id="remarks"
          type="text"
          name="remarks"
          onChange={(e) => handleChange(e)}
        />
      </label>
    </div>
    <button onClick={handleConfirmButton}>確認する</button>
  </div>
);

const Container = (props: ContainerProps) => {
  const [inputForm, setInputForm] = useState<ReserveInput>({} as ReserveInput);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleConfirmButton = () => {
    dispatch(reserveInput(inputForm));
    navigate("/setting/confirm");
  };

  return (
    <Component
      {...props}
      handleChange={handleChange}
      handleConfirmButton={handleConfirmButton}
    />
  );
};

export default Container;
