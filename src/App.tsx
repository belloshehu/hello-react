import { useState } from "react";
function App() {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("");

	const increase = () => {
		setCount(count + 1);
		if (count === 50) {
			setMessage("You have reached the limit of 50!");
		} else {
			setMessage("");
		}
	};
	const decrease = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	const reset = () => {
		setCount(0);
	};
	return (
		<div className="App">
			<h1>Counter</h1>
			<div>
				<h1 id="counter">{count} </h1>
				{/* Display a message based on the count value */}
				{message && <small>{message}</small>}
			</div>
			<div className="buttons">
				{/* Buttons to increase, decrease, and reset the counter */}
				<button onClick={increase} className="increase">
					Increase
				</button>
				<button onClick={decrease} className="decrease">
					Decrease
				</button>
				<button onClick={reset} className="reset">
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
