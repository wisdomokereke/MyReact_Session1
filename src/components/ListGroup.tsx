
function ListGroup() {                     // Define a React functional component called ListGroup

  const topics = [                         // Create an array named 'topics'
    "What is React",                       // Topic 1
    "Folder structure in React",           // Topic 2
    "JSX",                                 // Topic 3
    "Rendering Lists",                     // Topic 4
    "Conditional Rendering",               // Topic 5
    "",                                    // Empty item we don't want
    "",                                    // Another empty item
  ];

  const validTopics = topics.filter(       // Filter the topics array to remove empty values
    topic => topic.trim() !== ""           // Keep a topic only if, after trimming spaces, it's not empty
  );

  if (validTopics.length === 0) return null; // If all topics were empty and none remain, render nothing

  return (                                 // Return the JSX to be displayed on the screen
    <>                                     
      <ul>                                
        {validTopics.map((topic, index) => (  // Loop through validTopics using map to generate list items
          <li key={index}>{topic}</li>        // Render each topic inside an <li>, using index as key
        ))}                               
      </ul>                                
    </>                                    // End of the React fragment
  );
}

export default ListGroup;                  // Export the component so it can be used in other files