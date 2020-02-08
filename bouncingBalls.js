// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
    2
    console.log(h, bounce, window)
    3
    // return -1 if any of the params do not meet entry criteria
    4
    if (h <= 0 || !(0 < bounce && bounce < 1) || window >= h) return -1;
    5
    // create a formula to calculate the number of bounces
    6
    // calculate the height of each bounce using loop
    7
    let bounce_height = h;
    8
    let bounce_count = 0;
    9
    while (bounce_height > window) {
        10
        bounce_height = h * bounce;
        11
        bounce_height > window ? bounce_count++ : bounce_count
        12
        h = bounce_height
        13
        bounce_count++;
        14
    }
    15
    return bounce_count
    16
    // stop once bouce's height falls below window's height
    17

    18
    // return the result
    19

    20

    21
}
22

23
bouncingBall(3, 1, 1.5)
Impressive! You may take your time to refa