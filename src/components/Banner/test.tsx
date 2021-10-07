import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<Banner />', () => {
  it('should render the banner', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season</p>"
        buttonLink="/games/defy-death"
        buttonLabel="Buy now"
      />
    )

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/play the new season/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
