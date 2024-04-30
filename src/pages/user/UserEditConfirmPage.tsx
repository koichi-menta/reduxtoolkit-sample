import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import {
  User,
  useUpdateUserMutation,
  useUpdateUserNoTagMutation,
} from "../../redux/api/user";
type ContainerProps = {};
type Props = {
  userEditInput: User;
  handleUpdate: () => void;
  handleUpdateNoCache: () => void;
} & ContainerProps;

const Component = ({
  userEditInput,
  handleUpdate,
  handleUpdateNoCache,
}: Props) => (
  <div className="w-[500px] mx-auto">
    <h2>内容確認</h2>
    <p>名前：{userEditInput.name}</p>
    <p>年齢：{userEditInput.age}</p>
    <p>趣味：{userEditInput.hoby}</p>
    <div>
      <button onClick={handleUpdate} className="px-4 py-2 border">
        更新(キャッシュあり)
      </button>
    </div>
    <div>
      <button onClick={handleUpdateNoCache} className="px-4 py-2 border mt-4">
        更新(キャッシュなし)
      </button>
    </div>
  </div>
);

const Container = (props: ContainerProps) => {
  const [updateUser, updatedResult] = useUpdateUserMutation();
  const [updateUserNoCache, updatedNoCacheResult] =
    useUpdateUserNoTagMutation();
  const userEditInput = useSelector(
    (state: RootState) => state.userEditInput.userEditInput
  );
  console.log("settingData", userEditInput);
  const handleUpdate = () => {
    updateUser(userEditInput);
  };
  const handleUpdateNoCache = () => {
    updateUserNoCache(userEditInput);
  };
  useEffect(() => {
    // settignDataが空なら入力画面にリダイレクトする処理を書く
  }, [userEditInput]);

  return (
    <Component
      {...props}
      userEditInput={userEditInput}
      handleUpdate={handleUpdate}
      handleUpdateNoCache={handleUpdateNoCache}
    />
  );
};

export default Container;
