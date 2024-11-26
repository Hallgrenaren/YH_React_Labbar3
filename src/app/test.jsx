import { render, screen, getByRole } from '@testing-library/react'
import Home from './layout'

test('Home renders navbar with creator name', () => {
    render(<Home />)

    const navbar = screen.getByRole('nav')

    getByRole(navbar, 'heading', {
        name: 'Martin Hallgren'
    })
})
