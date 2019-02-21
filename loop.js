// node myFile.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
	// Check one: Any pending setTimeout, setInterval, setImmediate ?
	// Check two: any pending OS task (like server listening to a port)
	// Check three: Any pending long-running operation? (like fs module)
	return pendingTimers.length || pendingOSTasks.length || pendingOperations;
}

//=======================
// EVENT LOOP
//=======================

// Entire body executes in one 'tick'
while (shouldContinue) {
	// 1) Node looks at pendingTimers and sees if any functions are ready to be called
	//
	// 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks
	//
	// 3) Pause execution. Continue when...
	//   - a new pendingOSTask is done
	//   - a new pendingOperation is done
	//   - a timer is about to complete
	//
	// 4) Look at pendingTimers. Call any setImmediate
	//
	// 5) Handle any 'close' events (garbage collection)
}

// exit back to terminal
