
import React from 'react';
import propType from "prop-types";
import { Link } from "react-router-dom";
function ReferCont({id,title,desc,use,desc2,element,tag,version,view,link,Definition,Accessibility,Related,mdn,w3c}) {
  return (
    <li>
      <Link to={{ //페이지 이동 설정
        pathname: "refer-detail",
        state: {id, title, desc, use, element, tag, version, view}
      }}>
        <span className='num'>{id}</span>
        <span className='title'>{title}</span>
        <span className='desc'>{desc}</span>
        <span className='use'>{use}</span>
      </Link>
    </li>
  )
}

ReferCont.propType = {
  id: propType.number.isRequired,
  title: propType.string.isRequired,
  desc: propType.string.isRequired,
  use: propType.string.isRequired,
}
export default ReferCont

