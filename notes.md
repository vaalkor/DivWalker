# Walker to jump to another element

- We need some way of working out another element to jump to, that's suitable
  - We can walk the DOM a bit and find something that's got a suitable area, it needs to be in the screen view, and of a suitable size that the walking isn't going to seem stupid.
- You need to work out when you've walked to the end of the div so you can trigger the jump in an arc code
- You need to determine which way you are jumping so you can set the appropriate sprite for when you land.