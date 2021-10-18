# Calculator 2.0

## Remaking my calculator project using React, Material-UI, and Jest

### Days 1 - 3

---

- Front-end complete

### Day 4

---

- Succeeded in getting the value of each button to print to the console. This value will be passed to the global store to be distributed to the necessary components later.

- Began creating a global data store using custom hooks. Following instructions from React course. To be continued...

- Succeeded in setting up the global data store and transmiting data from 'CalculatorButton' element to the 'EquationResultOutput' element.

### Day 5

---

- Set up initial store actions to be called.

- Set up switch/case logic in 'CalculatorButton.js' to trigger appropriate dispatch actions when calculator buttons are clicked.

- Succeeded in transfering logic from old calculator for collecting and building 'operandString' on numbered button clicks.

- Began transfer of logic from old calculator for button clicks on +, -, x, /. To be continued...

- Succeeded in transfering part of the logic from 'sumSubMultDiv' in old calculator. To be continued...

### Day 6

---

- Succeeded in transferring logic from 'sumSubMultDiv'.

- Succeeded in transferring logic from 'calculate'.

- Implemented useEffect() in the 'EquationResultOutput' component in order to trigger the calculate logic when needed.

- Conditionally applied font size to the output of 'EquationResultOutput' component in order to keep large numbers from going outside the appropriate borders.

- Added logic to 'EquationResultOutput' and 'EquationOutput' components so they display the appropriate information at the correct time.

- ISSUE TO FIX: subsequent presses of the '-' button while chaining operator button equations results in the '-' symbol appearing in front of operand1.

### Day 7

---

- Began experimenting with tests.

### Day 8

---

- Added more tests for 'buildOperand' and 'sumSubMultDiv'

- Fixed issue with 'EquationOutput' text flashing inbetween state renders when 'Calculate' was activated. Added a useTimeout() to delay the state evaluation.

- Began setting up files and test files for equalsLogic, equalsHelperLogic. Going to attempt to build out equals and equalsHelper while using TDD. To be continued...

### Day 9

---

#### Update #1

- Divided the CalculatorButton component up into four more specific components (MiscButton, DisabledButton, NumberButton, OperatorButton) in order to keep each component/logic bundle more concise.

#### Update #2

- Succeeded in transferring logic from 'equalsHelper' while using TDD.

- Began transferring logic from 'equals' while using TDD. So far all has been successful. To be continued...

### Day 10

---

#### Update #1

- Succeeded in completing the transfer of logic from 'equals' while using TDD. All tests are passing successfully.

- removed previousOperator field from global state object because it is not used.

#### Update #2

- Replaced each occurance of 'curState.propertyName' in all logic files with constants

#### Update #3

- Succeeded in completing the transfer of logic from 'sumSubMultDiv' while using TDD. All tests are passing successfully.

- Began re-writing sumSubMultDivLogic.test descriptions to be consistent and more read-able. To Be Continued...

### Day 11

---

#### Update #1

- Finished re-writing sumSubMultDivLogic.test desciptions.

- Messing around with Theme and styling to change button colors. Still needs work.

#### Update #2

- Finished re-writing equalsHelperLogic.test desciptions.

- Finished re-writing equalsLogic.test desciptions.

- Finished re-writing buildOperandLogic.test desciptions.

#### Update #3

- Successfully implemented color styles to calculator buttons through the MUI theme.

- Successfully implemented conditional classes to giving specific buttons ("+/-", ".", "=") different color styles from the other buttons in their corresponding button sub-categories (MiscButton, OperatorButton).

#### Update #4

- Successfully transfered logic for "divideByZeroHandler" using TDD. All tests passing successfully.

- Wrote tests for CalculateLogic. All tests passing successfully.

### Day 12

---

#### Update #1

- Successfully transfered logic for "cClear" & "ceClear".

- Wrote tests for new "clearFunctions". All tests passing successfully.

#### Update #2

- Successfully transfered logic for "backspace" using TDD. All tests passing successfully.

- Added utilityFunctions.js and successfully transfered "isFloat" using TDD. All tests passing successfully.

#### Update #3

- Corrected button combo portion of test descriptions in backspaceLogic.test.js

- Began transfering logic for 'decimal' using TDD. Tests passing successfully. To Be Continued...

### Day 13

---

#### Update #1

- Successfully finished transfering logic from "decimal" using TDD. All tests passing successfully.

- Transfered "negate" logic. Wrote tests for negate. All tests passing successfully.

#### Update #2

- Successfully finished transfering logic from "posNeg" using TDD. All tests passing successfully.

