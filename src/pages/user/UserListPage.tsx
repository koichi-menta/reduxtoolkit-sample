import { useGetUserListQuery, type User } from "../../redux/api/user";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-types
type ContainerProps = {};
type Props = {
  isLoading: boolean;
  data: User[];
} & ContainerProps;

const Component = ({ isLoading, data }: Props) => (
  <div>
    {isLoading && <p>ロード中...</p>}
    {!isLoading &&
      data.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>名前: {user.name}</p>
          <p>年齢: {user.age}</p>
          <p>趣味: {user.hoby}</p>
          <Link to={`/user/${user.id}`}>詳細</Link>
        </div>
      ))}
  </div>
);

const Container = (props: ContainerProps) => {
  const { data, error, isLoading } = useGetUserListQuery();
  const user = data?.contents || [];
  console.log("error", error);

  return <Component {...props} data={user} isLoading={isLoading} />;
};

export default Container;
