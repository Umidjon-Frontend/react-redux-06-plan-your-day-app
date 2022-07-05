import React, { useEffect } from "react";
import DaysItem from "./DaysItem";
import { useHttp } from "../useHttp";
import { useSelector, useDispatch } from "react-redux";
import { loadPlanDays } from "../Redux/action";

function Dashboard() {
  const { planDays } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:3001/planDays").then((data) =>
      dispatch(loadPlanDays(data))
    );
  }, []);
  console.log(planDays);
  return (
    <div className="row mt-4 mb-4">
      <div className="col-md-12">
        {planDays
          .map((item, indx) => {
            return <DaysItem key={indx} {...item} />;
          })
          .reverse()}
      </div>
    </div>
  );
}

export default Dashboard;
