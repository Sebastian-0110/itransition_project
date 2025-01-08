import { useSelector, useDispatch } from "react-redux";
import { selectUser, setUser } from "src/state/slices/auth.js";

function useUpdateReduxUser() {
	const sessionUser = useSelector(selectUser);
	const dispatch = useDispatch();

	function handleReduxUserUpdate(user) {
		if (user.id === sessionUser.id) {
			dispatch(setUser(user));
		}
	}

	return handleReduxUserUpdate;
}

export default useUpdateReduxUser;