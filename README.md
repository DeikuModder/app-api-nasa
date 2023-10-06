### API NASA APP

This app simply shows information on the 'images of the day' that NASA's public API grants, it has to views, the home view and the detail view, the home is the one that has the feed, where you can see the image of the day, and the image of the last 5 days, the detail view is a more detailed view of the image you select, as well as the explanation for that image.

### How it works

This works using the useEffect to realize the calls to the API, once the components are mounted, then setting those values returned by the promise in the useState hook.

Using the routes and the react native navigation library, the app can switch views, and pass data that is relevant to other views

### What i Learned

-I learned how to make a request to an APi, using the useEffect hook to handle it once the component it's mounted

-How to pass the API's information troughout the separate components of the app, as well as the diferent views the may have

-A deeper understanding on Promises and await and async functions

### Features

This app was made following a course of React Native, like the pomodoro last one i made, the difference between the one of the video and mine are:

-I didn't use any Typescript

-I made the fetchApi function general, so it can be reusable not only in this app but in other projects

-I made and added a Loading component that shows a Loading screen until the data of the promises comes, that can be re used in other projects as well

-It uses date-fns library to keep the dates updated

### Documentation

Course im currently studying: [https://www.youtube.com/watch?v=Dl8x8EWXq8s&t=9485s]

And a bunch of different documentation on the React Native official website
