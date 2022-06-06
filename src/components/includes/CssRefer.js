import React from "react";
import axios from "axios";
import ReferCont from "./ReferCont";

class CssRefer extends React.Component {
  state = {
    cssRefer: [],
  };

  getRefer = async () => {
    const {
      data: {
        data: { cssRefer },
      },
    } = await axios.get(
      "https://pkh2860.github.io/pkh2860-web_class_react3/src/assets/json/referenceCss.json"
    );

    this.setState({ cssRefer });
  };

  componentDidMount() {
    this.getRefer();
  }

  render() {
    const { cssRefer } = this.state;

    return (
      <>
        {cssRefer.map((refer) => (
          <ReferCont
            key={refer.id}
            id={refer.id}
            title={refer.title}
            desc={refer.desc}
            use={refer.use}
            desc2={refer.desc2}
            element={refer.element}
            tag={refer.tag}
            version={refer.version}
            view={refer.view}
            image={refer.image}
            link={refer.link}
            Definition={refer.Definition}
            Accessibility={refer.Accessibility}
            mdn={refer.mdn}
            w3c={refer.w3c}
          />
        ))}
      </>
    );
  }
}

export default CssRefer;