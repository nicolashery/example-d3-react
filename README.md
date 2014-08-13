# Example D3.js + React integration

A small example exploring how to integrate [D3.js](http://d3js.org/) data visualization components into a [React](http://facebook.github.io/react/) app.

Demo: http://nicolashery.github.io/example-d3-react

## Explanation

**Context**: React allows you to manipulate SVG, so you could probably re-write this repo in "pure React". Here, I assume that you might already have some D3 components you want to re-use, and/or you would rather write the data visualization parts of your app in D3.

I find that making D3 components play nice inside a React app becomes easier when you follow these simple rules:

**(1) "One Source Of Truth"**: The D3 visualization should get all of the data it needs to render passed down to it. In this example, the single source of truth is in the main `<App>` React component's `state`, and is used by the D3 component (`d3Chart`) and React components (for example `<Stats>`).

**(2) "Stateless All The Things"**: Related to (1), D3 and React components alike should be as stateless as possible, i.e. they shouldn't hide/encapsulate something that makes them render differently given the same "input". In this example, if you call `d3Chart.update()` at anytime with the same arguments, you always get the same result on screen.

**(3) "Don't Make Too Many Assumptions"**: Related to (1) and (2), components shouldn't make too many assumptions about how they will be used. In this example, `d3Chart` doesn't prescribe when tooltips should show, it only shows whatever it receives in the `tooltips` array. This allows us to show tooltips on hover, but also to easily create a "show/hide all tooltips" toggle.

## Quick start

Clone this repo, then:

```bash
$ npm install
$ npm start
```

Open `http://localhost:8080` in your browser.
