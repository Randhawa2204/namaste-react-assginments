###This is Episode-1 Assignment of Namaste React ###

###Theory Questions###

Q1. What is Emmet?
ans: Emmet is a tool to write html and css codes faster.It provides some abbreviations and shortcuts, using that will end up to a complete HTML or CSS code snipets.

Q2. Difference between a library and a framework?
ans: Library provides set of tools or functionalities that can be selectively used/import into the appliaction to do some specific tasks.
They have nothing to do with the code structure or design patterns.

On the other hand, Framework provides a set od tools, packages and skeleton or say structure and cobnvention to write code in such a manner that matches a particular design pattern.

Q3. What is CDN? Why do we use it?
ans: CDN stands for "Content Delivery Network".It is a distributed network of servers located across various geographical locations that work together to deliver content to users more efficiently. The primary purpose of using a CDN is to enhance the performance, reliability, and scalability of delivering web content to end-users.

Q4. Why React is known as React?
ans: Because it is Reactive to the changes in data or state in the application. It utilizes Virtual DOm and a reconcilliation algorithm to efficiently compare the previous and updated states and accordingly updates the necessary components instead of all components.

Q5. What is cross-origin in the script tag?
ans: By default Browser applies the Same-Origin policy which restricts scripts from making any requests and access resources across diffierent origin.
By applying cross-origin in a script Tag, it enables the CORS config to allow that script to execute that came from different origin other than the origin where the app hosted.

Q6. What is the difference between React and ReactDOM?
ans: React is the core library that provides the foundation for building user interfaces in JavaScript. It is responsible for managing components, state, and rendering logic.
On the Other hand, ReactDOM is a package that provides the integration between React and the browser's Document Object Model (DOM).
ReactDOM is responsible for rendering React components into the actual DOM, updating them when there are changes, and handling events.

Q7. What is difference between react.development.js and react.production.js files via CDN?
ans: 
    react.development.js:

        This file is intended for development environments and contains additional development-related features and error-checking capabilities.
        It includes useful error messages and warnings in the browser's console, which can help developers identify and fix issues during development.
        The file is larger in size compared to the production version, as it includes extra code for development-time optimizations and debugging.

    react.production.js:

    This file is optimized for production deployments and is suitable for use in live applications.
    It is a minimized and optimized version of the React library, resulting in a smaller file size and improved performance in production environments.
    The production version does not include the extra development-related features, error messages, or warnings found in the development version. This omission helps reduce the bundle size and increase runtime performance.

Q8. What are async and defer?
ans: Both are the attributes of <script> tag that can modify the flow of execution.
In Normal Scenario, while execution HTML code line by line, whenever a script tag is encountered, script data will be fetched first and then it will complete the excution of the script and only after that it will compile rest of the HTML code.

In async, The script data will be fetched parallely with the HTML code and as soon as the script is available, it will execute that first and then it will resume compiling HTML.

In defer, The script data will be fetched parallely with the HTML code but it will only execute the script after compiling the HTML first.