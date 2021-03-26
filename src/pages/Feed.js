import Article from "./Articles";
import React from "react";

export default function Feed() {
  return (
    <div>
      <Article
        title="Untruth to truth"
        src="pic 1.jpg"
        category="Spiritual"
        description=" Asathoma sadgamaya tamasoma jyothirgamaya....."
        link="https://www.mysticalblog.net/post/untruth-to-truth"
      />
      <Article
        title="Rise of Virat kohli"
        src="virat.jpg"
        category="Sports"
        description=" From a flamboyent delhi kid to a most popular athlete in the world..."
        link="#"
      />
      <Article
        title="Best skills to learn in 2021"
        src="skills.png"
        category="Education"
        description=" Skills that are in high demand which can get you first job...."
        link="#"
      />
      <Article
        title="Benefits of Yoga"
        src="yoga.jpg"
        category="Spiritual"
        description=" Yoga is Not just a physical exercise but a science that can transcend life..."
        link="https://www.mysticalblog.net/post/and-now-yoga"
      />
      <Article
        title="Road map to become full stack developer"
        src="stack.png"
        category="Education"
        description=" Steps to follow to become a Full-stack developer...."
        link="#"
      />
    </div>
  );
}
