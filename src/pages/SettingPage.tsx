type ContainerProps = {};
type Props = {} & ContainerProps;

const Component = ({}: Props) => <div>hello setting</div>;

const Container = (props: ContainerProps) => {
  return <Component {...props} />;
};

export default Container;
