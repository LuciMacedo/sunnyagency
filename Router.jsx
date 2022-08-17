import { Home } from "./src/assets/pages/home/Home";
import { Route, Routes } from 'react-router'

export function Router() {

    return (
      <div>
        <Routes>
            <Route path='/' element= { <Home/> } />
        </Routes>
      </div>
    )
  }