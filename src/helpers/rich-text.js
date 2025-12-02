const renderDescription = (description) => {
  if (!Array.isArray(description)) return null;

  return description.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        // Renderiza cada párrafo
        return (
          <p key={index}>
            {block.children.map((child, i) => child.text).join(" ")}
          </p>
        );

      case "list":
        // Renderiza listas (si tuvieras listas en este endpoint)
        return (
          <ul key={index}>
            {block.children.map((item, i) => (
              <li key={i}>
                {item.children.map((child, j) => child.text).join(" ")}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  });
};

export default renderDescription;
