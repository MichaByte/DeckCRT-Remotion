import {useCurrentFrame} from 'remotion';
const normalCharFrameIncrement = 1;
const dotCharFrameIncrement = 10;

const text = [
	'Loading OS...',
	'Initalizing flypaper...',
	'Catching bugs...',
	'153/160 bugs caught',
	'Checking flux capacitor...',
	'Destroying Nintendo Switches...',
	'239 destroyed, great success!',
	'Starting hyper drive...',
	'Letting you finally play games...',
].join('\n');
const framesToChars: [number, string][] = [];
for (let i = 0; i < text.length; i++) {
	const lastFrame =
		framesToChars.length === 0 ? 0 : framesToChars[framesToChars.length - 1][0];
	if (text[i] === '.') {
		if (text[i - 1] !== '!') {
			framesToChars.push([dotCharFrameIncrement + lastFrame, text[i]]);
		}
	} else {
		framesToChars.push([normalCharFrameIncrement + lastFrame, text[i]]);
	}
}
console.log(framesToChars[framesToChars.length - 1][0]);
export default () => {
	const frame = useCurrentFrame();
	let textToDisplay = '';
	for (let i = 0; i < framesToChars.length; i++) {
		if (framesToChars[i][0] <= frame) {
			textToDisplay += framesToChars[i][1];
		}
	}
	return (
		<div>
			<pre>{textToDisplay}</pre>
		</div>
	);
};
