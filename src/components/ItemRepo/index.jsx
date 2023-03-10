import React from "react";
import { ItemContainer } from "./styles";

export default function ItemRepo({repo}) {
	return (
		<ItemContainer>
			<h3>{repo.name}</h3>
			<p>{repo.full_name}</p>
			<a href="https://www.youtube.com/watch?v=clWbHbhfThs&ab_channel=AndroidZeiroGamer">Ver repositório</a>
			<br />
			<a href="https://web.dio.me/project/github/learning/2ef51194-5146-4424-b1f6-3d0332284cad?back=/track/orange-tech&tab=undefined" className="remove">
				Remover
			</a>
			<hr />
		</ItemContainer>
	);
}
