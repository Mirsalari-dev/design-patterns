import { useState } from "react";
import "./App.css";
import Input from "./components/input";

function App() {
	const [text, setText] = useState("");
	return (
		<div className="App">
			<Input name="name">
				{({ value }) => {
					setText(value);
					return <p>{value}</p>;
				}}
			</Input>
			<br />
			<Input name="family" />
			<p>text is :{text}</p>
		</div>
	);
}

export default App;
