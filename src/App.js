// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProductsList from "./pages/Products/ProductsList";

// import Login from "./pages/Login/Login";
// import Registration from "./pages/Registration/Registration";
// import MainLayout from "./layouts/MainLayout/MainLayout";
// import ProductDetails from "./pages/Products/ProductDetails";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/registration" element={<Registration />} />
//         <Route element={<MainLayout />}>
//           <Route path="/products" element={<ProductsList />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import LoginForm from ".pages/Login/Login";
import RegistrationForm from "./pages/Registration/Registration";

const App = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <LoginForm />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <RegistrationForm />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
