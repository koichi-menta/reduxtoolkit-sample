import { Outlet, Link } from "react-router-dom";
import { type User, useGetUserDetailQuery } from "../redux/api/user";

type ContainerProps = {};
type Props = {
  data: User | undefined;
} & ContainerProps;

const Component = ({ data }: Props) => (
  <>
    <div className="border-b-[1px]">
      <nav className="w-[1000px] flex justify-between p-2 mx-auto">
        <ul className="flex gap-4">
          <li className="text-center p-1">
            <Link to="/">User List</Link>
          </li>
          <li className="text-center p-1">
            <Link to="/setting">Setting</Link>
          </li>
          <li className="text-center p-1">
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
        <p>{data?.name}</p>
      </nav>
    </div>
    <Outlet />
  </>
);

const Container = (props: ContainerProps) => {
  const { data } = useGetUserDetailQuery("jjad1ig4pyz");

  return <Component {...props} data={data} />;
};

export default Container;
