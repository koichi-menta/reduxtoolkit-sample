import { Outlet, Link } from "react-router-dom";

type ContainerProps = {};
type Props = {} & ContainerProps;

const Component = ({}: Props) => (
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
    </nav>
    <Outlet />
  </div>
);

const Container = (props: ContainerProps) => {
  return <Component {...props} />;
};

export default Container;
