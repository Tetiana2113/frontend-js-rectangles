'use strict';
let rectA = {
	left: 0,
	top: 0,
	width: 20,
	height: 20
};
let rectB = {
	left: -20,
	top: 10,
	width: 5,
	height: 5
};

function areIntersected(rectA, rectB) {
	if (rectA.top >= (rectB.top + rectB.height)
		|| (rectA.top + rectA.height) <= rectB.top
		|| rectA.left >= (rectB.left + rectB.width)
		|| (rectA.left + rectA.width) <= rectB.left) {
		return false;
	}
	else {
		return true;
	}
};

let array = [
	{
		left: 10, top: 10,
		width: 25, height: 25
	},
	{
		left: 15, top: 10,
		width: 20, height: 20
	},
	{
		left: 10, top: 10,
		width: 0, height: 25
	},
	{
		left: 100, top: 10,
		width: 5, height: 5
	}
];


function filterVisible(rectA, array) {
	return array.filter(function (index) {
		if (index.width !== 0 && index.height !== 0) {
			return areIntersected(rectA, index);
		}
		else {
			return false;
		}
	});
}












