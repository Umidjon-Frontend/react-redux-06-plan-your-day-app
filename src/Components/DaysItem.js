import React from "react";

function DaysItem({ id, days, day, month, year, week, namoz, todo }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="card p-2 mb-4">
      <div className="card-header bg-secondary text-white abs-day">
        <h1 className="text-center text-uppercase">Plan your day</h1>
        <span className="pos-day">{days}</span>
      </div>
      <div className="card-body">
        <h1 className="text-center border-bottom border-3 pb-2 border-secondary mb-4">
          {day}-{months[month-1]} {week} {year}-Year
        </h1>
        <div className="card border-3 border-secondary p-3">
          <h1 className="text-center font-weight-bold text-secondary pb-2 border-bottom border-3 border-secondary">
            Namoz vaqti
          </h1>
          <div className="d-flex flex-row justify-content-around">
            {namoz.map((item) => {
              return (
                <label className="d-flex flex-column align-items-center">
                  <span>{item.namozName}</span>
                  <span className="border-bottom border-3">
                    {item.namozTime}
                  </span>
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    checked={item.isNamoz}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="border-3 border-secondary pt-3 m-0">
          <h1 className="text-center mb-4">Vazifalar</h1>
          <div className="card border-3 border-secondary p-2 m-0">
            <ul className="list-group list-group-flush">
              {todo.map((item, indx) => {
                return (
                  <li className="list-group-item border-bottom border-secondary d-flex justify-content-between align-items-center">
                    <h3 className="m-0">
                      {indx + 1}. {item.todoName}
                    </h3>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={item.todoComplated}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysItem;
