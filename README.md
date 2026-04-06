# React-POC
- This repo is for practicing React from fundamentals.

# What is Emmet?
- Emmet is essential web developer toolkit which allows to type short shortcuts and then convert it into boiler plte HTML and CSS code.

# Difference between a Library and Framework?
- Library and framework,both are written by third party but they differ in inversion of control. Library provide control to developer they can call use any functionality as per their use but in franework control is not with developer. Framework tells developer where you should write code. 

# What is CDN? Why do we use it?
- Content Delivery Network (CDN) is a geographically distributed groups of server that caches content such as images, HTML files and videos cose to end users. By serving data from the nearest edge server rather than a distant central origin server. CDNs significantly reduces latency, increase loading time and prevent server overloads.

# Why is React known as React?
- React is JS Library. It is known as React because it allows developer to  react to change application's data and state and to update the user Interface in a declarative and efficient manner. 

# What is crossorigin in script tag?
- crossorigin attribute allows to load files from different origin  other than application. It enable cross origin resource sharing.

# What is diference between React and ReactDOM
- React handles component based architecture, state management and the virtual DOM. It defines how UI should look like but doesn't know where to show it.
- ReactDOM provide method like createRoot and render to physically inject React component into HTML page.

# What is difference between react.development.js and react.production.js files via CDN?
- react.development.js is only for development purpose for developers to code,debug and test. This is unminified file so it is heavy files
- react.production.js are optimised file so it take less time to load and best for production ready app and end user. It doesn't give detailed error messages.

# What is async and defer?
- async attribute in script tag allows HTML parser to parse HTML in parallel while it will load script from network once script is available in browser HTML parser will stop and code will execute first after execution only HTML parser will parse HTML.
- defer attribute allows HTML parser to parse HTML in parallel while it will load script from network once parser parses all of it's HTML then only script will execute.

