// ===== Articles API =====
// We like to use classes to encapsulate API functions,
// because our apps need the functions constructed differently
// depending on build location (Local, QA, or Production)

import axios from 'axios';
class ArticlesAPI {
	// Type Declration. Note that the # means the property is private, and can't be used outside of this class.
	#articlesURL: string;
	constructor() {
		this.#articlesURL = 'http://localhost:3000/api/articles';
	}

	async get(filter: string) {
		const response = await axios.get(this.#articlesURL, {
			params: { filter },
		});
		return response.data;
	}

	async put(articleData: ArticleData) {
		const response = await axios.put(this.#articlesURL, articleData);
		return response;
	}
}

export default new ArticlesAPI();

// Declare the type of an article. Instead of doing this multiple times,
// You can use a types.d.ts file.
interface ArticleData {
	id: number;
	name: string;
	category: string;
	bookmarked: boolean;
}
