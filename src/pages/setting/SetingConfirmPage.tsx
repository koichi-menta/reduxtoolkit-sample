import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { ReserveInput } from "../../redux/slice/settingSlice";
type ContainerProps = {};
type Props = {
  reserveData: ReserveInput;
} & ContainerProps;

const Component = ({ reserveData }: Props) => (
  <div>
    <h2>内容確認</h2>
    <p>予約者：{reserveData.reserver}</p>
    <p>利用日：{reserveData.dateOfUse}</p>
    <p>備考：{reserveData.remarks}</p>
  </div>
);

const Container = (props: ContainerProps) => {
  const reserveData = useSelector((state: RootState) => state.counter.reserve);
  console.log("settingData", reserveData);

  useEffect(() => {
    // settignDataが空なら入力画面にリダイレクトする処理を書く
  }, [reserveData]);

  return <Component {...props} reserveData={reserveData} />;
};

export default Container;
