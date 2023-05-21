import React from "react";

const Answer = ({ answer }) => {
  return (
    <div className="p-2">
      <textarea
        readOnly
        className="bg-transparent border-2  border-indigo-500 w-full p-3 h-96 text-white rounded-md lg:h-full resize-none"
        placeholder="Wait For the Answer Here..."
        value={answer}
      ></textarea>
    </div>
  );
};

export default Answer;
