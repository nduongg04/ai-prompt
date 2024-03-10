import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="flex-col w-full">
			<h1 className="text-center head_text">
				Discover & Share
				<br className="max-md:hidden" />
				<span className="text-center orange_gradient"> AI-Powered Prompts</span>
			</h1>
            
			<p className="text-center desc">
				Prompt is an open-source AI prompting tool, creative and innovative application designed to generate prompts for users. It leverages the power of artificial intelligence to create unique and engaging prompts that can be used for a variety of purposes, such as writing, brainstorming, ideation, and more.
			</p>

			<Feed />
		</section>
	);
};

export default Home;
