import { render, screen } from '@testing-library/react'
import { Phrase } from './Phrase'

describe('Phrase', () => {

  it('should render the given value', () => {
    const givenPhrase = 'any phrase'
    render(<Phrase value={givenPhrase} />)
    const text = screen.getByText(givenPhrase)
    expect(text).toBeInTheDocument()
  })

})