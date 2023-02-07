import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function Home({ data }) {
  return (
    <>
      {data.map((element) => {
        return (
          <Link key={element.id} to={`${element.id}`}>
            <li>{element.title}</li>
          </Link>
        );
      })}
    </>
  );
}

export default Home;
