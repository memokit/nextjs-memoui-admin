import SectionExam from 'pages-sections/Exam';


SectionExam.getInitialProps = async ({pathname }) => {

  console.log(pathname);

  return {pathname};
  
};


export default SectionExam;


