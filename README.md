Playing

1. Clicking on a tile will result in two possible outcomes:

    a. Clear - the tile reveals a numeric clue of the neighbouring where you could loose points, and you also earn some points.

    b. Boom - the tile reveals a red background which and you loose some points.

2. Earning points happens when you uncover a clue. The amount of points earned in determined by the increment value at that time.

3. The increment value start with the lowest value it can be, which is +1. It changes depending on the outcome of the next click that happen while unearthing clues:

    a. Starting from +1, the increment value increases by +1 for each clue uncovered. This number keeps increasing as long as you don't hit a boom tile.

    b. If you hit a boom tile, you loose points equal to the increment value at that time. The increment value is then reset to +1 again.

4. The clicks counter keeps ticking upwards by +1 with every click made to unearth a clue keeps. 

5. When all the possible clues are unearthed, the entire board content is revealed, and the final score calculated.

6. The final score is a function of three inputs - clicks count, points earned and ratio of the boom tiles to the total tiles on board.

    a. The clicks count is subtracted from the points earned.

    b. The ratio of the boom tiles to the total tiles on the board is applied to the points earned after (a) above, and then multiplied by the number total tiles on the board

    c. If the value from (b) above has a fractional component, the number is rounded of to the nearest whole number smaller than itself (floor).

7. The calculated score value is saved in the daily score history, and for each day, the highest score is kept and the lower score disposed.
