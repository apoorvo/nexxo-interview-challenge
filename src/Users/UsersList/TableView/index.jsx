import React, { useMemo } from "react";
import { HEADERS } from "../table_constants";

const TableView = ({ users }) => {
  const headers = useMemo(() => HEADERS, []);
  const data = useMemo(() => users, []);
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => {
            return <th>{header.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr>
              {headers.map((header) => (
                <td>{row[header.key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableView;
