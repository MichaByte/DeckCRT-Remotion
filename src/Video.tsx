import {Composition} from 'remotion';
import Main from './Main';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="Main"
				component={Main}
				durationInFrames={420}
				fps={60}
				width={1280}
				height={800}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
		</>
	);
};