#### Update #3

- Transfered logic for "getPercent" logic. Working on writing tests. To be continued...

#### Update #4

- Finished writing tests for "getPercent" logic. All tests passing successfully.

#### Update #5

- Worked at transfering "percent" and "percentHelper" logic as well as began to write tests for each. To be continued...

### Day 14

---

#### Update #1

- Completed transfer of "percent" and "percentHelper". Some translation still needs work. Built a few tests for "percentHelper" and are passing successfully. To be continued...

### Day 15

---

#### Update #1

- Completed full translation of "percent" and "percentHelper" logic. Built tests for "percent". All tests passing successfully.

- In the process of making all possible applications of "percent" logic function properly I needed to make edits to the logic in "sumSubMultDivLogic", "percentHelperLogic", and "buildOperandLogic".

#### Update #2

- Edited custom store hook to prevent unnecessary re-renders of calculator buttons.

- Successfully added a second state slice to manage equation history entries.

- Successfully connected necessary components to both store and retrieve equation history data.

### Day 16

---

#### Update #1

- Fixed spelling mistake. Changed all "equasion" to "equation".

#### Update #2

- Added placeholder text in 'HistoryCardArea'.

#### Update #3

- Added functionality to clear history.

#### Update #4

- Added hover effect to history cards.

- Restricted height of HistoryCardArea.

#### Update #5

- Added funtionality to recall history entries by clicking on them.

### Day 17

---

#### Update #1

- Made small edits to some test descriptions.

#### Update #2

- Fixed bug in button combo: ( 0 +/- 1 ). The input of "0" in the "negate" function in "utilityFunctions" was causing "undefined" to be returned. when "1" was pressed build "buildOperand" didn't know what to do with the value of "undefined" and crashed the app.

#### Update #3

- Added some constatns to "EquastionResultOutput" and "EquationOutput" to improve readability

- Fixed logic in "EquationOutput" to prevent display of a second equals sign when the operator is "=". Before "0 = 0 =" after "0 = 0".

#### Update #4

- Removed a portion of "buildOperandLogic" (and an accompanying test) originally added to solve a display issue. This introduced a logical issue. The logic issue has been fixed. Now I need to solve the display issue.

#### Update #5

- Began redesign of the system that decides what is rendered on screen and when. Ran into a few issues that need to be worked out. To be continued...

### Day 18

---

#### Update #1

- Fixed logic error where global state data was being changed before historyEntry could be made. Solution: added "historyData" object to "history-store" slice and stored operan1, operand2, and operator into new fields operand1Store, operand2Store, and operatorStore to hold onto these values to give to historyEntry while still allowing calculateLogic to function as designed.

- Began refactoring the process for how information is being rendered to the screen. Instead of old IF...THEN... filter checking for truthy or falsy values I added the "render-store" state slice and "renderData" object. Now, throughout the code I explicetly tell the state what to display at every logical turn. This grants me complete control of what is displayed when. No more IF...THEN... issues.

- Need to add new renderData process to "+/-", "%", and "<-" logic.

- A bunch of my tests are failing now due to adding fields to my global state. These will need to be corrected and new tests will need to be added.

#### Update #2

- Added new render functionallity to "positiveNegativeLogic".

#### Update #3

- Added new render functionallity to "backspaceLogic".

#### Update #4

- Added new render functionallity to "percentLogic".

- Cleaned up un-used code and comments from files.

#### Update #5

- Updated "backspaceLogic.test" to include new history-store and render-store state slices. All tests passing successfully.

#### Update #6

- Updated "buildOperandLogic.test" to include new history-store and render-store state slices. All tests passing successfully.

### Day 19

---

#### Update #1

- Renamed "equationResult" variable in "calculateLogic" to "equationResultVar" to destinguish from "equationResult" field in global state object.

- updated tests in "calculateLogic.test" in order to reflect the additions of history slice and render slice to global state.

#### Update #2

- updated tests in "clearFunctionLogic.test" in order to reflect the additions of render slice to global state.

#### Update #3

- updated tests in "decimalLogic.test" in order to reflect the additions of render slice to global state.

#### Update #4

- updated tests in "percentLogic.test" in order to reflect the additions of render slice to global state.

#### Update #5

- updated tests in "positiveNegativeLogic.test" in order to reflect the additions of render slice to global state.

#### Update #6

- updated tests in "sumSubMultDivLogic.test" in order to reflect the additions of render slice to global state.

#### Update #7

- Added functionality so an equation that attempts to divide by zero does not generate a history entry. "runAddEntry" field was added to global state in order to achieve this.

