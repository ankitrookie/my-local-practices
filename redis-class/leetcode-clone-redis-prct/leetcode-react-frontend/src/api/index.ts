import axios from "axios";
import { LANGUAGE_VERSION } from "../lib/constant";

interface ApiProps {
	language: string;
	sourcecode: string
}

const apiClient = axios.create({
	baseURL: "https://emkc.org/api/v2/piston"
})

export const getOutput = async ({ language, sourcecode }: ApiProps) => {
	console.log("source code", sourcecode)
	try {
		const result = await apiClient.post('/execute', {
			language: language,
			version: LANGUAGE_VERSION[language],
			files: [
				{
					content: sourcecode
				}
			]
		});
		return result.data;
	} catch (error) {
		console.log("Error accoure while getting output : ", error)
	}
};
