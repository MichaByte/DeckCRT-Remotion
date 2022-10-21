import {AbsoluteFill} from 'remotion';
import './styles.css';
import {
	Img,
	continueRender,
	useCurrentFrame,
	delayRender,
	staticFile,
} from 'remotion';
import Filler from './Filler';
const waitForFont = delayRender();
const font = new FontFace(
	`VT323`,
	`url(${staticFile('font.woff2')}) format('woff2')`
);
font
	.load()
	.then(() => {
		document.fonts.add(font);
		continueRender(waitForFont);
	})
	.catch((err) => console.log('Error loading font', err));
const fontWidth = 24;
const divStyle = {
	fontSize: `${fontWidth}px`,
};
export default () => {
	const frame = useCurrentFrame();

	const opacity = Math.min(1, frame / 60);

	return (
		<AbsoluteFill>
			<div style={divStyle}>
				<body className="noisy" />
				<div className="emblem">
					<span className="icon-information" />
				</div>
				<div className="frame">
					<div className="piece output">
						<Img
							className="logo"
							src={staticFile('logo.png')}
							style={{opacity}}
						/>{' '}
						<Filler />
						<div className="bars">
							<Img src={staticFile('color_bars.png')} />
						</div>
					</div>
					<div className="piece scanlines noclick" />
					<div className="piece glow noclick" />
				</div>
			</div>{' '}
		</AbsoluteFill>
	);
};
