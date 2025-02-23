import React from 'react';
import "./resourcespage.css";

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <div className="resources-header">
        <h2>Resources</h2>
      </div>

      <div className="articles-section">
        <h3>Articles</h3>
        <div className="articles-container">
          <div className="article">
            <img src= "/warning_signs.jpg" alt="Warning Signs of Abuse" />
            <p>Warning Signs of Abuse</p>
          </div>
          <div className="article">
            <img src= "/healthy_relationships.jpg" alt="Healthy Relationships" />
            <p>Healthy Relationships</p>
          </div>
          <div className="article">
            <img src= "/safety_plan.jpg" alt="Create a Safety Plan" />
            <p>Create a Safety Plan</p>
          </div>
          <button className="see-all-button">see all</button>
        </div>
      </div>

      <div className="local-resources-section">
        <h3>Local Resources</h3>
        <p>Get direct support from domestic violence service providers in your area.</p>
        <input type="text" placeholder="Enter zip code" className="zip-code-input" />

        <div className="services-buttons">
          <button>All</button>
          <button>Shelter</button>
          <button>Crisis Support</button>
          <button>Mental Health/Counselling</button>
          <button>Legal Aid</button>
          <button>Financial Aid</button>
          <button>Sexual Assault</button>
          <button>Youth Services</button>
        </div>

        <button className="search-button">search</button>
      </div>
    </div>
  );
};

export default ResourcesPage;