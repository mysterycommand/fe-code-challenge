### Questions

* How long did you spend on this code test? What would you improve if you had more time?

  * 3 hours and 16 minutes. I think to really get this right, I'd need to spend a bit of time re-reading the Redux/Thunk and React Router docs and how they're integrated. For sure need to pull the routing stuff up into a central place. I'd also like to spend a bit of time wipping up a component library for some of the common requirements laid out in the README.

* We realize that that it may be difficult to implement an ideal solution for the presented problem given time constraints. Where did you cut corners and how did you decide what to leave out?

  * I tried to avoid messing with linter rules and/or boilerplate stuff. I bailed on testing the private route component because I thing enzyme takes a bit to set up and I'm not all that familiar with React Router's testing setup (`MemoryRouter` and `react-test-renderer` didn't do what I expected out of the box). I didn't do any styling.

* We realize the API provided has some limitations that may not have been ideal. How would you change or improve the API if you could?

  * The API seems pretty fine to me for something so small. Would be cool to have something GraphQL-ish that'd let me specify that I want `patients` with a list of their `appointments` and a count of `user_actions` of type `message`. Tbh, I spent more time re-wrapping my head around Redux/Thunk and would've preferred to just `fetch` into the API … inefficient, but easy to reason about for working on components.

* Was React a good framework for building this application? Why or why not? If not, what would you prefer instead and why?

  * Yeah. I like React, and esp. this being read/filter-only (on the data side) it seems like a good fit … just a view layer. Again, `thunk` seems like overkill here.

* How enjoyable was this challenge? Do you have any feedback?

  * It was fine. I'm a little frustrated about not knowing Immutable, Redux/Thunk, and React Router's interfaces better off the top of my head.
