  # This project was built for learning purpose to master how you can make a dynamic form.
  
  By MANIBAHO Patrick
  
  
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



# How to Build Dynamic Forms in React

In this tutorial, let's learn how to build dynamic forms in React. Using dynamic forms, we can add fields or remove them depending on our needs.

So, let's get started.

# How to Create a Form in React

Let's create a simple form first. The syntax is straightforward:

```

import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <input
            name='name'
            placeholder='Name'
          />
          <input
            name='age'
            placeholder='Age'
          />
        </div>
      </form>
    </div>
  );
}

export default App;

```

Here's what it'll look like:

![image](https://user-images.githubusercontent.com/63926982/185785799-bb88ee4c-1e3c-4528-a934-bbb905692abd.png)


