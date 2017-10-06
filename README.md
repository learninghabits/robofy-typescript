## Design considerations   

*	A controller once constructed will expose required properties.
*	Any failure due to bad data must happen before an instance is created.
*	An instruction is a key component of the application and as such it too must be in a good state once constructed.
*	Both the controller and instruction are immutable types so they may not be altered once constructed. 

## Assumptions   

*	A grid will not have any bounds
*	An instruction like this N4, S4 is not catered for. This is an assumption that the robot can only turn left or right. 
