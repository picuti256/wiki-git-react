import { useState } from "react";
import gitlogo from "../assets/github.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";

import { Container } from "./style";

function App() {

  const [repos, setRespos] = useState([]);


	return (
		<Container>
			<img src={gitlogo} alt="Logo do github" width={72} height={72} />
			<Input />
      <Button />
			<ItemRepo />
		</Container>
	);
}

export default App;
