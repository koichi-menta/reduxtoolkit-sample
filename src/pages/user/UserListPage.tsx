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
    {!isLoading && (
      <>
        <h2 className="text-center text-xl mt-4 font-bold">ユーザーリスト</h2>
        <div className="w-[600px] mx-auto mt-6">
          <div className="flex justify-end">
            <Link to="/user/create" className="ml-auto border px-4 py-2">
              ユーザーを作成する
            </Link>
          </div>
          <table className="w-full mt-6">
            <thead>
              <tr className="text-left border-b-[1px]">
                <th>ID</th>
                <th>名前</th>
                <th>年齢</th>
                <th>趣味</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="border-t-[1px] first:border-t-0">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.age}</td>
                  <td className="p-2">{user.hoby}</td>
                  <td className="p-2">
                    <Link
                      to={`/user/${user.id}`}
                      className="block border-[1px] py-1 px-2 text-center"
                    >
                      詳細
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )}
  </div>
);

const Container = (props: ContainerProps) => {
  const { data, error, isLoading } = useGetUserListQuery();
  const user = data?.contents || [];
  console.log("error", error);

  return <Component {...props} data={user} isLoading={isLoading} />;
};

export default Container;
