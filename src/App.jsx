import { Routes, Route } from "react-router-dom";
import './App.css'

import { Layout } from "./layout";

import { Admin, Editor, Home, LinkPage, Login, Lounge, Missing, Register, RequireAuth, Unauthorized } from "./pages";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="linkpage" element={<LinkPage />}/>
        <Route path="unauthorized" element={<Unauthorized />}/>

        {/* protected routes */}
        <Route element={<RequireAuth />}>
        <Route path="/" element={<Home/>}/>
        <Route path="editor" element={<Editor/>}/>
        <Route path="admin" element={<Admin />}/>
        <Route path="lounge" element={<Lounge />}/>
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />}/>
      </Route>
    </Routes>
  )
}

export default App
