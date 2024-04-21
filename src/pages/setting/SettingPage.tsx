import { useDispatch } from "react-redux";
import { settingInput } from "../../redux/slice/settingSlice";
import { Link } from "react-router-dom";

type ContainerProps = {};
type Props = {
  handleChange: (e: any) => void;
  handleConfirmButton: () => void;
} & ContainerProps;

const Component = ({ handleChange, handleConfirmButton }: Props) => (
  <div>
    <input type="text" name="companyName" onChange={(e) => handleChange(e)} />
    <button onClick={handleConfirmButton}>
      <Link to={`/setting/confirm`}>確認する</Link>
    </button>
  </div>
);

const Container = (props: ContainerProps) => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const input = {
      name: "companyName",
      value: e.target.value,
    };
    dispatch(settingInput(input));
  };
  const handleConfirmButton = () => {};

  return (
    <Component
      {...props}
      handleChange={handleChange}
      handleConfirmButton={handleConfirmButton}
    />
  );
};

export default Container;
