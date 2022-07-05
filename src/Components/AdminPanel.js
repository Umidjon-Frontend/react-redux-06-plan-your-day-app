import React, { useEffect, useState } from "react";
import DaysItem from "./DaysItem";
import { useHttp } from "../useHttp";
import { useSelector, useDispatch } from "react-redux";
import { loadPlanDays, createdPlan } from "../Redux/action";
import { v4 } from "uuid";

function AdminPanel() {
  const [days, setDays] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [week, setWeek] = useState("");
  const [namoz, setNamoz] = useState([]);
  const [nomoz1, setNomoz1] = useState("");
  const [nomoz2, setNomoz2] = useState("");
  const [nomoz3, setNomoz3] = useState("");
  const [nomoz4, setNomoz4] = useState("");
  const [nomoz5, setNomoz5] = useState("");
  const [nomoz6, setNomoz6] = useState("");
  const [todo, setTodo] = useState([]);
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const [task5, setTask5] = useState("");
  const [task6, setTask6] = useState("");
  const [task7, setTask7] = useState("");
  const [task8, setTask8] = useState("");
  const [task9, setTask9] = useState("");
  const [task10, setTask10] = useState("");

  const { planDays } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:3001/planDays").then((data) =>
      dispatch(loadPlanDays(data))
    );
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const newDataPlans = {
      id: v4(),
      days,
      day,
      month,
      year,
      week,
      namoz: [
        {
          namozName: "Bomdod",
          namozTime: nomoz1,
          isNamoz: false,
        },
        {
          namozName: "Peshin",
          namozTime: nomoz2,
          isNamoz: false,
        },
        {
          namozName: "Asr",
          namozTime: nomoz3,
          isNamoz: false,
        },
        {
          namozName: "Shom",
          namozTime: nomoz4,
          isNamoz: false,
        },
        {
          namozName: "Xufton",
          namozTime: nomoz5,
          isNamoz: false,
        },
        {
          namozName: "Qazo",
          namozTime: nomoz6,
          isNamoz: false,
        },
      ],
      todo: [
        {
          todoId: 1,
          todoName: task1,
          todoComplated: false,
        },
        {
          todoId: 2,
          todoName: task2,
          todoComplated: false,
        },
        {
          todoId: 3,
          todoName: task3,
          todoComplated: false,
        },
        {
          todoId: 4,
          todoName: task4,
          todoComplated: false,
        },
        {
          todoId: 5,
          todoName: task5,
          todoComplated: false,
        },
        {
          todoId: 6,
          todoName: task6,
          todoComplated: false,
        },
        {
          todoId: 7,
          todoName: task7,
          todoComplated: false,
        },
        {
          todoId: 8,
          todoName: task8,
          todoComplated: false,
        },
        {
          todoId: 9,
          todoName: task9,
          todoComplated: false,
        },
        {
          todoId: 10,
          todoName: task10,
          todoComplated: false,
        },
      ],
    };
    request(
      "http://localhost:3001/planDays",
      "POST",
      JSON.stringify(newDataPlans)
    )
      .then((res) => console.log(res))
      .then(dispatch(createdPlan(newDataPlans)))
      .catch((e) => console.log(e));
  };
  return (
      <div className="row mt-5 mb-5">
        <div className="col-md-5 shadow rounded p-2 h-100">
          <form onSubmit={handleSave}>
            <div className="row mt-3">
              <div className="col-md-12 mt-2 mb-2">
                <h1 className="text-center">Plan your Day</h1>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Week"
                    value={week}
                    onChange={(e) => setWeek(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h1 className="text-center">Namoz vaqti</h1>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bomdod"
                    value={nomoz1}
                    onChange={(e) => setNomoz1(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Peshin"
                    value={nomoz2}
                    onChange={(e) => setNomoz2(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Asr"
                    value={nomoz3}
                    onChange={(e) => setNomoz3(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shom"
                    value={nomoz4}
                    onChange={(e) => setNomoz4(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Xufton"
                    value={nomoz5}
                    onChange={(e) => setNomoz5(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Qazo"
                    value={nomoz6}
                    onChange={(e) => setNomoz6(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <h1 className="text-center">Vazifalar</h1>
              </div>
              <div className="col-md-12">
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 01</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task1}
                    onChange={(e) => setTask1(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 02</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task2}
                    onChange={(e) => setTask2(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 03</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task3}
                    onChange={(e) => setTask3(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 04</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task4}
                    onChange={(e) => setTask4(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 05</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task5}
                    onChange={(e) => setTask5(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 06</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task6}
                    onChange={(e) => setTask6(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 07</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task7}
                    onChange={(e) => setTask7(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 08</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task8}
                    onChange={(e) => setTask8(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 09</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task9}
                    onChange={(e) => setTask9(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">Task 10</span>
                  <input
                    type="text"
                    className="form-control"
                    value={task10}
                    onChange={(e) => setTask10(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-success w-100">Save</button>
          </form>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12">
              {planDays.map((item, indx) => {
                return <DaysItem key={indx} {...item} />;
              }).reverse()}
            </div>
          </div>
        </div>
      </div>
  );
}

export default AdminPanel;
