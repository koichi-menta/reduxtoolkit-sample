import { useEffect, useState } from "react";
import {
  useGetUserDetailQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  type User,
} from "../../redux/api/user";
import { useParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-types
type ContainerProps = {};
type Props = {
  isLoading: boolean;
  user: User | undefined;
  handleUpdate: () => void;
  handleDelete: () => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & ContainerProps;

const Component = ({
  isLoading,
  user,
  handleUpdate,
  handleChangeInput,
  handleDelete,
}: Props) => (
  <div>
    {isLoading && <p>ロード中...</p>}
    {!isLoading && (
      <div>
        <input
          type="text"
          value={user?.name || ""}
          name="name"
          onChange={(e) => handleChangeInput(e)}
        />
        <input
          type="text"
          value={user?.age || ""}
          name="age"
          onChange={(e) => handleChangeInput(e)}
        />
        <input
          type="text"
          value={user?.hoby || ""}
          name="hoby"
          onChange={(e) => handleChangeInput(e)}
        />

        <button onClick={handleUpdate}>更新</button>
        <button onClick={handleDelete}>削除</button>
      </div>
    )}
  </div>
);

const Container = (props: ContainerProps) => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserDetailQuery(id || "");
  const [updateUser, updatedResult] = useUpdateUserMutation();
  const [deleteUser, deletedResult] = useDeleteUserMutation();
  const [userInput, setUserInput] = useState<User>({} as User);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "age":
        setUserInput({
          ...userInput,
          age: Number(e.target.value),
        });
        break;
      case "name":
        setUserInput({
          ...userInput,
          name: e.target.value,
        });
        break;
      case "hoby":
        setUserInput({
          ...userInput,
          hoby: e.target.value,
        });
        break;
      default:
        setUserInput({
          ...userInput,
          [e.target.name]: e.target.value,
        });
    }
  };

  const handleUpdate = () => {
    updateUser(userInput);
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
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
};

export default Container;
