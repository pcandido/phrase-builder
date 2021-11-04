import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {

  it('should render a title', () => {
    const givenTitle = 'any title'
    render(<Card title={givenTitle}>anything</Card>)

    const titleElement = screen.getByText(givenTitle)
    expect(titleElement).toBeInTheDocument()
  })

  it('should render the content', () => {
    render(
      <Card title="any title">
        <input type="text" />
      </Card>,
    )

    const content = screen.getByRole('textbox')
    expect(content).toBeInTheDocument()
  })

})
