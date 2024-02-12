import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pokemon from "./routes/Pokemon/Pokemon";
import CreatePokemon from "./routes/Pokemon/CreatePokemon";
import PokemonDetail from "./routes/Pokemon/PokemonDetail";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/pokemon",
        element: <Pokemon />,
        // children: [
        // {
        //   path: ":id",
        //   element: <PokemonDetail />
        // }],
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />
      },
      {
        path: "create-pokemon",
        element: <CreatePokemon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
