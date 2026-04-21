import { useLanguage } from "../hooks/useLanguage";
import SeoMeta from "../components/common/SeoMeta";
import { Link } from "react-router-dom";
import { Sparkles, GraduationCap, BookOpen, PenTool, Award, Lightbulb } from "lucide-react";

export default function EducationAstrologyPage() {
  const { language } = useLanguage();
  const pick = (mr, hi, en) => {
    if (language === "mr") return mr;
    if (language === "hi") return hi;
    return en;
  };

  return (
    <div className="service-detail-page">
      <SeoMeta 
        title={pick("शिक्षण ज्योतिष आणि करिअर निवड | जय माता दी ज्योतिष", "शिक्षा ज्योतिष और करियर चयन | जय माता दी ज्योतिष", "Education Astrology | Jai Mata Di Astrology")}
        description={pick("विद्यार्थ्यांच्या शैक्षणिक यश, उच्च शिक्षण आणि योग्य विषय निवडीसाठी मार्गदर्शन।", "विद्यार्थियों की शैक्षणिक सफलता, उच्च शिक्षा और सही विषय चयन के लिए मार्गदर्शन।", "Guidance for students' academic success, higher education, and right subject selection.")}
      />

      <section className="service-hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">Academic Excellence</span>
            <h1>{pick("शिक्षण आणि करिअर निवड मार्गदर्शन", "शिक्षा और करियर चयन मार्गदर्शन", "Education & Career Choice Guidance")}</h1>
            <p className="subtitle">{pick("विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी ताऱ्यांची मदत।", "विद्यार्थियों के उज्ज्वल भविष्य के लिए ग्रहों का साथ।", "Using the stars for a bright future for students.")}</p>
          </div>
        </div>
      </section>

      <section className="service-info-section">
        <div className="container">
          <div className="info-main-grid">
            <div className="info-content-rich">
              <h2>{pick("शिक्षणात ग्रहांचे महत्व", "शिक्षा में ग्रहों का महत्व", "Significance of Planets in Education")}</h2>
              <p>
                {pick(
                  "कुंडलीतील पाचवे स्थान हे प्राथमिक शिक्षणाचे आणि नववे स्थान उच्च शिक्षणाचे प्रतिनिधित्व करते. गुरु (बृहस्पती) हा ज्ञानाचा कारक आहे, तर बुध बुद्धिमत्तेचा. जर विद्यार्थ्याचे लक्ष अभ्यासात लागत नसेल, तर त्यामागील ग्रहांचे दोष ओळखून योग्य उपाय करणे गरजेचे असते.",
                  "कुंडली का पांचवा भाव प्राथमिक शिक्षा और नौवां भाव उच्च शिक्षा का प्रतिनिधित्व करता है। गुरु (बृहस्पति) ज्ञान का कारक है और बुध बुद्धि का। यदि छात्र का मन पढ़ाई में नहीं लग रहा है, तो ग्रहों के दोषों को समझकर उपाय करना आवश्यक है।",
                  "The 5th house represents basic education and the 9th house represents higher education. Jupiter is the planet of wisdom, and Mercury represents intelligence. If a student is unable to focus, identifying and correcting planetary influences is key."
                )}
              </p>

              <div className="feature-list-modern">
                <div className="feature-box">
                  <GraduationCap className="icon" />
                  <h4>{pick("उच्च शिक्षण आणि शाखा निवड", "उच्च शिक्षा और शाखा चयन", "Higher Ed & Stream Selection")}</h4>
                  <p>{pick("विद्यार्थ्याने सायन्स, कॉमर्स की आर्ट्स निवडावे? सखोल कुंडली विश्लेषण।", "छात्र को विज्ञान, वाणिज्य या कला चुनना चाहिए? गहन कुंडली विश्लेषण।", "Should the student choose Science, Commerce, or Arts? In-depth birth chart analysis.")}</p>
                </div>
                <div className="feature-box">
                  <Lightbulb className="icon" />
                  <h4>{pick("एकाग्रता आणि स्मृती", "एकाग्रता और स्मृति", "Concentration & Memory")}</h4>
                  <p>{pick("अभ्यासात लक्ष लागण्यासाठी आणि स्मरणशक्ती वाढवण्यासाठी ज्योतिषीय उपाय।", "पढ़ाई में रुचि और याददाश्त बढ़ाने के लिए प्रभावी ज्योतिषीय उपाय।", "Astrological remedies to increase focus and memory in studies.")}</p>
                </div>
                <div className="feature-box">
                  <Award className="icon" />
                  <h4>{pick("स्पर्धा परीक्षा यश", "प्रतियोगी परीक्षा सफलता", "Competitive Exams")}</h4>
                  <p>{pick("सरकारी नोकरी किंवा मोठ्या पदाच्या स्पर्धा परीक्षांमध्ये यशाची शक्यता।", "सरकारी नौकरी या बड़े पदों की प्रतियोगी परीक्षाओं में सफलता की संभावना।", "Chances of success in government jobs or competitive exams.")}</p>
                </div>
                <div className="feature-box">
                  <PenTool className="icon" />
                  <h4>{pick("परदेशात शिक्षण", "विदेश में शिक्षा", "Study Abroad")}</h4>
                  <p>{pick("उच्च शिक्षणासाठी परदेश वारीचे योग तुमच्या कुंडलीत आहेत का?।", "क्या आपकी कुंडली में उच्च शिक्षा के लिए विदेश जाने के योग हैं?।", "Are there indications in your chart for studying abroad?")}</p>
                </div>
              </div>
              <div className="detailed-explanation">
                <h3>{pick("शैक्षणिक प्रगतीत येणारे अडथळे आणि उपाय", "शैक्षणिक प्रगति में आने वाली बाधाएं और उपाय", "Academic Obstacles & Remedies")}</h3>
                <p>
                  {pick(
                    "१. अभ्यासात मन न लागणे: यासाठी राहू आणि चंद्राची स्थिती तपासावी लागते. २. विस्मरण (Memory loss): बुध ग्रहावर केतूचा प्रभाव असल्यास हा त्रास होतो. ३. परीक्षा भीती: सूर्याची शक्ती कमी असल्यास आत्मविश्वासाची कमतरता भासते.",
                    "१. पढ़ाई में मन न लगना: इसके लिए राहु और चंद्रमा की स्थिति की जांच करनी होती है। २. विस्मरण (Memory loss): बुध ग्रह पर केतु का प्रभाव होने पर यह समस्या होती है। ३. परीक्षा का डर: सूर्य की शक्ति कम होने पर आत्मविश्वास की कमी महसूस होती है।",
                    "1. Lack of focus: Requires checking Rahu and Moon positions. 2. Memory loss: Often occurs when Mercury is influenced by Ketu. 3. Exam Fear: Lack of Sun's strength leads to low self-confidence."
                  )}
                </p>
                
                <h4>{pick("आम्ही विद्यार्थ्यांना कशी मदत करतो?", "हम विद्यार्थियों की मदद कैसे करते हैं?", "How do we help students?") || "Our Support"}</h4>
                <ul className="rich-bullet-list">
                  <li>{pick("कोणती शैक्षणिक शाखा (Stream) निवडणे फायदेशीर ठरेल?", "कौन सी शैक्षणिक शाखा (Stream) चुनना फायदेमंद होगा?", "Which academic stream will be most beneficial?")}</li>
                  <li>{pick("सरकारी नोकरीच्या परीक्षांमध्ये यश कधी मिळेल?", "सरकारी नौकरी की परीक्षाओं में सफलता कब मिलेगी?", "When will I succeed in government competitive exams?")}</li>
                  <li>{pick("उच्च शिक्षणासाठी परदेशात जाण्याचा योग आहे का?", "उच्च शिक्षा के लिए विदेश जाने का योग है क्या?", "Is there a chance for higher education abroad?")}</li>
                  <li>{pick("शाळेत किंवा कॉलेजमध्ये बदल करणे योग्य ठरेल का?", "स्कूल या कॉलेज बदलना सही रहेगा क्या?", "Is it right to change school or college?")}</li>
                </ul>

                <h4>{pick("अभ्यासात यशासाठी काही मार्गदर्शक टिप्स", "पढ़ाई में सफलता के लिए कुछ मार्गदर्शक टिप्स", "Tips for Academic Success")}</h4>
                <p>
                  {pick(
                    "अभ्यास करताना उत्तर किंवा ईशान्य दिशेकडे तोंड करून बसा. अभ्यासाच्या टेबलावर पिवळ्या रंगाचे फुलं किंवा कापड ठेवा, यामुळे गुरु ग्रहाची कृपा राहते. रोज सकाळी 'गायत्री मंत्राचा' जप केल्याने बुद्धी तीक्ष्ण होते.",
                    "पढ़ाई करते समय उत्तर या उत्तर-पूर्व दिशा की ओर मुख करके बैठें। अध्ययन मेज पर पीले रंग के फूल या कपड़ा रखें, इससे गुरु की कृपा बनी रहती है। रोज सुबह 'गायत्री मंत्र' का जाप करने से बुद्धि तेज होती है।",
                    "Sit facing North or North-East while studying. Keep yellow flowers or cloth on the study table to gain Jupiter's blessings. Chanting the 'Gayatri Mantra' every morning sharpens the intellect."
                  )}
                </p>
                <div className="quote-box">
                   {pick(
                    "''विद्या हेच खरे धन आहे, आणि ज्योतिष हा त्या धनाचा रक्षक आहे. योग्य वेळी योग्य निर्णय घेतल्यास यशाचे शिखर गाठणे सोपे होते.'' - आचार्य रतिश कुमार",
                    "''विद्या ही असली धन है, और ज्योतिष उस धन का रक्षक है। सही समय पर लिया गया सही निर्णय सफलता की ऊंचाई तक पहुँचा देता है।'' - आचार्य रतिश कुमार",
                    "''Education is the true wealth, and Astrology is its guardian. Taking the right decision at the right time makes reaching the peak of success easy.'' - Acharya Ratish Kumar"
                   )}
                </div>
              </div>
            </div>

            <div className="info-sidebar">
              <div className="sticky-cta-card">
                <BookOpen className="cta-icon" />
                <h4>{pick("विद्यार्थी सल्ला", "छात्र परामर्श", "Student Consult")}</h4>
                <p>{pick("तुमच्या पाल्याच्या उज्ज्वल भविष्यासाठी आजच संपर्क करा।", "अपने बच्चे के उज्ज्वल भविष्य के लिए आज ही संपर्क करें।", "Contact today for the bright future of your child.")}</p>
                <a href="https://wa.me/917030806080" className="btn-sidebar">WhatsApp Chat</a>
                <Link to="/contact" className="btn-sidebar ghost">Contact Page</Link>
                
                <div className="sidebar-tips">
                   <h5>{pick("अभ्यास मंत्र", "अध्ययन मंत्र", "Study Mantra")}</h5>
                   <p>{pick("बुधवारी गणपतीला २१ दुर्वा अर्पण करा, शिक्षणातील अडथळे दूर होतील।", "बुधवार को गणेशजी को २१ दुर्वा अर्पित करें, शिक्षा की बाधाएं दूर होंगी।", "Offer 21 Durvas to Lord Ganesha on Wednesday to remove academic hurdles.")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
