import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';  // Import your styles

function Homepage() {
  return (
    <div className="container">
      <header>
        <h1>Karvill Badminton Aficionados</h1>
      </header>

      <p>Karvill Badminton Aficionados (KBA) is a tight-knit community of badminton enthusiasts that has been thriving for over 14 years. More than just a sports group, KBA is a family that supports each other in times of need, with guidance from Rizalina "Sally" Berganio-Luna and Francisco "Jojo" Luna. Their leadership has helped shape KBA into a place where members connect, grow, and thrive together.</p>
      <p>Beyond badminton, KBA serves as a sanctuary for those seeking meaning in life. Like a fishing net, it offers support to those feeling lost, helping them rediscover their purpose. Rooted in faith, KBA follows God’s teachings, providing not only a community for sports but also emotional and spiritual support for all its members.</p>
      <Link to="/posts">
        <button>Go to Post Messages</button>
      </Link>
    </div>
  );
}

export default Homepage;
