import React, { useState, useEffect } from "react";
import usersApi from "../../api/user";
import PageLoader from "../../common/PageLoader";
import Pagination from "./Pagination";
import TableView from "./TableView";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const {
        data: { data, total },
      } = await usersApi.fetchAllUsers({
        page: currentPage,
        limit: 10,
      });
      setUsers([...data]);
      setTotalPages(Math.floor(total / 10));
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingUsers(false);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages && !loadingUsers) {
      setCurrentPage((currentPage) => currentPage + 1);
      fetchUsers();
    }
  };

  const prevPage = () => {
    if (currentPage >= 0 && !loadingUsers) {
      setCurrentPage((currentPage) => currentPage - 1);
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="usersList">
      <div className="header">
        <h1>Users list</h1>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>

      {loadingUsers ? <PageLoader /> : <TableView users={users} />}
    </div>
  );
};

export default UsersList;
