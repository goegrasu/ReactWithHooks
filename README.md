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

### Course 5
Using all that was explained in course 4

### Course 6
How React works behind the scenes. \
React.memo() evaluates the props a component has and if one of the props has changed, only then the \
code in that component will rerun and the component will be re-evaluated

useCallback hook allows us to store a function across component execution and not rebuild it at every component re-evaluation
useMemo hook allows us to store a value like useCallback does it for functions

### Course 7
Class based components
Error Boundaries only doable as a class component

### Course 8 
Http requests using fetch and as backend using firebase

### Course 9

