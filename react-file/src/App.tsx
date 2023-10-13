import { useState } from "react";
import styled from "styled-components";
import { data } from "./getPostData";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;
const Post = styled.div`
  max-width: 50rem;
  margin: 0 10px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  color: white;
  background-color: #5a91ea;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

function App() {
  const [likeCount, setLikeCount] = useState(data.likeCount);
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  }

  return (
    <Wrapper>
      <Post>
        <h1>{data.title}</h1>
        <article>
          {data.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.content.explanation}</p>
              {section.content.features && (
                <ul>
                  {section.content.features.map((feature) => (
                    <li key={feature.id}>{feature.content}</li>
                  ))}
                </ul>
              )}
              {section.content.hooks && (
                <div>
                  <h3>{section.content.hooks.useState.title}</h3>
                  <p>{section.content.hooks.useState.explanation}</p>
                  <h3>{section.content.hooks.useEffect.title}</h3>
                  <p>{section.content.hooks.useEffect.explanation}</p>
                  <p>{section.content.hooks.useEffect.sideEffect}</p>
                </div>
              )}
              {section.content.rendering && (
                <div>
                  <h3>{section.content.rendering.CSR.title}</h3>
                  <p>{section.content.rendering.CSR.explanation}</p>
                  <h3>Pros</h3>
                  <ul>
                    <li>{section.content.rendering.CSR.pros[0]}</li>
                  </ul>
                  <h3>Cons</h3>
                  <ul>
                    <li>{section.content.rendering.CSR.cons[0]}</li>
                    <li>{section.content.rendering.CSR.cons[1]}</li>
                  </ul>
                  <h3>{section.content.rendering.SSR.title}</h3>
                  <p>{section.content.rendering.SSR.explanation}</p>
                  <h3>Pros</h3>
                  <ul>
                    <li>{section.content.rendering.SSR.pros[0]}</li>
                    <li>{section.content.rendering.SSR.pros[1]}</li>
                  </ul>
                  <h3>Cons</h3>
                  <ul>
                    <li>{section.content.rendering.SSR.cons[0]}</li>
                    <li>{section.content.rendering.SSR.cons[1]}</li>
                  </ul>
                  <h3>{section.content.rendering.Nextjs.title}</h3>
                  <p>{section.content.rendering.Nextjs.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </article>
        <Button type="button" onClick={() => toggleLike()}>
          👍 ({likeCount})
        </Button>
      </Post>
    </Wrapper>
  );
}

export default App;
