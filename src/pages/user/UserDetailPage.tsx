import { useEffect, useState } from "react";
import {
  useGetUserDetailQuery,
  useDeleteUserMutation,
  type User,
} from "../../redux/api/user";
import { userEditInput } from "../../redux/slice/userEditInputSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// eslint-disable-next-line @typescript-eslint/ban-types
type ContainerProps = {};
type Props = {
  isLoading: boolean;
  user: User | undefined;
  handleConfirm: () => void;
  handleDelete: () => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & ContainerProps;

const Component = ({
  isLoading,
  user,
  handleConfirm,
  handleChangeInput,
  handleDelete,
}: Props) => (
  <div>
    {isLoading && <p>ロード中...</p>}
    {!isLoading && (
      <div className="w-[500px] mx-auto">
        <div>
          <label htmlFor="name">
            名前：
            <input
              id="name"
              type="text"
              value={user?.name || ""}
              name="name"
              className="border-[1px]"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="age">
            年齢：
            <input
              id="age"
              type="text"
              value={user?.age || ""}
              name="age"
              className="border-[1px]"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="hoby">
            趣味：
            <input
              id="hoby"
              type="text"
              value={user?.hoby || ""}
              name="hoby"
              className="border-[1px]"
              onChange={(e) => handleChangeInput(e)}
            />
          </label>
        </div>
        <div className="flex flex-col justify-between">
          <button
            className="border-[1px] py-1 px-4 mt-8"
            onClick={handleConfirm}
          >
            更新内容を確認する
          </button>
          <button
            className="border-[1px] py-1 px-4 mt-8"
            onClick={handleDelete}
          >
            削除
          </button>
        </div>
      </div>
    )}
  </div>
);

const Container = (props: ContainerProps) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserDetailQuery(id || "");
  const [deleteUser, deletedResult] = useDeleteUserMutation();
  const [userInput, setUserInput] = useState<User>({} as User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "age":
        setUserInput({
          ...userInput,
          age: Number(e.target.value),
        });
        break;
      default:
        setUserInput({
          ...userInput,
          [e.target.name]: e.target.value,
        });
    }
  };

  const handleConfirm = () => {
    dispatch(userEditInput(userInput));
    navigate("/user/confirm");
  };

  const handleDelete = () => {
    deleteUser(id || "");
  };

  useEffect(() => {
    if (data) {
      setUserInput({
        id: data.id,
        name: data.name,
        age: data.age,
        hoby: data.hoby,
      });
    }
  }, [data]);

  return (
    <Component
      {...props}
      user={userInput}
      isLoading={isLoading}
      handleChangeInput={handleChangeInput}
      handleConfirm={handleConfirm}
      handleDelete={handleDelete}
    />
  );
};

export default Container;
