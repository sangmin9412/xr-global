import React, { useEffect, useRef } from 'react';

const AppLayout = ({ children, className }) => {
  const wrapRef = useRef();
  useEffect(() => {
    document.querySelector('html').classList.add(className);
    document.querySelector('body').classList.add(className);

    function setWrapHeight () {
      wrapRef.current.style.height = window.innerHeight + 'px';
    }
    
    setWrapHeight();
    window.addEventListener('resize', setWrapHeight);
    return () => {
      document.querySelector('html').removeAttribute("class");
      document.querySelector('body').removeAttribute("class");
      window.removeEventListener('resize', setWrapHeight);
    };
  }, []);

  return (
    <div className={`wrap`} ref={wrapRef}>
      {children}
    </div>
  );
};

export default AppLayout;