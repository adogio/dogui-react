import title from './out/title/title';
import nav from './out/nav/nav';
import main from './out/main/main';
import input from './out/input/input';
import global from './global';
import cover from './res/cover/cover';
import button from './res/button/button';
import logo from './res/logo/logo';
import credit from './res/credit/credit';
import popUp from './res/popUp/popUp';
import smallInput from './res/smallInput/smallInput';
import smallButton from './res/smallButton/smallButton';
import secondLogo from './res/secondLogo/secondLogo';
import subtitle from './res/subtitle/subtitle';
import hugeButtonSwitch from './res/hugeButtonSwitch/bugeButtonSwitch';
import quote from './res/quote/quote';

export default {
    install: function (react) {
        global.mode = "stupid";
        var dog_handleInput = function (event, model) {
            var event = _event;
            var elem = event.target;
            var value = elem.value;
            react.setState(function (state) {
                state[model] = value;
            });
        }
        react.dog_handleInput = dog_handleInput.bind(react);
    }
}

export const Title = title;
export const Nav = nav;
export const Main = main;
export const Input = input;
export const Cover = cover;
export const Button = button;
export const Logo = logo;
export const Credit = credit;
export const PopUp = popUp;
export const SmallInput = smallInput;
export const SmallButton = smallButton;
export const SecondLogo = secondLogo;
export const Subtitle = subtitle;
export const HugeButtonSwitch = hugeButtonSwitch;
export const Quote = quote;