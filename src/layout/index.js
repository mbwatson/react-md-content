import { PropTypes } from 'prop-types'
import { Route, Routes } from 'react-router-dom'
import { Link } from '../components/link'
import { Menu } from '../components/menu'
import renciLogo from '../images/renci-logo-dark.png'
import { Markdown } from '../components/markdown'
import { siteMap } from '../content'
import './layout.scss'

//

export const Container = ({ maxWidth = '800px', children }) => {
  return (
    <div style={{ maxWidth: maxWidth, margin: 'auto' }}>
      { children }
    </div>
  )
}

//

const PageContent = ({ content }) => {
  const { markdown, attributes: { items } } = content
  return (
    <div className="main-content">
      <Markdown src={ markdown } />
      <hr/>
      <h2>Items</h2>
      <ul>
        { items.map(item => <li key={ item }>{ item }</li>) }
      </ul>
    </div>
  )
}

PageContent.propTypes = {
  content: PropTypes.shape({
    markdown: PropTypes.string,
    attributes: PropTypes.object,
  }).isRequired,
}

//

export const Layout = () => {
  return (
    <div className="app">
      <header>
        <div className="container">
          <Link to="/">
            <img src={ renciLogo } height="40px" />
          </Link>
        </div>
      </header>
      <main>
        <div className="container">
          <Menu items={ siteMap } />
          <Routes >
            {
              siteMap.map(item => (
                <Route
                  key={ `route-${ item.text }` }
                  path={ item.path }
                  element={
                    <PageContent
                      content={ item }
                      key={ `content-${ item.text }` }
                    />
                  }
                />
              ))
            }
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container">
          &copy; 2020
        </div>
      </footer>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
}
