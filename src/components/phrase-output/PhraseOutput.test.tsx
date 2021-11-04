import { render, screen } from '@testing-library/react'
import { PhraseOutput } from './PhraseOutput'

describe('PhraseOutput', () => {

  it('should render the given value', () => {
    const givenPhrase = 'any phrase'
    render(<PhraseOutput value={givenPhrase} />)
    const text = screen.getByText(givenPhrase)
    expect(text).toBeInTheDocument()
  })

})
