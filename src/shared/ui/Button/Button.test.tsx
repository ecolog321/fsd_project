import {render, screen} from '@testing-library/react'
import Button, { ThemeButton } from "./Button"

describe('buttons', () => {
    test ('have button', ()=>{
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })
    test ('have class', ()=>{
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    })
})