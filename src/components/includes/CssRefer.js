import React from "react";
import ReferCont from "./ReferCont";
import axios from "axios";

class CssRefer extends React.Component {
  state = {
    CssRefer: [],
  };
    constructor(props) {
      super();
  
      this.state = {
        menu: 0,
      };
    }
    
  getRefer = async () => {
    const {
      data: {
        data: { CssRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"

    );

    this.setState({ CssRefer });
  };

  componentDidMount() {
    this.getRefer();
  }


    render(){
      const { CssRefer } = this.state;
        return(
          <>
          {CssRefer.map((refer) => (
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
        )
    }
  }
  
  
  export default CssRefer;