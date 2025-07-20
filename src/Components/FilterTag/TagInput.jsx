import React, { useState } from "react";
import "./TagInput.css";

const TagInput = () => {
  const [tags, setTags] = useState(["Amsterdam", "London"]);
  const [tagInput, setTagInput] = useState("");

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

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
