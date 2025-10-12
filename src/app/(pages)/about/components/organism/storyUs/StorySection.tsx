"use client";

import React from "react";
import ImageBox from "../../atom/storyUs/ImageBox";
import StoryContent from "../../molecules/storyUs/StoryContent";

const StorySection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse items-start justify-between gap-10 md:gap-20 py-10 px-4 md:px-20 bg-gray-50 rounded-2xl w-full md:mx-auto container">
      <ImageBox
        src="/images/about/story/story.png"
        alt="داشبورد پلتفرم"
        className="md:w-1/2"
      />
      <div className="md:w-1/2" >
        <StoryContent />
      </div>
    </section>
  );
};

export default StorySection;
