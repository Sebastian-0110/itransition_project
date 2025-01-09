import Image from "react-bootstrap/Image";
import Spinner from 'react-bootstrap/Spinner';
import { useState } from "react";

function ProfilePicture( { url } ) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			{ isLoading &&
				<div className="d-flex justify-content-center">
					<Spinner animation="border" className="m-4 p-4" />
				</div>
			}

			<Image src={url} roundedCircle fluid onLoad={() => setIsLoading(false)}/>

		</>
	)
}

export default ProfilePicture;