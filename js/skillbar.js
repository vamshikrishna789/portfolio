// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(mycontainer, {
color: '#6adcfa',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#6adcfa', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.9);  // Number from 0.0 to 1.0

/*Skill Basr for CSS3*/

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(second, {
color: '#e1ae9e',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#e1ae9e', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.85);  // Number from 0.0 to 1.0


/*Skill Basr for JavaScript*/

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(javascript, {
color: '#9999ff',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#9999ff', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.9);  // Number from 0.0 to 1.0

/*Skill Basr for Node js*/


var bar = new ProgressBar.Circle(node, {
color: '#ff3300',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#ff3300', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.7);  // Number from 0.0 to 1.0

/*===============Angular===========================================*/


var bar = new ProgressBar.Circle(angular, {
color: '#7FFFD4',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#7FFFD4', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.75);  // Number from 0.0 to 1.0

/*===============jQuery===========================================*/

var bar = new ProgressBar.Circle(jquery, {
color: '#27ae60',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#27ae60', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.75);  // Number from 0.0 to 1.0

/*===============rwd===========================================*/

var bar = new ProgressBar.Circle(rwd, {
color: '#009999',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#009999', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.9);  // Number from 0.0 to 1.0

/*===============react===========================================*/

var bar = new ProgressBar.Circle(react, {
color: '#00FFFF',
// This has to be the same size as the maximum width to
// prevent clipping
strokeWidth: 4,
trailWidth: 1,
easing: 'easeInOut',
duration: 1400,
text: {
	autoStyleContainer: false
},
from: { color: '#aaa', width: 1 },
to: { color: '#00FFFF', width: 4 },
// Set default step function for all animate calls
step: function(state, circle) {
	circle.path.setAttribute('stroke', state.color);
	circle.path.setAttribute('stroke-width', state.width);

	var value = Math.round(circle.value() * 100);
	if (value === 0) {
		circle.setText('');
	} else {
		circle.setText(value);
	}

}
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.8);  // Number from 0.0 to 1.0
