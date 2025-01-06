import AdminButton from "./AdminButton.jsx";
import { SkeletonPlaceholder, SkeletonButtonPlaceholder } from "./Skeletons.jsx";

export const columns = [
	{ label: "Id", field: "id", labelOnMobile: true },
	{ label: "Username", field: "username", labelOnMobile: true },
	{ label: "Email", field: "email",labelOnMobile: true },
	{ label: "Role", field: (user) => user.isAdmin ? "Admin": "User",  labelOnMobile: true },
	{ label: "Actions", field: (user) => <AdminButton user={user} />, labelOnMobile: false },
];

export const skeletonColumns = [
	...columns.slice(0, 3),
	{ label: "Role", field: () => <SkeletonPlaceholder />,  labelOnMobile: true },
	{ label: "Actions", field: () => <SkeletonButtonPlaceholder />,  labelOnMobile: false },
];

export const skeletonData = Array.from(Array(5).keys()).map(() => (
	{
		id: <SkeletonPlaceholder />,
		username: <SkeletonPlaceholder />,
		email: <SkeletonPlaceholder />,
	}
));