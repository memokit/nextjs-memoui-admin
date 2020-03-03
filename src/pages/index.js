import SectionHome from 'pages-sections/Home';


SectionHome.getInitialProps = async ({pathname }) => {

  console.log(pathname);

  return {pathname};
  
};


export default SectionHome;


