import { Outlet, Link } from "react-router-dom";
import { type User, useGetUserDetailQuery } from "../redux/api/user";

type ContainerProps = {};
type Props = {
  data: User | undefined;
} & ContainerProps;

const Component = ({ data }: Props) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">User List</Link>
        </li>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
      <p>{data?.name}</p>
    </nav>
    <Outlet />
  </div>
);

const Container = (props: ContainerProps) => {
  const { data } = useGetUserDetailQuery("jjad1ig4pyz");

  return <Component {...props} data={data} />;
};

export default Container;
