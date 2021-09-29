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

Update #1

- Divided the CalculatorButton component up into four more specific components (MiscButton, DisabledButton, NumberButton, OperatorButton) in order to keep each component/logic bundle more concise.

Update #2

- Succeeded in transferring logic from 'equalsHelper' while using TDD.

- Began transferring logic from 'equals' while using TDD. So far all has been successful. To be continued...

Day 10

Update #1

- Succeeded in completing the transfer of logic from 'equals' while using TDD. All tests are passing successfully.

- removed previousOperator field from global state object because it is not used.

Update #2

- Replaced each occurance of 'curState.propertyName' in all logic files with constants

Update #3

- Succeeded in completing the transfer of logic from 'sumSubMultDiv' while using TDD. All tests are passing successfully.

- Began re-writing sumSubMultDivLogic.test descriptions to be consistent and more read-able. To Be Continued...

Day 11

Update #1

- Finished re-writing sumSubMultDivLogic.test desciptions.

- Messing around with Theme and styling to change button colors. Still needs work.

Update #2

- Finished re-writing equalsHelperLogic.test desciptions.

- Finished re-writing equalsLogic.test desciptions.

- Finished re-writing buildOperandLogic.test desciptions.

Update #3

- Successfully implemented color styles to calculator buttons through the MUI theme.

- Successfully implemented conditional classes to giving specific buttons ("+/-", ".", "=") different color styles from the other buttons in their corresponding button sub-categories (MiscButton, OperatorButton).

Update #4

- Successfully transfered logic for "divideByZeroHandler" using TDD. All tests passing successfully.

- Wrote tests for CalculateLogic. All tests passing successfully.

Day 12

Update #1

- Successfully transfered logic for "cClear" & "ceClear".

- Wrote tests for new "clearFunctions". All tests passing successfully.

Update #2

- Successfully transfered logic for "backspace" using TDD. All tests passing successfully.

- Added utilityFunctions.js and successfully transfered "isFloat" using TDD. All tests passing successfully.

Update #3

- Corrected button combo portion of test descriptions in backspaceLogic.test.js

- Began transfering logic for 'decimal' using TDD. Tests passing successfully. To Be Continued...

day 13

Update #1

- Successfully finished transfering logic from "decimal" using TDD. All tests passing successfully.

- Transfered "negate" logic. Wrote tests for negate. All tests passing successfully.

Update #2

- Successfully finished transfering logic from "posNeg" using TDD. All tests passing successfully.

Update #3

- Transfered logic for "getPercent" logic. Working on writing tests. To be continued...
