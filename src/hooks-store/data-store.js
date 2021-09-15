import { initStore } from "./store";

const configureStore = () => {
    const actions = {
        BUILD_INTEGER: (curState, curInteger) => {
            // logic
            const updatedInteger = // ?
            // logic
            return { currentInteger: updatedInteger }
        }

    }
    initStore(actions, );
};