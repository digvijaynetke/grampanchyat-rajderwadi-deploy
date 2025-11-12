import gavImage from '../images/gav.jpg';
import gav1Image from '../images/gav1.jpeg';
import gav2Image from '../images/gav2.jpeg';
import gav3Image from '../images/gav3.jpeg';

const Hero = () => {
  const achievements = [
    {
      id: 1,
      name: 'वृक्षरोपण',
      year: '२०२३',
      funds: '₹२,२५,०००',
      status: 'प्रगतीत',
      image: gav1Image
    },
    {
      id: 2,
      name: 'पाणीपुरवठा योजना',
      year: '२०२४',
      funds: '₹३,५०,०००',
      status: 'पूर्ण',
      image: gav3Image
    },
    {
      id: 3,
      name: 'प्राथमिक शाळा बांधकाम',
      year: '२०२२',
      funds: '₹३८,००,०००',
      status: 'पूर्ण',
      image: gav2Image
    }
  ];

  const idealChart = [
    { factor: 'स्वच्छता', detail: 'गाव स्वच्छ ठेवण्यावर भर' },
    { factor: 'पाणीपुरवठा', detail: 'नियमित आणि शुद्ध पाणी उपलब्ध करणे' },
    { factor: 'शिक्षण', detail: 'डिजिटल शाळा' },
    { factor: 'आरोग्य', detail: 'प्राथमिक आरोग्य सेवा उपलब्ध करणे' },
    { factor: 'पर्यावरण', detail: 'वृक्षारोपण आणि जलसंधारण' }
  ];

  const educationInstitutions = [
    { name: 'जिल्हा परिषद शाळा', type: 'प्राथमिक', contact: '९७६३२८९०९२' },
    { name: 'माध्यमिक विद्यालय', type: 'माध्यमिक', contact: '९४२०३६१५५५' }
  ];

  const healthInstitutions = [
    { name: 'उपकेंद्र', type: 'प्राथमिक उपचार', contact: '८३२९६१२९४०' },
    { name: 'वैद्यकीय दवाखाना', type: 'खासगी', contact: '९०७५२०११२०' }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image for Header */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${gavImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Header Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              राजदेरवाडीग्रामपंचायत
            </h1>
          </div>
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 md:h-24"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120L60 100C120 80 240 40 360 30C480 20 600 40 720 50C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Sub-heading */}
            <div className="flex justify-center mb-4">
              <div className="w-32 border-t-2 border-dotted border-gray-400"></div>
            </div>
            <p className="text-sm text-gray-500 text-center mb-2">माहिती</p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-teal-800">
              पुरस्कार / यशोगाथा
            </h2>

            {/* Achievements Table */}
            <div className="overflow-x-auto mb-12">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-teal-800 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-right">क्र.</th>
                    <th className="border border-gray-300 px-4 py-3 text-right">कामाचे नाव</th>
                    <th className="border border-gray-300 px-4 py-3 text-right">वर्ष</th>
                    <th className="border border-gray-300 px-4 py-3 text-right">निधी</th>
                    <th className="border border-gray-300 px-4 py-3 text-right">स्थिती</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((achievement, index) => (
                    <tr key={achievement.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-4 text-right font-semibold">{index + 1}</td>
                      <td className="border border-gray-300 px-4 py-4 text-right">{achievement.name}</td>
                      <td className="border border-gray-300 px-4 py-4 text-right">{achievement.year}</td>
                      <td className="border border-gray-300 px-4 py-4 text-right">{achievement.funds}</td>
                      <td className="border border-gray-300 px-4 py-4 text-right">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          achievement.status === 'पूर्ण' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {achievement.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Achievement Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.name} 
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-teal-800 mb-2">{achievement.name}</h3>
                    <p className="text-sm text-gray-600">वर्ष: {achievement.year}</p>
                    <p className="text-sm text-gray-600">निधी: {achievement.funds}</p>
                    <p className="text-sm text-gray-600">स्थिती: {achievement.status}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ideal Chart Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-800">
                ग्रामपंचायत आदर्श तक्ता
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-teal-800 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-right">आदर्श घटक</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">तपशील</th>
                    </tr>
                  </thead>
                  <tbody>
                    {idealChart.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-4 text-right font-semibold">{item.factor}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{item.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Education Institutions Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-800">
                शिक्षण संस्था यादी
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-teal-800 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-right">क्र.</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">संस्थेचे नाव</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">प्रकार</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">संपर्क</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationInstitutions.map((inst, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-4 text-right font-semibold">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{inst.name}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{inst.type}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{inst.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Health Institutions Section */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-800">
                आरोग्य संस्था यादी
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-teal-800 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-right">क्र.</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">संस्थेचे नाव</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">प्रकार</th>
                      <th className="border border-gray-300 px-4 py-3 text-right">संपर्क</th>
                    </tr>
                  </thead>
                  <tbody>
                    {healthInstitutions.map((inst, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-4 text-right font-semibold">{index + 1}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{inst.name}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{inst.type}</td>
                        <td className="border border-gray-300 px-4 py-4 text-right">{inst.contact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
