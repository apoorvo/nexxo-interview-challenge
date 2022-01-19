import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { HEADERS } from "../table_constants";

const TableView = ({ users }) => {
  const headers = useMemo(() => HEADERS, []);
  const data = useMemo(() => users, []);
  const history = useHistory();
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => {
            return <th key={index}>{header.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr
              className="userRow"
              key={row.id}
              onClick={() => {
                history.push(`/users/${row.id}`);
              }}
            >
              {headers.map((header, index) => (
                <td key={index}>{row[header.key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableView;
