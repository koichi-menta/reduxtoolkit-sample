type ContainerProps = {};
type Props = {} & ContainerProps;

const Component = ({}: Props) => <div>404 not found</div>;

const Container = (props: ContainerProps) => {
  return <Component {...props} />;
};

export default Container;
