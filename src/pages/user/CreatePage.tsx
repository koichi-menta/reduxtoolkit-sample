import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { User, useCreateUserMutation } from "../../redux/api/user";
type ContainerProps = {};
type Props = {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreate: () => void;
  user: User | undefined;
} & ContainerProps;

const Component = ({ handleChangeInput, handleCreate, user }: Props) => (
  <div className="w-[600px] mx-auto">
    <h2>ユーザー登録</h2>
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
    <button onClick={handleCreate} className="w-full border px-4 py-1 mt-3">
      登録
    </button>
  </div>
);

const Container = (props: ContainerProps) => {
  const [userInput, setUserInput] = useState<User>({} as User);
  const [createUser, createResult] = useCreateUserMutation();
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
  const handleCreate = () => {
    createUser(userInput);
  };

  return (
    <Component
      {...props}
      handleChangeInput={handleChangeInput}
      handleCreate={handleCreate}
      user={userInput}
    />
  );
};

export default Container;