- Edited tests in "calculateLogic.test" to reflect this change to global state. All tests passing successfully.

### Day 20

---

#### Update #1

- Fixed bug where the "renderData" field was not being returned by 'RECALL_ENTRY' action in "history-store". This was preventing the equation and equationResult from being displayed in "EquationOutput" and "EquationResultOutput" components when a "HistoryCard" was clicked.

- Moved the useEffect call that dispatches the 'ADD_ENTRY' action from the "EquationResultOutput" component into the "HistoryCardArea" component.

#### Update #2

- Added a test for "HistoryCardArea" component.

#### Update #3

- Added tests for "NumberButton", "MiscButton", "DisabledButton", and "OperatorButton" components.

#### Update #4

- Added describe() to each testing suite in the "constants" folder.

### Day 21

---

#### Update #1

- Added tests for "CalculatorButtonArea" component.

- Added "data-testid" attribute to "CalculatorButtonArea", "NumberButton", "OperatorButton", "MiscButton", and "DisabledButton" components in order to access them for tests.

#### Update #2

- Added tests for "EquationResultOutput" and "EquationOutput" components.

#### Update #3

- Added tests for "EquationArea" component.

- Added "data-testid" attribute to "EquationArea" component in order to access for tests.

#### Update #4

- Added tests for "CalculatorSection" component.

- Added "data-testid" attribute to "CalculatorSection" component in order to access for tests.

#### Update #5

- Added tests for "HistoryCard" component.

#### Update #6

- Added tests for "HistoryCardArea" component.

- Added "data-testid" attribute to "HistoryCardArea" component in order to access for tests.

#### Update #7

- Added tests for "HistoryClearButton" component.

#### Update #8

- Added tests for "HistoryTitle" component.

#### Update #9

- Added tests for "HistorySection" component.

- Added "data-testid" attribute to "HistorySection" component in order to access for tests.

#### Update #10

- Added tests for "App" component.

- Began adding E2E tests.

  - Started testing if user-events on number buttons rendered the proper output to the "EquationResultOutput" component.

- Split "App" tests into seperate files to help reduce test run times.

#### Update #11

- Finished adding tests for user-events on number buttons ("App.numberButtons.test"). All tests passing successfully.

#### Update #12

- Moved "data-testid" property in "DisabledButton", "MiscButton", "NumberButton", and "OperatorButton" components onto the actual button element.

- Began to add tests to "App.operatorButtons.test" to test operator buttons.

- Added "data-testid" attribute to "EquationOutput" component in order to access for tests.

#### Update #13

- Completed tests in "App.operatorButtons.test". All tests passing successfully.

#### Update #14

- Completed tests in "App.miscButtons.test". All tests passing successfully.

#### Update #15

- Commented out all "console.log" statements in logic and store files. Exception: store.js.

#### Update #16

- Slightly re-organized code in App.operatorButtons.test and App.numberButtons.test.

#### Update #17

- Commented out "console.log" statements in store.js.

- Began to add tests to "App.buttonCombos.backspace.test" to test backspace logic in multiple situations.

#### Update #18

- Finished adding tests to "App.buttonCombos.backspace.test". All passing successfully.

- Began to add tests to "App.buttonCombos.buildOperand.test" to test buildOperand logic in multiple situations.

#### Update #19

- Finished adding tests to "App.buttonCombos.buildOperand.test". All passing successfully.

#### Update #20

- Made small edits to test in App.buttonCombos.backspace.test.js.

- Began to add tests to "App.buttonCombos.calculate.test" to test calculate logic in multiple situations. To be continued...

### Day 22

---

#### Update #1

- Finished adding tests to "App.buttonCombos.buildOperand.test". All passing successfully.

#### Update #2

- Finished adding tests to "App.buttonCombos.clearFunctions.test". All passing successfully.

#### Update #3

- Found and fixed a bug in "decimalLogic". (button combo: 1 + . 2 = ) when decimal was clicked it caused "equationOutput" component to go blank. Fixed so the current equation is always displayed.

- Edit of (button combo: 1 + .) test in "decimalLogic.test" required after edit to "decimalLogic".

- Made small edits to test descriptions in "App.miscButtons.test".

- Finished adding tests to "App.buttonCombos.decimal.test". All passing successfully.

#### Update #4

- Found and fixed a bug in "buildOperandLogic". (button combo: 1 + 2 = 4) when "4" was clicked "equationOutput" did not clear. Fixed so "equationOutput" only clears if "equalsIsOn" is triggered in "buildOperandLogic".

