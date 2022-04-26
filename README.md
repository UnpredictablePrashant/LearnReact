# LearnReact
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FUnpredictablePrashant%2FLearnReact&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)<br>

<p>This project is dedicated for learning ReactJS.</p>


# History
<p>React is a JavaScript based framework created by Jordan Walke. It was first used in Facebook’s News feed in 2011 and later on in Instagram in 2012. In 2013, it got open sourced.</p><br>
<p>History is boring, you can refer to class slides for more. Let’s jump to exciting part.</p>

# Virtual DOM
<p>React introduced the concept of “Virtual DOM”. One of the caveats of “Real” DOM is that manipulating the DOM is slow. Because the entire changes gets rendered. While manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.</p><br>
<p>We can consider Virtual DOM as a blue print. Let’s say we are going to create a house, now if we want to add some changes in a room, then according to “Real DOM” we need to thrash that room and rebuild it with the changes which is a slow process.</p><br>
<p>Now in “Virtual DOM” we make changes in a blueprint (we are not yet making any physical changes in the room), apart from it, the “Virtual DOM” also keeps a snapshot of the one which is already created. Finally, it will compare both one from the snapshot (which is already created) and one from the blueprint and then will make changes just on that part which is needed to be changed, that way you don’t have to thrash the entire room. 
This looks like a long and inefficient process, but trust me its quite fast as updating in virtual DOM is very quick.</p><br>

## VDOM in React
In summary, here’s what happens when you try to update the DOM in React:
<ol>
<li>The entire virtual DOM gets updated.</li>
<li>The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.</li>
<li>The changed objects, and the changed objects only, get updated on the real DOM.</li>
<li>Changes on the real DOM cause the screen to change.</li>
</ol>

## Example
<p>Understanding through live example. We created a javascript based digital clock. If you see the developer console you will see how the various elements of DOM is being changed.</p>

![Javascript Clock](/images/clockJS.gif "Javascript Clock")
<br>
<p>Now let's create a React based Clock. In this example, you will see how  only one element is being rendered.</p>

![ReactJS Clock](/images/clockReact.gif "ReactJS Clock")

# About React
React is all about components. But why components? - Components are reusable. - Seperation of concerns (don't do too many things in one and same place).<br>
Remember: <br>
Components in React is a JS function.<br>
Multiple root elements are not allowed inside the react component.

# Setting up Environment

<p>
Download and install <a href="https://nodejs.org/en/download/">NodeJs</a> based on the OS that you are using.
</p>

# Starting up with a project

Let's create a simple react application. This will act as template for the project that we are creating.

```bash
npx create-react-app myapp
```

Let's run this application.

```bash
cd myapp
npm start
```

# Project

## Restaurant Menu Application

<p>
<ul>
<li>Create a menu application which will have list of food items and drink items with their price and button to buy (in seperate sections).</li>
<li>Categorise food items based on the `veg` and `non-veg` items (change colors) and drinks as `mocktails` and `cocktails`.</li>
<li>Print `items added` everytime user clicks on buy items. </li>
<li>Create a user form where customer enters their name and print the name in console.</li>
</ul>
</p>