# Calculator 2.0

## Remaking my calculator project using React, Material-UI, and Jest

Days 1 - 3

- Front-end complete

Day 4

- Succeeded in getting the value of each button to print to the console. This value will be passed to the global store to be distributed to the necessary components later.

- Began creating a global data store using custom hooks. Following instructions from React course. To be continued...

- Succeeded in setting up the global data store and transmiting data from 'CalculatorButton' element to the 'EquasionResultOutput' element.

Day 5

- Set up initial store actions to be called.

- Set up switch/case logic in 'CalculatorButton.js' to trigger appropriate dispatch actions when calculator buttons are clicked.

- Succeeded in transfering logic from old calculator for collecting and building 'operandString' on numbered button clicks.

- Began transfer of logic from old calculator for button clicks on +, -, x, /. To be continued...

- Succeeded in transfering part of the logic from 'sumSubMultDiv' in old calculator. To be continued...

Day 6

- Succeeded in transferring logic from 'sumSubMultDiv'.

- Succeeded in transferring logic from 'calculate'.

- Implemented useEffect() in the 'EquasionResultOutput' component in order to trigger the calculate logic when needed.

- Conditionally applied font size to the output of 'EquasionResultOutput' component in order to keep large numbers from going outside the appropriate borders.

- Added logic to 'EquasionResultOutput' and 'EquasionOutput' components so they display the appropriate information at the correct time.

- ISSUE TO FIX: subsequent presses of the '-' button while chaining operator button equations results in the '-' symbol appearing in front of operand1.

Day 7

- Began experimenting with tests.

Day 8

- Added more tests for 'buildOperand' and 'sumSubMultDiv'

- Fixed issue with 'EquasionOutput' text flashing inbetween state renders when 'Calculate' was activated. Added a useTimeout() to delay the state evaluation.

- Began setting up files and test files for equalsLogic, equalsHelperLogic. Going to attempt to build out equals and equalsHelper while using TDD. To be continued...

Day 9

- Divided the CalculatorButton component up into four more specific components (MiscButton, DisabledButton, NumberButton, OperatorButton) in order to keep each component/logic bundle more concise.
