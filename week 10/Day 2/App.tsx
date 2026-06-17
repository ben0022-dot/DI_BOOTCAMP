import DataFetcher from './components/DataFetcher'
import { getData } from './features/dataslice'
import type { RootState } from './store'

type Recipe = {
  id: number
  title: string
  image: string
}

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <DataFetcher<Recipe>
        fetchAction={getData}
        selectData={(state: RootState) => state.data.items}
        selectLoading={(state: RootState) => state.data.loading}
        selectError={(state: RootState) => state.data.error}
        title="Recipes"
        renderItem={(item) => (
          <div>
            <strong>{item.title}</strong>
            <br />
            <img src={item.image} alt={item.title} width={150} />
          </div>
        )}
      />
    </div>
  )
}

export default App