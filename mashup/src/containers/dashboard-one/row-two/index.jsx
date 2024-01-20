import { Col } from "../../../components/grid/grid";
import Chart from "../../../components/chart-placeholder";
import { useData } from "@motor-js/engine";

const RowTwo = () => {
  const cols = [
    {
      qField: "[OrderDate]",
      qLabel: "OrderDate",
    },
    {
      qField: "=Sum(Sales*Quantity)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet } = useData({ cols });

  console.log(dataSet);

  return (
    <>
      <Col lg={8} xl={7} mt="10px">
        <Chart />
      </Col>
      <Col lg={4} xl={5} mt="10px">
        <Chart />
      </Col>
    </>
  );
};

export default RowTwo;
