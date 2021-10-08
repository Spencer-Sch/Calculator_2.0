# Calculator 2.0

## Remaking my calculator project using React, Material-UI, and Jest

Days 1 - 3

- Front-end complete

Day 4

- Succeeded in getting the value of each button to print to the console. This value will be passed to the global store to be distributed to the necessary components later.

- Began creating a global data store using custom hooks. Following instructions from React course. To be continued...

- Succeeded in setting up the global data store and transmiting data from 'CalculatorButton' element to the 'EquationResultOutput' element.

Day 5

- Set up initial store actions to be called.

- Set up switch/case logic in 'CalculatorButton.js' to trigger appropriate dispatch actions when calculator buttons are clicked.

- Succeeded in transfering logic from old calculator for collecting and building 'operandString' on numbered button clicks.

- Began transfer of logic from old calculator for button clicks on +, -, x, /. To be continued...

- Succeeded in transfering part of the logic from 'sumSubMultDiv' in old calculator. To be continued...

Day 6

- Succeeded in transferring logic from 'sumSubMultDiv'.

- Succeeded in transferring logic from 'calculate'.

- Implemented useEffect() in the 'EquationResultOutput' component in order to trigger the calculate logic when needed.

- Conditionally applied font size to the output of 'EquationResultOutput' component in order to keep large numbers from going outside the appropriate borders.

- Added logic to 'EquationResultOutput' and 'EquationOutput' components so they display the appropriate information at the correct time.

- ISSUE TO FIX: subsequent presses of the '-' button while chaining operator button equations results in the '-' symbol appearing in front of operand1.

Day 7

- Began experimenting with tests.

Day 8

- Added more tests for 'buildOperand' and 'sumSubMultDiv'

- Fixed issue with 'EquationOutput' text flashing inbetween state renders when 'Calculate' was activated. Added a useTimeout() to delay the state evaluation.

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

Day 13

Update #1

- Successfully finished transfering logic from "decimal" using TDD. All tests passing successfully.

- Transfered "negate" logic. Wrote tests for negate. All tests passing successfully.

Update #2

- Successfully finished transfering logic from "posNeg" using TDD. All tests passing successfully.

Update #3

- Transfered logic for "getPercent" logic. Working on writing tests. To be continued...

Update #4

- Finished writing tests for "getPercent" logic. All tests passing successfully.

Update #5

- Worked at transfering "percent" and "percentHelper" logic as well as began to write tests for each. To be continued...

Day 14

Update #1

- Completed transfer of "percent" and "percentHelper". Some translation still needs work. Built a few tests for "percentHelper" and are passing successfully. To be continued...

Day 15

Update #1

- Completed full translation of "percent" and "percentHelper" logic. Built tests for "percent". All tests passing successfully.

- In the process of making all possible applications of "percent" logic function properly I needed to make edits to the logic in "sumSubMultDivLogic", "percentHelperLogic", and "buildOperandLogic".

Update #2

- Edited custom store hook to prevent unnecessary re-renders of calculator buttons.

- Successfully added a second state slice to manage equation history entries.

- Successfully connected necessary components to both store and retrieve equation history data.

Day 16

Update #1

- Fixed spelling mistake. Changed all "equasion" to "equation".

Update #2

- Added placeholder text in 'HistoryCardArea'.

Update #3

- Added functionality to clear history.

Update #4

- Added hover effect to history cards.

- Restricted height of HistoryCardArea.

Update #5

- Added funtionality to recall history entries by clicking on them.

Day 17

Update #1

- Made small edits to some test descriptions.

Update #2

- Fixed bug in button combo: ( 0 +/- 1 ). The input of "0" in the "negate" function in "utilityFunctions" was causing "undefined" to be returned. when "1" was pressed build "buildOperand" didn't know what to do with the value of "undefined" and crashed the app.

Update #3

- Added some constatns to "EquastionResultOutput" and "EquationOutput" to improve readability

- Fixed logic in "EquationOutput" to prevent display of a second equals sign when the operator is "=". Before "0 = 0 =" after "0 = 0".

Update #4

- Removed a portion of "buildOperandLogic" (and an accompanying test) originally added to solve a display issue. This introduced a logical issue. The logic issue has been fixed. Now I need to solve the display issue.

Update #5

- Began redesign of the system that decides what is rendered on screen and when. Ran into a few issues that need to be worked out. To be continued...

Day 18

Update #1

- Fixed logic error where global state data was being changed before historyEntry could be made. Solution: added "historyData" object to "history-store" slice and stored operan1, operand2, and operator into new fields operand1Store, operand2Store, and operatorStore to hold onto these values to give to historyEntry while still allowing calculateLogic to function as designed.

- Began refactoring the process for how information is being rendered to the screen. Instead of old IF...THEN... filter checking for truthy or falsy values I added the "render-store" state slice and "renderData" object. Now, throughout the code I explicetly tell the state what to display at every logical turn. This grants me complete control of what is displayed when. No more IF...THEN... issues.

- Need to add new renderData process to "+/-", "%", and "<-" logic.

- A bunch of my tests are failing now due to adding fields to my global state. These will need to be corrected and new tests will need to be added.

Update #2

- Added new render functionallity to "positiveNegativeLogic".

Update #3

- Added new render functionallity to "backspaceLogic".

Update #4

- Added new render functionallity to "percentLogic".

- Cleaned up un-used code and comments from files.
