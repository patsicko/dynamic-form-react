  # This project was built for learning purpose to master how you can make a dynamic form in React
  
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

We have two input fields, which are Name and Age. But these fields are static. So, let's made them dynamic using React States.

## How to Make Forms Dynamic in React

Create one state called InputFields. It will have an object, with name and age properties.

```

const [inputFields, setInputFields] = useState([
    {name: '', age: ''}
])


```

Now, let's map our form fields from their inputFields state.

```

import { useState } from 'react';
import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ])
  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
              />
              <input
                name='age'
                placeholder='Age'
              />
            </div>
          )
        })}
      </form>
    </div>
  );
}

export default App;

```

Now, we will see only one set of input fields, because we have only one object in the inputFields state. If we add more objects, we will see multiple input fields.

# How to Add the Values from inputFields State

Now, let's add the values from the inputFields state to the input fields.

```

import { useState } from 'react';
import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ])
  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name='name'
                placeholder='Name'
                value={input.name}
              />
              <input
                name='age'
                placeholder='Age'
                value={input.age}
              />
            </div>
          )
        })}
      </form>
    </div>
  );
}

export default App;

```

The values will be **input.name** and **input.age.**

Let's also add an onChange event that will run when we type something in the input fields.

Create a function called **handleFormChange.**
```

const handleFormChange = () => {
    
}

```

Assign this function to the input fields as an onChange event.


```

<div key={index}>
              <input
                name='name'
                placeholder='Name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='age'
                placeholder='Age'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />
            </div>
           
  ```
            
 This onChange event takes two parameters, **index** and **event**. Index is the index of the array and event is the data we type in the input field. We are passing those to the **handleFormChange** function.
 
 ```
 
 const handleFormChange = (index, event) => {
    
}

```

But the thing is, if we try to type something in the input fields, we won't be able to. Because we haven't set the states in the **formFields** state. So, let's do that.

```

 const handleFormChange = (index, event) => {
    let data = [...inputFields];
 }
 
 ```
 
 Let's store our **inputFields** state into a variable called data using the spread operator (the three **dots ...**).

Then, we will target the index of the **data** variable using the index parameter, and the name of the property, too.

```

const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
}

```
For example, suppose we are typing in the input field with **index 0**. So, we are specifying the index in data, and the property name, using **event.target.name**. And inside this data index, we are storing the values from input fields using event.target.value.

Now, we need to store this data back inside the **inputFields** array using the ***setInputFields method***.
