import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section>
        <h1>Valobuddy</h1>
        <p>The Valorant Teammate finder for your games.</p>
      </section>
      <section>
        <Link to="/posts">
          <p>Browse Players</p>
        </Link>
        <Link to="/signup">
          <p>Sign Up</p>
        </Link>
      </section>
    </main>
  );
}

export default Home;
