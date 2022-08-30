#  Redux store

Store created using redux.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Created this project to cement my knowledge of redux. Lots of mistakes along the way, it was a bit frustrating but i got it done.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover and active states for all interactive elements on the page
- Switch between themes
- Navigate to various pages
- Add products to cart
- Increase and decrease product quantities

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/Ebunski/Redux-store]
- Live Site URL: []

### Built with

- React js
- Redux
- Flexbox and grid

### What I learnt

1. React:

- Using redux with react:
  using useSelector, useDispatch and the connect functions
  setting up store and using the reducers, action creators, constants and thunk middleware
- Reusing components with the composition method (children)

2. Css

- The sass workflow:
  Running sass with the sass package.
  Created variables, mixins to make styling easier and reduce repetition.
  Also learnt interpolation
  NOTE: When you make a variable the value of a style rule, the contents of the variable is displayed. If the variable accesses functions in other files, it would not work. The function has to be in the same file.

- Light and dark themes:
  used sass variables to store values for the themes and used css variables to switch between the sass variables

```
$secondary-color: #ff9800 !default;
$primary-color: #673ab7 !default;

:root {
  --secondary-color: #{$secondary-color};
  --primary-color: #{$primary-color};
  }

$secondary-color-dark: #ffcc80 !default;
$primary-color-dark: #9fa8da !default;

.dark {
  --secondary-color: #{$secondary-color-dark};
  --primary-color: #{$primary-color-dark};
}
```

- Hover Effects:
  Learnt how to use pseudo classes and css transform properties to create the effects.
- Loading spinner

## Author

- Website - [coming soon...]
- LinkedIn - https://www.linkedin.com/in/ebunoluwa-oyebola-1490021b1
- Twitter - [@Ebun_ski](https://www.twitter.com/Ebun_ski)
- Email - [ebunoyebola03@gmail.com]

## Acknowledgments

Thanks to Kevin Powell for the hover effects and Malvia prakash for redux tutorial.
