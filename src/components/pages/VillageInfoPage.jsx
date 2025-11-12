import PageHero from '../PageHero';
// import PopulationStats from '../PopulationStats';
// import Achievements from '../Achievements';
import gavImage from '../../images/background.jpg';

const VillageInfoPage = () => {
  return (
    <div>
      <PageHero 
        title="गावाची माहिती" 
        subtitle="माहिती"
        image={gavImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
              गावाची माहिती
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose max-w-none">
                
                {/* --- गाव परिचय --- */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">गाव परिचय</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  राजदेरवाडी हे एक समृद्ध व शांत गाव आहे, जिथे शेती, परंपरा आणि एकतेला महत्त्व दिले जाते.
                  हे गाव नाशिक जिल्ह्यातील चांदवड तालुक्यात स्थित आहे आणि मराठी भाषिक लोक येथे राहतात.
                  गावात साक्षरतेचा दर उच्च आहे आणि शिक्षणाचा दर्जा चांगला आहे.
                  स्वतःची ग्रामपंचायत असल्याने स्थानिक पातळीवर प्रशासनाची सुविधा उपलब्ध आहे.
                </p>

                {/* --- स्थान --- */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">स्थान</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  At/Post-राजदेरवाडीखु, तालुका-चांदवड, जिल्हा-नाशिक.  
                  हे गाव महाराष्ट्र राज्यातील नाशिक जिल्ह्यातील चांदवड तालुक्यात आहे.  
                  जवळचे शहर चांदवड आहे.
                </p>

                {/* --- भाषा --- */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">भाषा</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  येथे मराठी भाषा बोलली जाते.
                </p>

                {/* --- विशेष --- */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">विशेष</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  संत नारायण महाराज ठाकरे यांच्या मार्गदर्शनाखाली या गावातून पैठणला पायी दिंडी सोहळा काढला जातो.
                  हा सोहळा धार्मिक आणि सामाजिक एकतेचे प्रतीक आहे, असे Lokmat.com वर नमूद आहे.
                </p>

                {/* --- हवामान --- */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">हवामान</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  येथे हवामान साधारणपणे उष्ण आणि दमट असते.  
                  हवामानाची माहिती AccuWeather आणि SkymetWeather.com सारख्या वेबसाइट्सवर उपलब्ध आहे.
                </p>

                {/* --- मुख्य वैशिष्ट्ये --- */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">मुख्य वैशिष्ट्ये</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>उच्च साक्षरता दर</li>
                  <li>शेती हा मुख्य व्यवसाय</li>
                  <li>सांस्कृतिक वारसा जपणारे गाव</li>
                  <li>संत नारायण महाराज ठाकरे यांच्या दिंडी सोहळ्यामुळे धार्मिक ओळख</li>
                  <li>राष्ट्रीय महामार्गाजवळ सोयीस्कर स्थान</li>
                  <li>आरोग्य आणि शिक्षण सुविधा उपलब्ध</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Achievements /> */}
      {/* <PopulationStats /> */}
    </div>
  );
};

export default VillageInfoPage;
