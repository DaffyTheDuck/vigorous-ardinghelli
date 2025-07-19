import React, { useState } from "react";
import "./TagInput.css";

const TagInput = () => {
  // State for managing tags is now self-contained within this component
  const [tags, setTags] = useState(["Amsterdam", "London"]);
  const [tagInput, setTagInput] = useState("");

  // Handles adding a new tag when 'Enter' is pressed
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault(); // Prevents form submission if it's in a form
      // Add the new tag if it's not a duplicate
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput(""); // Clear the input field
    }
  };

  // Handles removing a tag when the 'x' is clicked
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="tag-section-container">
      <div className="tag-input-wrapper">
        {tags.map((tag, index) => (
          <div key={index} className="tag-item">
            {tag}
            <button onClick={() => removeTag(tag)} className="tag-remove-btn">
              &times;
            </button>
          </div>
        ))}
        <input
          type="text"
          className="tag-input"
          placeholder="Enter..."
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
        />
      </div>
    </div>
  );
};

export default TagInput;
