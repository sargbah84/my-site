import React from 'react';

class Credit extends React.Component {
	render() {
		return (
			<div className="credit">
				<p>&copy; { new Date().getFullYear() } - <a href={ window.location.host } > Prince Sargbah</a></p>
			</div>
		)
	}
}

export default Credit;