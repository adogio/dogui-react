import title from './react/out/title/title';
import nav from './react/out/nav/nav';
import main from './react/out/main/main';
import input from './react/out/input/input';
import global from './react/global';

export default {
    set: (react) => {
        global.mode = "stupid";
        let dog_handleInput = (_event, model) => {
            let event = _event;
            let elem = event.target;
            let value = elem.value;
            react.setState(state => state[model] = value);
        }
        react.dog_handleInput = dog_handleInput.bind(react);
    }
}

export const Title = title;
export const Nav = nav;
export const Main = main;
export const Input = input;