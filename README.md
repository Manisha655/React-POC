# React-POC
- This repo is for practicing React from fundamentals.

## Day-1

# What is Emmet?
- Emmet is essential web developer toolkit which allows to type short shortcuts and then convert it into boiler plte HTML and CSS code.

# Difference between a Library and Framework?
- Library and framework,both are written by third party but they differ in inversion of control. Library provide control to developer they can call use any functionality as per their use but in franework control is not with developer. Framework tells developer where you should write code.

# What is CDN? Why do we use it?
- Content Delivery Network (CDN) is a geographically distributed groups of server that caches content such as images, HTML files and videos cose to end users. By serving data from the nearest edge server rather than a distant central origin server. CDNs significantly reduces latency, increase loading time and prevent server overloads.

# Why is React known as React?
- React is JS Library. It is known as React because it allows developer to react to change application's data and state and to update the user Interface in a declarative and efficient manner.

# What is crossorigin in script tag?
- crossorigin attribute allows to load files from different origin other than application. It enable cross origin resource sharing.

# What is diference between React and ReactDOM
- React handles component based architecture, state management and the virtual DOM. It defines how UI should look like but doesn't know where to show it.
- ReactDOM provide method like createRoot and render to physically inject React component into HTML page.

# What is difference between react.development.js and react.production.js files via CDN?
- react.development.js is only for development purpose for developers to code,debug and test. This is unminified file so it is heavy files
- react.production.js are optimised file so it take less time to load and best for production ready app and end user. It doesn't give detailed error messages.

# What is async and defer?
- async attribute in script tag allows HTML parser to parse HTML in parallel while it will load script from network once script is available in browser HTML parser will stop and code will execute first after execution only HTML parser will parse HTML.
- defer attribute allows HTML parser to parse HTML in parallel while it will load script from network once parser parses all of it's HTML then only script will execute.

## Day - 2

# What is `NPM`?
- NPM is package mananger which manages package. It allow sharing dependencies, allows to use code from dependencies. It create package.json on npm install which stores configuration of all dependencies and package-lock.json which stores exact version of configuration of dependancies

# What is `Parcel/Webpack`? Why do we need it?
- They are bundlers. We need bundlers to make our app production ready. It optimise, minify our code, cache our code as well. There are lot of things they do licke caching, removing unwanted codes using Tree shacking algo.

# What is `.parcel-cache`?
- This is a folder which get created during giving build. It cache our application and apply HMR(Hot Module Replacement ) which use File watching algorithm(written in c++ ) to track chnages and reload once we save our application and take less time for every build.

# What is `npx` ?
- npx is executing command. It executes the packages.

# What is difference between `dependencies` vs `devDependencies`
- Dependencies are those packages which we need in production or deployment
- devDependencies are those which we need during development time.

# What is Tree Shaking?
- Tree shacking is the process of removing unwanted code from application during time of optimization.

# What is Hot Module Replacement?
- It means that parcel will keep track of all files in the application and whenever any file is changed and saved parcel will reload application. These things are done by File watching algorithm (written in C++)

# - List down your favourite 5 superpowers of Parcel.
- Tree Shaking
- Hot Module Replacement
- Optimization
- Minification
- Caching while development

# What is `.gitignore`? What should we add and not add into it?
- It is a folder which stores what git should ignore at time of commiting. We should add those files which are bulky as well as which can regenerate like node_modules, .parcel_cache and dist folders.

# What is the difference between `package.json` and `package-lock.json`
- package.json is configuration files of all dependancies which store near version of dependancies.
- package.lock.json is configuration files which store exact version of dependancies.

# Why should I not modify `package-lock.json`?
- Because it keeps track of exact version of dependancies. If there is different version in development and prod. Application may break in production due to different version of dependancies

# What is `node_modules` ? Is it a good idea to push that on git?
- node_modules is folder which store code of all dependencies and then it's transitive dependancies as well. All folder inside node_modules have their own package.json. node_modules allow sharing of code in the application through dependancies.

# What is the `dist` folder?
- dist folder contain optimised and minified code of your application. It get created at time of build and make your code production ready.

# What is `browserlists`?
- It tells your code work will definitely work on which version of browser. It basically give cross brwoser compatibility.

**# TODO: Read about dif bundlers: vite, webpack, parcel**

# ^ - caret and ~ - tilda
- ^ caret will automatically upgrade version of your dependency if there is minor update of your dependency ex ^8.2.3 -> ^8.2.4
- ~ tilda will automatically upgrade major version of your dependancy ex- ~8.2.3 -> ~9.2.3

**# TODO: Read about Script types in html (MDN Docs)**

## Day - 3 Laying the Foundation

# What is JSX?
 - JSX is HTML-like or XML like syntax extension of Javascript. Broswer can't understand JSX so once code go to parcel it send it to babel which is Compiler/transpiler of Javascript which transpile jsx code to browser understandable code. so that JS engine can understand jsx.

# Superpowers of JSX
- It can have javascript and html like code.
- It prevent xss attack it automatically sanitize data if we are using data in expression {}.
- Easy to understand
- simple and elegant

# Role of type attribute in script tag? What options can I use there?
- The type attribute in a script tag identifies the scripting language or the format of the data contained within the element. It provides essential context to the browser on how to parse, handle, and execute the code.
- Here we can use module as we want to render React as module which allows to import it as module

# {TitleComponent} vs {<TitleComponent/>} vs{<TitleComponent></TitleComponent>} in JSX
- {TitleComponent} here it will render classic Javascript expression.
- {<TitleComponent/>} It will render component with no children. This is standard way to render any component 
- {<TitleComponent></TitleComponent>} It will render component with allowing children.

# Is JSX mandatory for React?
- No it's not mandatory but adding it is like syntactical sugar for createElement. whenever you don't want to set up compilation in build. whatever we are writing in jsx we can achieve in pure js code as well.

# Is ES6 mandatory for React?
- NO, we can write React code without es6 as well.Fir classes we can use createReactClass api from react.

# How can I write comments in JSX?
- we can write comment in {/* This is comment */} or {//this is comment}

# What is <React.Fragment></React.Fragment> and <></> ?
- we use this when we don't want to add extra node. It group element together without adding any extra wrapper node.

# What is Virtual DOM?
- Virtaul DOM is programming concept where virtual or ideal representation of Real DOM is kept in memory.And it is synced with real DOM with libraries such as ReactDOM. This process is called as REconcilation.

# What is Reconciliation in React?
- It is the process where whenever state and props changes it create a new virtual DOM in memory and using diffing algorithm it calculates what are the minimal changes needs to apply to real DOM and then it patches those changes to real DOM. It's good standard to use unique keys to the lists so that it can calculate correctly what are the list needs to be modified, removed or added. If you are using indexes it can result in unexpected result cause indexes can change.

# What is React Fiber?
- ## TODO- need to learn in detail

# Why we need keys in React? When do we need keys in React?
- We need key in React to give unique identification to the component. Using key can improve performance and decrease unnecessary re-rendering and unexpected UI.

# Can we use index as keys in React?
- we can, it's better than having  no keys but when we are modifing our list it will bring disaster. suppose we have given index and if we are adding some data in middle it will change index of all component  and due to this it will re render all list.

# What is props in React? Ways to
- Props basically stands for properties which contain data in object form. This can be passed from one component to other. props are immutable. we can either simply get it in child component through props object or we can destructure it and use it.

# What is a Config Driven UI ?
- Config driven UI is user interface which is build on some data and for that particular data or config we need to show particularly that UI.










