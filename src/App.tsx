import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function App() {
  const { loading, data, error } = useQuery(gql`
    query {
      name
    }
  `);

  return <div>App</div>;
}
