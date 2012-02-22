/* Author:
	Elliott Polk
	elliott.polk@thekaroshiworkshop.com
*/

var loadWrapper = $('#load-wrapper'),			// the wrapper that contains the loading element
    loadCellCnt = 12,					// 'cell' count for the loader 
    cell = $('<div class="load-cell lblu"></div>'),	// 'cell' template | cell == blue box/bar
    index = 0;						// global var to track the index

/// ===| fn: animateLoader |=== ///
/// @param String secondaryClass: the class
///	that will be added to give the animation
///	appearance
///
/// If the widget does not exist on the page or is
/// not visible, clearInterval() so that the JS will
/// not continue to run for no reason
var animateLoader = function(secondaryClass) {
	if($(loadWrapper) && $(loadWrapper).is(':visible')) {
		if(index == loadCellCnt) {
			index = 0;
			$(loadWrapper).find('.load-cell').removeClass(secondaryClass);
		}
		$($(loadWrapper).find('.load-cell').get(index)).addClass(secondaryClass);
		index++;
	}else
		clearInterval();
}

/// ===|===
/// this should build the loading bar and
/// call setInterval to begin the animation
///
/// currently using 100ms because it seems to
/// give a decent looking animation speed
$(document).ready(function() {
	for(i=0; i<loadCellCnt;i++) $(loadWrapper).append($(cell).clone());
	setInterval('animateLoader(\'dblu\')', 100);
});
