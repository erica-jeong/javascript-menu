import RecommendManager from './RecommendManager.js'

class App {
	async run() {
		const recommendManager = new RecommendManager();
		await recommendManager.start();
	}
}

export default App;
