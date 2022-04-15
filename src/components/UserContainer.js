import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

function UserContainer({ usersData, fetchUsers }) {


   useEffect(() => {
      fetchUsers();
   }, []);


   return usersData.loading ? (
      <h2>Loading</h2>
   ) : usersData.error ? (
      <h2>{usersData.error}</h2>
   ) : (
      <div>
         <h2>User List</h2>
         <div>
            {usersData &&
               usersData.users &&
               usersData.users.map((user) => <p>{user.name}</p>)}
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      usersData: state.users,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchUsers: () => dispatch(fetchUsers()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
