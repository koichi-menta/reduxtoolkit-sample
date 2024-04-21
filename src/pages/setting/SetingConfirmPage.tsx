import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
type ContainerProps = {};
type Props = {
  settingData: any;
} & ContainerProps;

const Component = ({ settingData }: Props) => (
  <div>{settingData.companyName}</div>
);

const Container = (props: ContainerProps) => {
  const settingData = useSelector((state: RootState) => state.counter.setting);
  console.log("settingData", settingData);

  useEffect(() => {
    // settignDataが空なら入力画面にリダイレクトする処理を書く
  }, [settingData]);

  return <Component {...props} settingData={settingData} />;
};

export default Container;
