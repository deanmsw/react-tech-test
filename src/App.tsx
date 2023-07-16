import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Vulnerability from './containers/VulnerabilityView';


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vulnerability/:id" element={<Vulnerability />} />
        </Routes>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App;

