import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './layout'
import { Markdown } from './components/markdown'
import { siteMap } from './content/site-map'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            siteMap.map(item => (
              <Route
                key={ `route-${ item.text }` }
                path={ item.path }
                element={ <Markdown src={ item.content } /> }
              />
            ))
          }
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
