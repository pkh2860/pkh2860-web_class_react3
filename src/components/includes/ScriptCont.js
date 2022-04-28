import React from "react";

function ScriptCont(props) {
  return (
    <section className={`script__cont ${props.color}`}>
      <div className="container">
        <div className="script__inner">
          <article className="script__item">
            <figure className="img">
              <a href="/">
                <img src="img/script02.png" alt="" />
              </a>
            </figure>
            <ul>
              <li>
                <a href="/">1</a>
              </li>
              <li>
                <a href="/">2</a>
              </li>
              <li>
                <a href="/">3</a>
              </li>
              <li>
                <a href="/">4</a>
              </li>
              <li>
                <a href="/">5</a>
              </li>
              <li>
                <a href="/">6</a>
              </li>
              <li>
                <a href="/">7</a>
              </li>
              <li>
                <a href="/">8</a>
              </li>
              <li>
                <a href="/">9</a>
              </li>
              <li>
                <a href="/">10</a>
              </li>
            </ul>

            <h3>animationRequestFrame</h3>

            <div>
              <p>
                레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다.
                레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고
                보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.
                사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃
                제작은 상당히 중요합니다.
              </p>
              <p>
                레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다.
                레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고
                보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.
                사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃
                제작은 상당히 중요합니다.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ScriptCont;
