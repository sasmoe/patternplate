import run from './run';
import start from './start';

export default patternplate;

function patternplate() {
	return {
		start: start(),
		run: run()
	};
}
