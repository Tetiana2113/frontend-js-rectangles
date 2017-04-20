'use strict';
var rectA = {
	left: 0,
	top: 0,
	width: 20,
	height: 20
};
var rectB = {
	left: -20,
	top: 10,
	width: 5,
	height: 5
};
function areIntersected(rectA, rectB) {
	if 	(rectA.left >= (rectB.left + rectB.width)
		|| (rectA.left + rectA.width) <= rectB.left
		|| rectA.top >= (rectB.top + rectB.hight)
		|| (rectA.top + rectA.hight) <= rectB.top)
	{ return false }

	else { return true; }
};

	var array = [
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
			return areIntersected(rectA, index)
			if (index.length !== 0 ) 
			{ return true }
			else { return false; }
		}
		)
	}


 
			

	 


	
 


