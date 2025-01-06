import Placeholder from "react-bootstrap/Placeholder";
import PlaceholderButton from "react-bootstrap/PlaceholderButton"


export const SkeletonPlaceholder = () => (
	<Placeholder className="d-inline" as="p" animation="glow">
		<Placeholder xs={6} />
	</Placeholder>
)

export const SkeletonButtonPlaceholder = () => (
	<Placeholder className="d-inline" as="p" animation="wave">
		<PlaceholderButton xs={4} />
	</Placeholder>
);