import { useState } from "react";
import gitlogo from "../assets/github.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";

import { Container } from "./style";

function App() {
	const [currentRepo, setCurrentRepo] = useState("");
	const [repos, setRepos] = useState([]);

	const handleSearchRepo = async () => {
		const { data } = await api.get(`repos/${currentRepo}`);

		if (data.id) {
			setRepos((prev) => [...prev, data]);
		}
	};

	return (
		<Container>
			<img src={gitlogo} alt="Logo do github" width={72} height={72} />
			<Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
			<Button onClick={handleSearchRepo} />
			{repos.map((repo) => (
				<ItemRepo repo={repo}/>
			))}
		</Container>
	);
}

export default App;
