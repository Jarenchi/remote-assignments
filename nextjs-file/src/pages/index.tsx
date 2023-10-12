import { useState } from "react";
import { Data } from "../public/getPostData";

function App() {
  const [likeCount, setLikeCount] = useState(Data.likeCount);
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
    <div className="flex justify-center items-center pt-10">
      <div className="max-w-4xl mx-10 p-10 border border-black rounded-lg">
        <h1 className="text-2xl font-bold">{Data.title}</h1>
        <article className="mb-2">
          {Data.sections.map((section) => (
            <div key={section.title} className="pt-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p>{section.content.explanation}</p>
              {section.content.features && (
                <ul className="pt-2">
                  {section.content.features.map((feature) => (
                    <li key={feature.id}>{feature.content}</li>
                  ))}
                </ul>
              )}
              {section.content.hooks && (
                <div className="pt-2">
                  <h3 className="text-lg font-semibold">{section.content.hooks.useState.title}</h3>
                  <p>{section.content.hooks.useState.explanation}</p>
                  <h3 className="text-lg font-semibold">{section.content.hooks.useEffect.title}</h3>
                  <p>{section.content.hooks.useEffect.explanation}</p>
                  <p>{section.content.hooks.useEffect.sideEffect}</p>
                </div>
              )}
              {section.content.rendering && (
                <div className="pt-2">
                  <h3 className="text-lg font-semibold">{section.content.rendering.CSR.title}</h3>
                  <p>{section.content.rendering.CSR.explanation}</p>
                  <h3 className="text-lg font-semibold">Pros</h3>
                  <ul>
                    <li>{section.content.rendering.CSR.pros[0]}</li>
                  </ul>
                  <h3 className="text-lg font-semibold">Cons</h3>
                  <ul>
                    <li>{section.content.rendering.CSR.cons[0]}</li>
                    <li>{section.content.rendering.CSR.cons[1]}</li>
                  </ul>
                  <h3 className="text-lg font-semibold">{section.content.rendering.SSR.title}</h3>
                  <p>{section.content.rendering.SSR.explanation}</p>
                  <h3 className="text-lg font-semibold">Pros</h3>
                  <ul>
                    <li>{section.content.rendering.SSR.pros[0]}</li>
                    <li>{section.content.rendering.SSR.pros[1]}</li>
                  </ul>
                  <h3 className="text-lg font-semibold">Cons</h3>
                  <ul>
                    <li>{section.content.rendering.SSR.cons[0]}</li>
                    <li>{section.content.rendering.SSR.cons[1]}</li>
                  </ul>
                  <h3 className="text-lg font-semibold">{section.content.rendering.Nextjs.title}</h3>
                  <p>{section.content.rendering.Nextjs.explanation}</p>
                </div>
              )}
            </div>
          ))}
        </article>
        <button
          className="text-white text-base bg-blue-500 border border-gray-300 rounded-md px-4 py-2 cursor-pointer"
          type="button"
          onClick={() => toggleLike()}
        >
          👍 ({likeCount})
        </button>
      </div>
    </div>
  );
}

export default App;
