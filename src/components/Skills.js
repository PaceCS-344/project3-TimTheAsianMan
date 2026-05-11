import React from 'react';

//Data Array
const skillsData = [
  {
    category: "Languages & Databases",
    items: ["C / C++", "PHP", "SQL (MariaDB)", "Python"],
    bgColor: "#ffebee", 
    borderColor: "#f44336"
  },
  {
    category: "Web Technologies",
    items: ["React", "Node.js", "HTML5 / CSS3"],
    bgColor: "#e3f2fd", 
    borderColor: "#2196f3"
  },
  {
    category: "Security & Tools",
    items: ["Network Security & Traffic Analysis", "Wireshark & Snort IDS", "Kali Linux & Penetration Testing", "Git & GitHub"],
    bgColor: "#e8f5e9", 
    borderColor: "#4caf50"
  }
];

//Highlighter Function
//Checks a string of text, if it matches the search term it gets highlighted
const getHighlightedText = (text, highlight) => {
  if (!highlight) return text;
  
  // This line safely escapes special regex characters like +, *, ?, etc.
  const escapedHighlight = highlight.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  
  // Now it will safely search for "C++" without treating the "+" as a command
  const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
  
  return parts.map((part, index) => 
    part.toLowerCase() === highlight.toLowerCase() ? 
      <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold', color: 'black', padding: '2px', borderRadius: '3px' }}>
        {part}
      </span> 
      : part
  );
};

//Skill Card
const SkillCard = ({ title, skills, bgColor, borderColor, searchTerm }) => (
  <div style={{
    backgroundColor: bgColor,
    borderTop: `5px solid ${borderColor}`,
    borderRadius: '10px',
    padding: '20px',
    flex: '1',
    minWidth: '250px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    color: '#333',
    transition: 'transform 0.2s ease-in-out'
  }}>
    <h3 style={{ borderBottom: `2px solid ${borderColor}`, paddingBottom: '10px', marginTop: 0 }}>
      {/*Apply highlight to the category title*/}
      {getHighlightedText(title, searchTerm)}
    </h3>
    <ul style={{ fontStyle: 'italic', paddingLeft: '20px', lineHeight: '1.6' }}>
      {/*Highlight individual skill bullet point(s)*/}
      {skills.map((skill, index) => (
        <li key={index}>{getHighlightedText(skill, searchTerm)}</li>
      ))}
    </ul>
  </div>
);

//Main Skills Component
const Skills = ({ searchTerm = "" }) => {
  const lowercasedTerm = searchTerm.toLowerCase();
  
  //Filter the data: only show cards that have a matching title OR matching skills
  const filteredSkills = skillsData.map(category => {
    const matchingSkills = category.items.filter(item => 
      item.toLowerCase().includes(lowercasedTerm)
    );
    
    const titleMatches = category.category.toLowerCase().includes(lowercasedTerm);

    if (titleMatches || matchingSkills.length > 0) {
      return {
        ...category,
        //If the title matches, show all skills. Otherwise, only show the specific skills that matched.
        items: titleMatches ? category.items : matchingSkills
      };
    }
    return null; //Hide the card completely if nothing matches
  }).filter(item => item !== null);

  return (
    <section id="skills" style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Technical Skills</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((data, index) => (
            <SkillCard 
              key={index} 
              title={data.category} 
              skills={data.items} 
              bgColor={data.bgColor}
              borderColor={data.borderColor}
              searchTerm={searchTerm} // Pass the term down so the card can highlight it
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%', color: '#888' }}>
            No skills match your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default Skills;