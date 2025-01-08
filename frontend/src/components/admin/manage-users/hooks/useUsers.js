import { useContext } from "react";
import UserContext from "src/components/admin/manage-users/contexts/UserContext.js";

const useUsers = () => {
	return useContext(UserContext);
}

export default useUsers;