import {render, screen} from '@testing-library/react'
import Button, { ButtonTheme } from "./Button"

describe('buttons', () => {
    test ('have button', ()=>{
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })
    test ('have class', ()=>{
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    })
})