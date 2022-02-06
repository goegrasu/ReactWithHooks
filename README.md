# ReactWithHooks
Learning React with Hooks

### Course 1
It learn the JSX syntax, sending props, using useState hook.
Multiple states, sending data from parent components to children components and vice-versa.

Adding two-way binding to components.

### Course 2 
Will learn more about styling. 

Using normal CSS \
Styled components \
CSS Modules \
How to debug react applications

### Course 3

Using refs, fragments, portals
useRef hook \
Ex: 
const nameInputRef = useRef();
const enteredName = nameInputRef.current.value;
&lt;input ref={nameInputRef} /&gt;

### Course 4
Local storage (localStorage browser default)
useEffect hook, it is used to prevent infinite loops and not run specific code every time the component changes (state changes, rerenders, etc.) 

useEffect(() => {}, []);
useEffect with the second parameter(the dependecies) 
an empty array will run only the first time the component loads

useEffect(() => {});
useEffect with the second parameter not set it will run every time the component changes

useEffect(() => {}, [enteredPassword]);
useEffect with the second parameter set will only run when 
the parameters in the array will change

useReducer hook
Context API with .Provider 
useContext hook 
React Context is NOT optimized for high frequency changes
