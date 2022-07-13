import React, { useState } from 'react';

const ProjectData = () => {
	const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div>
				<div className="label-holder">
					<label htmlFor="file" className="label">
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
                <input type="file" id="file" multiple onChange={handleImageChange} />
			</div>
		</div>
	);
};

export default ProjectData;
