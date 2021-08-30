import { PropertiesProvider } from './contexts/PropertiesContext';
import { RouterApp } from './routes/RouterApp';


const App = () => {

  return (
    <AppState>
    <RouterApp />
    </AppState>
  )
}

const AppState = ({children}: {children: JSX.Element}) => {
  return (
    <PropertiesProvider>
      {children}
    </PropertiesProvider>
  )
}

export default App

