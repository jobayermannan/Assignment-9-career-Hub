import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">React Hooks in a Nutshell</h2>

      <div className="mb-4">
        <h3 className="text-gradient bg-gradient-to-l from-red-600 ">When should you use context API?</h3>
        <p>
          You can use the Context API when you want to pass data through the component tree without having to pass props
          down manually at every level. For example, if you have a theme that you want to apply to your entire app, you
          can use the Context API to pass the theme down to all of your components without having to pass it down
          manually at every level.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-gradient bg-gradient-to-r from-teal-600 ">What is a custom hook?</h3>
        <p>
          A custom hook is a function that allows you to reuse stateful logic across multiple components. For example, if
          you have two components that both need to fetch data from an API and display it on the screen, you can create a
          custom hook that handles the data fetching logic and reuse it in both components.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-gradient bg-gradient-to-l  from-yellow-400">What is useRef?</h3>
        <p>
          useRef is a hook that allows you to create a mutable reference that persists across renders. For example, if you
          have an input field that you want to focus on when the component mounts, you can use useRef to create a
          reference to the input field and then call the focus method on it.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-gradient bg-gradient-to-r from-sky-600 ">What is useMemo?</h3>
        <p>
          useMemo is a hook that allows you to memoize expensive computations so that they are only re-computed when
          their dependencies change. For example, if you have a component that renders a list of items and each item has
          an expensive computation associated with it (such as formatting a date), you can use useMemo to memoize the
          computation so that it is only re-computed when the item's data changes.
        </p>
      </div>
    </div>
  );
};

export default Blog;
