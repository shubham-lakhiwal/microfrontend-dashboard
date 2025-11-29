import React, {useRef, useEffect} from 'react';
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom';

export default function MarketingApp() {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(()=>{
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({pathname: nextPathName}) => {
        const {pathname} = history.location;
        if(pathname !== nextPathName) {
          history.push(nextPathName)
        }
      },
      path: history.location
    })
    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}