- Edit of (click sequence: 1 = 2 CE) test in "App.miscButton.test" required after edit to "buildOperandLogic".

- Began to add tests to "App.buttonCombos.equals.test" to test equals logic in multiple situations. To be continued...

### Day 23

---

#### Update #1

- Finished adding tests to "App.buttonCombos.equals.test". All passing successfully.

#### Update #2

- Commented out all console.log statements in decimalLogic.

- Found bug where clicking a number button after clicking the "%" button did not display the proper information in "equationOutput" component. Fix required an edit to "buildOperandLogic".

- The above edit to "buildOperandLogic" then required edits to "(button combo: 12 + % 2 )" test in "buildOperandLogic.test".

- Bug fixed. All render data is displaying as it should. All tests are passing successfully.

#### Update #3

- Finished adding tests to "App.buttonCombos.percent.test". All passing successfully.

#### Update #4

- Removed un-needed "async" from test functions in "App.buttonCombos.percent.test".

- Finished adding tests to "App.buttonCombos.positiveNegative.test". All passing successfully.

- Began to add tests to "App.buttonCombos.sumSubMultDiv.test" to test sumSubMultDiv logic in multiple situations. To be continued...

#### Update #5

- Finished adding tests to "App.buttonCombos.sumSubMultDiv.test". All passing successfully.

#### Update #6

- Small edit to "App.buttonCombos.sumSubMultDiv.test" to remove un-needed "async".

- Finished adding tests to "App.buttonCombos.miscCombos.test". All passing successfully.

### Day 24

---

#### Update #1

- Finished adding test to "App.buttonCombos.clearHistory.test". Test passing successfully.

### Day 25

---

#### Update #1

- Disabled the ripple effect on all buttons.

- Made all buttons looks like they are being pressed in when clicked.

#### Update #2

- Added my custom box shadow to the MUI Theme object 'shadows' array in order to make the JSS in my 'EquationOutput', 'EquationResultOutput', and 'HistoryCardArea' components easier to read.

#### Update #3

- In 'EquationOutput' and 'EquationResultOutput' I Changed const name from 'RENDER_THIS' to 'content' to improve readability.

#### Update #4

- Working to keep the text content of 'EquationOutput' and 'EquationResultOutput' inside their respective containers.

- Edited 'utilityFunctions.test' to remove some redundancy.

- Changed 'renderEquation: null' to 'renderEquation: ""' in default state set up in 'render-store'.

- Changed 'renderEquation: null' to 'renderEquation: ""' in all tests.

#### Update #5

- Continueing work to keep the text content of 'EquationOutput' and 'EquationResultOutput' inside their respective containers. Implemented a useful font size calc formula that I found to help scale font sizes with viewport width.

- Worked on finding ideal font sizes based on character-length-breakpoints.

### Day 25

---

#### Update #1

- Began implementing breakpoints to keep the text content of 'EquationOutput' and 'EquationResultOutput' inside their respective containers.

- 'EquationResultOutput' while 'typographySmall' class is applied:

  - Completed breakpoint process from smallest screen size to largest.

- 'EquationResultOutput' while 'typography' class is applied:

  - Yet to be done.

- Edited the 'md' breakpoint from 960 to 950 in MUI theme object.

- Added a 'minWidth' to the overall container in 'App'.

- Used breakpoints to hide 'historySection' on smaller screens.

- Used breakpoints to make 'calculatorSection' take fill all of the parent container on smaller screens.

### Day 26

---

#### Update #1

- 'EquationResultOutput' while 'typography' class is applied:

  - Completed breakpoint process from smallest screen size to largest.

#### Update #2

- Divided 'typography' class in 'EquationResultOutput' and 'EquationOutput' into 'typographyMed' and 'typographyBig'.

- Finished adding/editing media queries in 'EquationResultOutput' and 'EquationOutput'.

### Day 27

---

#### Update #1

- Added conditional classes to text content in 'HistoryCard' to keep text inside of appropriate boundaries.

#### Update #2

- In 'theme.js': Edited a media query on the 'MuiContainer-root' class to fix a padding issue.

- Edited the 'lg' breakpoint from 1280 to 1265 in MUI theme object.

- Changed point at which 'HistorySection' disapears to prevent the history cards from scaling down and looking bad.

- Need to edit some of my media queries on 'EquationResultOutput' and 'EquationOutput'.

#### Update #3

- Edited media queries on 'EquationResultOutput' and 'EquationOutput' to keep the text content of 'EquationOutput' and 'EquationResultOutput' inside their respective containers.
