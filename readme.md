# Bjorklund.js
Generates binary sequence patterns based on [Bjorklund](https://ics-web.sns.ornl.gov/timing/Rep-Rate%20Tech%20Note.pdf) algorithm.

> The algorithm solves the general problem of distributing `n`pulses over `m` “timing slots” in the most even way possible, even though `n`
may not necessarily be an even divisor of `m`.

These patterns can be used to achieve complex musical rhythms known as [Euclidean](http://cgm.cs.mcgill.ca/~godfried/publications/banff.pdf) Rhythms.
## Example Usage
`````
npm install bjorklund
`````

`````js
var bjork = require('bjorklund');

bjork(2,5); // returns '10100'
bjork(3,7); // returns '1010100'
bjork(5,16); // returns '1001001001001000'
bjork(4,16); // returns '1000100010001000'

`````
The method outputs the pattern as a string where `1`s represent pulses and `0`s represent empty slots.

### Dependencies
 * Lodash