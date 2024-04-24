import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { User, useUpdateUserMutation } from "../../redux/api/user";
type ContainerProps = {};
type Props = {
  userEditInput: User;
  handleUpdate: () => void;
} & ContainerProps;

const Component = ({ userEditInput, handleUpdate }: Props) => (
  <div>
    <h2>内容確認</h2>
    <p>名前：{userEditInput.name}</p>
    <p>年齢：{userEditInput.age}</p>
    <p>趣味：{userEditInput.hoby}</p>
    <button onClick={handleUpdate}>更新</button>
  </div>
);

const Container = (props: ContainerProps) => {
  const [updateUser, updatedResult] = useUpdateUserMutation();
  const userEditInput = useSelector(
    (state: RootState) => state.userEditInput.userEditInput
  );
  console.log("settingData", userEditInput);
  const handleUpdate = () => {
    updateUser(userEditInput);
  };
  useEffect(() => {
    // settignDataが空なら入力画面にリダイレクトする処理を書く
  }, [userEditInput]);

  return (
    <Component
      {...props}
      userEditInput={userEditInput}
      handleUpdate={handleUpdate}
    />
  );
};

export default Container;
