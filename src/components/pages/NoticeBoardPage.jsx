import PageHero from '../PageHero';
import infoImage from '../../images/info.jpg';

const NoticeBoardPage = () => {
  return (
    <div>
      <PageHero 
        title="सूचना फलक" 
        subtitle="माहिती"
        image={infoImage}
      />
      {/* <NoticeBoard /> */}
    </div>
  );
};

export default NoticeBoardPage;

