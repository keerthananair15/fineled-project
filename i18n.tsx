import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

const TRANSLATIONS: Record<string, string> = {
  // Nav
  "Home": "الرئيسية",
  "About": "من نحن",
  "Solutions": "الحلول",
  "Industries": "القطاعات",
  "Projects": "المشاريع",
  "Services": "الخدمات",
  "Resources": "المصادر",
  "Contact": "تواصل معنا",
  "Get Quote": "اطلب عرض سعر",
  "Menu": "القائمة",
  "Close": "إغلاق",

  // Hero
  "LED Display Solutions · GCC": "حلول شاشات LED · دول الخليج",
  "Brightness, shaped": "ضوء يتشكَّل",
  "with intention.": "بإتقان وعناية.",
  "FineLED designs, engineers and installs world-class LED displays for the region's most ambitious architecture, retail and infrastructure projects.":
    "تصمم فاين‌ليد وتُنفّذ شاشات LED بمعايير عالمية لأكثر المشاريع المعمارية والتجارية والبنية التحتية طموحاً في المنطقة.",
  "Start a Project": "ابدأ مشروعاً",
  "View Our Work": "استعرض أعمالنا",
  "Years Experience": "سنوات من الخبرة",
  "Projects Delivered": "مشروعاً منجزاً",
  "GCC Coverage": "تغطية إقليمية",
  "Engineering Support": "دعم هندسي",
  "Scroll": "مرّر",

  // Trusted by
  "Trusted By": "بثقة عملائنا",
  "Selected partners across the region.": "شركاء مختارون عبر المنطقة.",

  // Why
  "Why FineLED": "لماذا فاين‌ليد",
  "A standard of finish set by architecture, not electronics.":
    "معيار إنجاز يقوم على روح العمارة، لا على لغة الإلكترونيات.",
  "We work with architects, developers and brands who measure quality in millimetres and decades. Every FineLED installation is treated as a permanent piece of the building it lives in.":
    "نعمل مع المعماريين والمطوّرين والعلامات التجارية الذين يقيسون الجودة بالمليمترات وبعقود من الزمن. كل تركيب من فاين‌ليد يُعامَل باعتباره جزءاً دائماً من المبنى الذي يحتضنه.",
  "Two decades of craftsmanship": "عقدان من الإتقان",
  "25 years of craftsmanship": "خمسة وعشرون عاماً من الإتقان",
  "Over 20 years engineering large-format displays for landmark projects across the GCC.":
    "أكثر من 20 عاماً في هندسة الشاشات الكبيرة لأبرز مشاريع دول الخليج.",
  "Over 25 years engineering large-format displays for landmark projects across Oman, the UAE and the wider world.":
    "أكثر من 25 عاماً في هندسة الشاشات الكبيرة لأبرز المشاريع في عُمان والإمارات وحول العالم.",
  "Cinema-grade engineering": "هندسة بمستوى السينما",
  "Color-calibrated panels, redundant power, and seamless tiling, built for permanence.":
    "ألواح معايَرة لونياً، تغذية كهربائية احتياطية، وتركيب متجانس, مصممة لتبقى.",
  "Integrated audio-visual technology": "تقنية صوت وصورة متكاملة",
  "End-to-end AV systems, pixel-perfect LED paired with concert-grade audio, processing and control, tuned as one.":
    "أنظمة صوت وصورة متكاملة, شاشات LED بدقة فائقة مع صوت بمستوى الحفلات ومعالجة وتحكّم، مضبوطة كمنظومة واحدة.",
  "Guaranteed delivery": "تسليم مضمون",
  "Fixed timelines. Single point of accountability. No compromise on quality of finish.":
    "جدول زمني ثابت. جهة مسؤولة واحدة. لا تنازلات في جودة الإنجاز.",
  "Guaranteed delivery & 24/7 support": "تسليم مضمون ودعم على مدار الساعة",
  "Fixed timelines and a single point of accountability, backed by local engineers, regional spares and proactive monitoring so your display never goes dark.":
    "جدول زمني ثابت وجهة مسؤولة واحدة, مع مهندسين محليين وقطع غيار إقليمية ومراقبة استباقية، حتى لا تنطفئ شاشتك أبداً.",
  "24/7 lifecycle support": "دعم متواصل 24/7",
  "Local engineers, regional spares, proactive monitoring, your display never goes dark.":
    "مهندسون محليون، قطع غيار إقليمية، ومراقبة استباقية, شاشتك لا تنطفئ أبداً.",

  // About
  "About FineLED": "عن فاين‌ليد",
  "Engineering brightness": "نُهندس الضوء",
  "for the region's most": "لأكثر فضاءات المنطقة",
  "demanding spaces.": "تطلباً وإلحاحاً.",
  "FineLED has emerged as a leading LED screen manufacturer and display supplier under Fine Arts Advertising LLC, Dubai. Headquartered in the UAE with over 20 years of experience in signage, graphic design, digital printing and digital marketing, we constantly evolve our capabilities around the latest technology and our clients' needs.":
    "برزت فاين‌ليد كشركة رائدة في تصنيع وتوريد شاشات LED ضمن مجموعة فاين آرتس للإعلان ذ.م.م في دبي. ومقرّها الرئيسي في الإمارات، وبخبرة تتجاوز 20 عاماً في اللوحات الإعلانية والتصميم الجرافيكي والطباعة الرقمية والتسويق الرقمي، نطوّر قدراتنا باستمرار وفق أحدث التقنيات واحتياجات عملائنا.",
  "FineLED has emerged as a leading LED screen manufacturer and display supplier under Fine Arts Advertising LLC, Dubai. Headquartered in the UAE with over 25 years of experience in signage, graphic design, digital printing and digital marketing, we constantly evolve our capabilities around the latest technology and our clients' needs.":
    "برزت فاين‌ليد كشركة رائدة في تصنيع وتوريد شاشات LED ضمن مجموعة فاين آرتس للإعلان ذ.م.م في دبي. ومقرّها الرئيسي في الإمارات، وبخبرة تتجاوز 25 عاماً في اللوحات الإعلانية والتصميم الجرافيكي والطباعة الرقمية والتسويق الرقمي، نطوّر قدراتنا باستمرار وفق أحدث التقنيات واحتياجات عملائنا.",
  "In partnership with Al-Ajmi Partners Investments LLC in Oman, we supply LED display solutions that combine state-of-the-art technology, design and creative ideas, engineered to revitalise the imagination.":
    "بالشراكة مع شركة العجمي وشركاه للاستثمار ذ.م.م في سلطنة عُمان، نوفّر حلول شاشات LED تجمع بين أحدث التقنيات والتصميم والأفكار الإبداعية, هندسةٌ تُعيد إشعال الخيال.",
  "In partnership with Al-Ajmi Partners Investments LLC in Oman, we serve clients across Oman, the UAE and all over the world, an established and most trusted supplier of LED screen displays and AV solutions in Oman, the UAE and the wider GCC.":
    "بالشراكة مع شركة العجمي وشركاه للاستثمار ذ.م.م في سلطنة عُمان، نخدم عملاءنا في عُمان والإمارات وحول العالم, مورِّد راسخ وموثوق لشاشات LED وحلول الصوت والصورة في عُمان والإمارات وسائر دول الخليج.",
  "Talk to our team": "تحدّث مع فريقنا",
  "Featured Work": "أعمال مختارة",
  "Vision": "الرؤية",
  "To brighten the global market with high-quality advertisements powered by perfect LED displays, energy-efficient and eco-friendly by design.":
    "أن نُضيء السوق العالمي بإعلانات عالية الجودة عبر شاشات LED متقنة, موفّرة للطاقة وصديقة للبيئة بالتصميم.",
  "Mission": "الرسالة",
  "To provide superior-quality LED display solutions with ensured brightness and creativity that help our clients advertise their products and services, effectively.":
    "أن نقدّم حلول شاشات LED فائقة الجودة بسطوع وإبداع مضمونَين، تُمكّن عملاءنا من الترويج لمنتجاتهم وخدماتهم بفاعلية.",
  "Our Core Values": "قيمنا الجوهرية",

  // Values
  "Technological Innovation": "الابتكار التكنولوجي",
  "From fine-pitch indoor walls to weather-rated outdoor systems, we invest in R&D, calibration tooling and the latest driver IC generations so every install stays future-ready.":
    "من شاشات الداخل عالية الدقة إلى الأنظمة الخارجية المقاومة للعوامل الجوية، نستثمر في البحث والتطوير وأدوات المعايرة وأحدث أجيال شرائح التحكم لضمان جاهزية كل تركيب للمستقبل.",
  "Respect & Integrity": "الاحترام والنزاهة",
  "Clear scopes, honest timelines and transparent pricing. We say what we'll deliver, then deliver what we said, to clients, partners and our own team.":
    "نطاق عمل واضح، جداول زمنية صادقة، وأسعار شفافة. نقول ما سننجزه، ثم نُنجز ما قلنا, للعملاء والشركاء ولفريقنا.",
  "Sustainable Development": "التنمية المستدامة",
  "Low-power LED modules, intelligent brightness control and recyclable cabinets, engineered to lower running cost and footprint over the full lifecycle.":
    "وحدات LED منخفضة الاستهلاك، تحكّم ذكي بالسطوع، وخزائن قابلة لإعادة التدوير, مُصمَّمة لتقليل التكلفة التشغيلية والأثر البيئي طوال دورة الحياة.",
  "Quality & Creativity": "الجودة والإبداع",
  "Every brief is treated as a design problem first: curves, ceilings, transparencies and bespoke pixel pitches that turn a display into a brand moment.":
    "نتعامل مع كل بريف باعتباره مسألة تصميم أولاً: انحناءات، أسقف، شفافيات، ومسافات بكسل مخصصة تحوّل الشاشة إلى لحظة تجسّد العلامة.",
  "Teamwork with Passion": "العمل الجماعي بشغف",
  "Engineers, designers and project managers working side-by-side, one accountable team from first site survey through to commissioning and aftercare.":
    "مهندسون ومصممون ومديرو مشاريع جنباً إلى جنب, فريق واحد مسؤول من أول معاينة للموقع حتى التشغيل والمتابعة.",
  "Kaizen": "كايزن",
  "Post-project reviews, training cycles and field feedback loops keep our installation standards and service playbooks sharpening with every deployment.":
    "مراجعات ما بعد المشروع، ودورات تدريب، وحلقات تغذية راجعة ميدانية تُبقي معايير التركيب وأدلة الخدمة لدينا في تطوّر مستمر مع كل تنفيذ.",
  "Commitment to Excellence": "الالتزام بالتميّز",
  "Dedicated account leads, 24/7 regional support and SLA-backed response times, because a display is only as good as the team standing behind it.":
    "مدراء حسابات مخصّصون، ودعم إقليمي على مدار الساعة، وأوقات استجابة مدعومة باتفاقيات SLA, لأن جودة الشاشة من جودة الفريق خلفها.",

  // Solutions
  "Six disciplines. One standard of finish.": "ست تخصصات. ومعيار إنجاز واحد.",
  "Discuss your project": "ناقش مشروعك",
  "Indoor Fine-Pitch LED": "شاشات LED داخلية عالية الدقة",
  "Seamless, calibrated walls for lobbies, control rooms and command centres.":
    "جدران شاشات متجانسة ومُعايَرة للبهوات وغرف التحكم ومراكز القيادة.",
  "Outdoor Architectural": "شاشات معمارية خارجية",
  "Weather-rated, building-integrated displays designed to perform for years.":
    "شاشات مقاومة للعوامل الجوية ومُدمَجة بالمبنى، مصممة للأداء لسنوات.",
  "Creative & Curved": "تصاميم إبداعية ومنحنية",
  "Custom radii, ceilings, columns and sculptural forms engineered to brief.":
    "انحناءات مخصصة، أسقف، أعمدة وأشكال نحتية مهندَسة حسب الطلب.",
  "Transparent & Mesh": "شفافة وشبكية",
  "Glass-integrated visuals that preserve sightlines and daylight.":
    "شاشات مُدمَجة بالزجاج تحافظ على خطوط الرؤية وضوء النهار.",
  "Rental & Touring": "تأجير وفعاليات متنقلة",
  "Event-grade systems with rapid deployment and tour-ready logistics.":
    "أنظمة بمستوى الفعاليات مع نشر سريع ولوجستيات جاهزة للجولات.",
  "Control & Content": "تحكم ومحتوى",
  "Processors, scheduling, monitoring and creative content services.":
    "معالجات، جدولة، مراقبة وخدمات محتوى إبداعي.",

  // Industries
  "Trusted by the sectors that don't allow for compromise.":
    "موضع ثقة القطاعات التي لا تقبل المساومة.",
  "Architecture & Real Estate": "العمارة والعقارات",
  "Hospitality & Luxury": "الضيافة والفخامة",
  "Airports & Transport": "المطارات والنقل",
  "Retail & Malls": "التجزئة والمراكز التجارية",
  "Government & Defence": "الحكومة والدفاع",
  "Corporate & Control Rooms": "الشركات وغرف التحكم",

  // Projects
  "Featured Projects": "مشاريع مختارة",
  "Selected work, across the region.": "أعمال مختارة، عبر المنطقة.",
  "All case studies": "جميع دراسات الحالة",
  "Outdoor · Dubai": "خارجي · دبي",
  "Sheikh Zayed Tower Façade": "واجهة برج الشيخ زايد",
  "A 2,400 sqm building-integrated façade engineered to broadcast at boulevard scale.":
    "واجهة مدمجة بالمبنى بمساحة 2,400 م²، مهندَسة للبث على نطاق الجادة.",
  "Retail · Abu Dhabi": "تجزئة · أبوظبي",
  "Yas Atrium Centerpiece": "مركز ياس أتريوم",
  "A suspended centrepiece display that anchors the mall's flagship atrium.":
    "شاشة مركزية معلّقة تمنح بهو المركز التجاري الرئيسي لمسته المميزة.",
  "Transport · Muscat": "نقل · مسقط",
  "International Terminal FIDS": "شاشات معلومات الرحلات الدولية",
  "Calibrated information displays across departures, arrivals and lounges.":
    "شاشات معلومات معايَرة في صالات المغادرة والوصول والاستراحات.",
  "Hospitality · DIFC": "ضيافة · مركز دبي المالي",
  "The Lobby Art Wall": "جدار الفن في البهو",
  "A floor-to-ceiling kinetic art surface, curated to the property's aesthetic.":
    "سطح فني حركي من الأرض إلى السقف، مُختار بعناية ليوافق هوية المكان.",

  // Process
  "Delivery Process": "آلية التسليم",
  "Four stages. One accountable team.": "أربع مراحل. فريق واحد مسؤول.",
  "FineLED owns the entire chain, from the first site visit to the last firmware update. No hand-offs, no surprises, no untraceable issues.":
    "تتولى فاين‌ليد السلسلة بأكملها, من أول زيارة للموقع إلى آخر تحديث للبرنامج. لا تسليمات بينية، ولا مفاجآت، ولا مشكلات بلا متابعة.",
  "Consult": "الاستشارة",
  "We learn the building, brief and brand before specifying anything.":
    "ندرس المبنى والبريف والعلامة قبل تحديد أي مواصفة.",
  "Design": "التصميم",
  "Engineering drawings, mock-ups and content tests aligned to architecture.":
    "رسومات هندسية، نماذج أولية، واختبارات محتوى منسجمة مع العمارة.",
  "Build": "التنفيذ",
  "Calibrated panels, structural integration and clean cable architecture.":
    "ألواح مُعايَرة، تكامل إنشائي، وتمديدات نظيفة منظَّمة.",
  "Care": "الرعاية",
  "Monitoring, spares and 24/7 engineering for the life of the installation.":
    "مراقبة وقطع غيار ودعم هندسي 24/7 طوال عمر التركيب.",

  // Promise + Stats
  "The FineLED Promise": "وعد فاين‌ليد",
  "We deliver displays our clients never think about, only enjoy.":
    "نسلّم شاشات لا يفكر فيها عملاؤنا, بل يستمتعون بها فقط.",
  "A finished installation is the start of the relationship. We monitor, maintain and evolve your display so it stays as precise on year ten as on day one.":
    "إنجاز التركيب هو بداية العلاقة. نراقب، نصون ونطوّر شاشتك لتبقى بدقتها في السنة العاشرة كما في يومها الأول.",
  "Request Proposal": "اطلب عرضاً",
  "Installations delivered": "تركيبات منجزة",
  "Years of practice": "سنوات من الممارسة",
  "Uptime across active sites": "تشغيل دون انقطاع في المواقع الفعّالة",
  "Engineer response window": "نافذة استجابة المهندسين",

  // Testimonials
  "What clients say": "ماذا يقول عملاؤنا",
  "FineLED is the only LED partner we trust on flagship sites. The finish is architectural, not industrial.":
    "فاين‌ليد هي الشريك الوحيد الذي نأتمنه على مواقعنا الرئيسية. الإنجاز معماري لا صناعي.",
  "Principal Architect": "كبير المعماريين",
  "International Design Studio, Dubai": "استوديو تصميم دولي، دبي",
  "Three years on, the wall still calibrates to the day-one reference. That has never happened with any other vendor.":
    "بعد ثلاث سنوات، ما زال الجدار يُعايَر وفق مرجعية اليوم الأول. هذا لم يحدث مع أي مورّد آخر.",
  "Director of Operations": "مدير العمليات",
  "Hospitality Group, Muscat": "مجموعة ضيافة، مسقط",

  // Team
  "The People": "الفريق",
  "One team.": "فريق واحد.",
  "Every project, end to end.": "في كل مشروع، من البداية للنهاية.",
  "Our consultants, hardware engineers, software specialists and installation crews are fully responsible for your digital signage project, from first consultancy through hardware, software configuration and ongoing technical support.":
    "مستشارونا ومهندسو الأجهزة ومختصو البرمجيات وفِرَق التركيب مسؤولون بالكامل عن مشروع شاشاتك الرقمية, من أول استشارة وحتى الأجهزة وتكوين البرمجيات والدعم التقني المستمر.",
  "FineLED team on site, Ras Al Khaimah Police installation handover.":
    "فريق فاين‌ليد في الموقع, تسليم تركيب شرطة رأس الخيمة.",
  "UAE · 2025": "الإمارات · 2025",
  "Engineers, designers & operators": "مهندسون ومصممون ومشغّلون",
  "Regional offices, UAE & Oman": "مكاتب إقليمية, الإمارات وعُمان",
  "Installations delivered together": "تركيبات أنجزناها معاً",
  "Field & remote support coverage": "تغطية دعم ميداني وعن بُعد",
  "From the founder": "كلمة المؤسس",
  "FineLED Leadership": "قيادة فاين‌ليد",
  "Fine Arts Advertising LLC": "شركة فاين آرتس للإعلان ذ.م.م",
  "\"We started FineLED because the region deserved an LED partner that treated every installation like a permanent piece of the building. Twenty years on, that is still the only standard we measure ourselves against.\"":
    "«أطلقنا فاين‌ليد لأن المنطقة تستحق شريك LED يتعامل مع كل تركيب باعتباره جزءاً دائماً من المبنى. وبعد عشرين عاماً، لا يزال هذا هو المعيار الوحيد الذي نقيس به أنفسنا.»",

  // FAQ
  "Frequently asked": "الأسئلة الشائعة",
  "Answers, not specifications.": "إجابات، لا مواصفات.",
  "Which regions does FineLED operate in?": "في أي مناطق تعمل فاين‌ليد؟",
  "We deliver across the GCC with primary operations in the United Arab Emirates and the Sultanate of Oman, supported by a regional engineering and logistics network.":
    "نُسلّم في جميع دول الخليج، بعمليات رئيسية في الإمارات وسلطنة عُمان، مدعومين بشبكة هندسية ولوجستية إقليمية.",
  "Do you support both indoor and outdoor installations?": "هل تدعمون التركيبات الداخلية والخارجية معاً؟",
  "Yes. Our portfolio spans fine-pitch indoor walls, weather-rated outdoor façades, transparent glass-integrated systems, curved and creative geometries, and rental.":
    "نعم. تشمل أعمالنا الجدران الداخلية عالية الدقة، والواجهات الخارجية المقاومة للعوامل الجوية، والأنظمة الشفافة المدمجة بالزجاج، والأشكال المنحنية والإبداعية، إضافة إلى التأجير.",
  "How long does a typical project take?": "كم يستغرق المشروع عادةً؟",
  "From kickoff to handover, most projects complete in 8 to 16 weeks depending on scale, structural integration and content scope. We always commit to a fixed timeline.":
    "من انطلاق المشروع إلى تسليمه، يكتمل معظم المشاريع خلال 8 إلى 16 أسبوعاً حسب الحجم والتكامل الإنشائي ونطاق المحتوى. ونلتزم دائماً بجدول زمني ثابت.",
  "What support do you offer after handover?": "ما هو الدعم بعد التسليم؟",
  "Every installation includes 24/7 engineering response, proactive monitoring, regional spare parts and scheduled calibration to preserve day-one image quality.":
    "يشمل كل تركيب استجابة هندسية على مدار الساعة، ومراقبة استباقية، وقطع غيار إقليمية، ومعايرة مجدولة للحفاظ على جودة الصورة كما في اليوم الأول.",
  "Can you work with our architect and main contractor?": "هل يمكنكم العمل مع المعماري والمقاول الرئيسي لدينا؟",
  "Always. We integrate into existing design and delivery teams, providing shop drawings, MEP coordination, structural inputs and on-site supervision.":
    "بالتأكيد. نندمج مع فِرَق التصميم والتنفيذ القائمة، ونوفّر رسومات تنفيذية، وتنسيقاً للأنظمة الكهروميكانيكية، ومدخلات إنشائية، وإشرافاً ميدانياً.",

  // Final CTA
  "Begin a project": "ابدأ مشروعاً",
  "Tell us about the space. We'll tell you what's possible.":
    "أخبرنا عن المكان، ونحن نخبرك بما يمكن تحقيقه.",
  "A short conversation is the fastest way to understand whether FineLED is the right partner for your installation.":
    "محادثة قصيرة هي أسرع طريقة لمعرفة ما إذا كانت فاين‌ليد الشريك المناسب لتركيبك.",

  // Founder
  "Est.": "تأسست",
  "Founder & Chairman": "المؤسس ورئيس مجلس الإدارة",
  "The pillar of FineLED's two-decade legacy.": "ركيزة إرث فاين‌ليد على مدى عقدين.",
  "\"From a single signage workshop in Dubai to landmark installations across the GCC, FineLED was built on one belief: every display should outlast the building it lives in.\"":
    "\"من ورشة لافتات صغيرة في دبي إلى تركيبات بارزة في دول الخليج, بُنيت فاين‌ليد على قناعة واحدة: كل شاشة يجب أن تعمّر أطول من المبنى الذي تسكنه.\"",
  "Najam Karim": "نجم كريم",
  "Founder & Chairman · Fine Arts Advertising LLC": "المؤسس ورئيس مجلس الإدارة · فاين آرتس للإعلان ش.ذ.م.م",
  "FineLED Founder & Chairman": "مؤسس ورئيس مجلس فاين‌ليد",
  "20+ yrs": "+20 سنة",
  "25+ yrs": "+25 سنة",
  "pioneering led craft": "ريادة في حرفة الـ LED",
  "500+": "+500",
  "3000+": "+3000",
  "1000+": "+1000",
  "2000+": "+2000",
  "25+": "+25",
  "landmark installations": "تركيبات بارزة",
  "GCC": "دول الخليج",
  "GCC & beyond": "الخليج وما وراءه",
  "regional authority": "مرجعية إقليمية",
  "Years of Excellence": "سنوات من التميّز",
  "Years of excellence": "سنوات من التميّز",
  "Projects delivered": "مشاريع منجزة",
  "Events": "فعاليات",
  "Clients": "عملاء",

  // Footer
  "Premium LED display solutions, engineered and supported across the GCC for landmark architecture, retail, hospitality and infrastructure.":
    "حلول شاشات LED فاخرة، مهندَسة ومدعومة عبر دول الخليج لأبرز مشاريع العمارة والتجزئة والضيافة والبنية التحتية.",
  "Mini quote": "عرض سريع",
  "Your work email": "بريدك الإلكتروني المهني",
  "Send": "إرسال",
  "Indoor LED": "LED داخلي",
  "Outdoor LED": "LED خارجي",
  "Transparent": "شفاف",
  "Rental": "تأجير",
  "Control": "تحكم",
  "Architecture": "عمارة",
  "Hospitality": "ضيافة",
  "Retail": "تجزئة",
  "Transport": "نقل",
  "Government": "حكومة",
  "Corporate": "شركات",
  "Company": "الشركة",
  "Leadership": "القيادة",
  "Careers": "الوظائف",
  "Press": "الصحافة",
  "Sustainability": "الاستدامة",
  "Case Studies": "دراسات حالة",
  "Guides": "أدلة",
  "FAQ": "الأسئلة الشائعة",
  "Support": "الدعم",
  "Dubai · Abu Dhabi · Muscat": "دبي · أبوظبي · مسقط",
  "24/7 Engineering Support": "دعم هندسي 24/7",
  "All rights reserved.": "جميع الحقوق محفوظة.",
  "Privacy": "الخصوصية",
  "Terms": "الشروط",
  "ISO 9001 Certified": "حاصلة على شهادة ISO 9001",

  // Products / Solutions index
  "The complete FineLED": "كتالوج فاين‌ليد",
  "product catalogue.": "الكامل للمنتجات.",
  "Twelve engineered product families. One standard of finish. Explore the range and open any product for full specifications, applications and imagery.":
    "اثنتا عشرة عائلة منتجات مهندَسة. ومعيار إنجاز واحد. استعرض المجموعة وافتح أي منتج للاطلاع على المواصفات الكاملة والتطبيقات والصور.",
  "Fixed Installation": "تركيب ثابت",
  "Creative": "إبداعي",
  "Rental & Mobile": "تأجير ومتنقل",
  "Signage": "لوحات إعلانية",
  "Sports": "رياضة",
  "Interactive": "تفاعلي",
  "Indoor LED Display": "شاشة LED داخلية",
  "Seamless fine-pitch walls calibrated for interior environments.":
    "جدران عالية الدقة متجانسة ومُعايَرة للبيئات الداخلية.",
  "Outdoor LED Display": "شاشة LED خارجية",
  "Weather-rated, high-brightness displays engineered for open-air visibility.":
    "شاشات عالية السطوع مقاومة للعوامل الجوية، مهندَسة للرؤية في الهواء الطلق.",
  "Transparent LED Display": "شاشة LED شفافة",
  "Glass-integrated visuals that preserve daylight and sightlines.":
    "شاشات مدمجة بالزجاج تحافظ على ضوء النهار وخطوط الرؤية.",
  "Hologram Fan LED Display": "شاشة LED هولوجرام مروحية",
  "3D holographic visuals that hover mid-air.": "صور ثلاثية الأبعاد هولوجرامية تحلّق في الهواء.",
  "Portable LED Display": "شاشة LED متنقلة",
  "Mobile screens ready to deploy anywhere, in minutes.":
    "شاشات متنقلة جاهزة للنشر في أي مكان خلال دقائق.",
  "Floor / Dance-Floor LED Display": "شاشة LED أرضية / للرقص",
  "Walk-on interactive floor screens rated for live loads.":
    "شاشات أرضية تفاعلية قابلة للمشي عليها ومصنّفة للأحمال الحية.",
  "Flexible LED Screens": "شاشات LED مرنة",
  "Bend, curve and wrap around any architectural form.":
    "قابلة للانحناء والالتفاف حول أي شكل معماري.",
  "Scrolling Board LED Display": "لوحة LED متحرّكة النص",
  "Monochrome and RGB scrolling boards for signage and messaging.":
    "لوحات نصية متحرّكة أحادية وملوّنة للإعلانات والرسائل.",
  "Stadium LED Screen": "شاشة LED للملاعب",
  "Perimeter and centre-hung displays engineered for live sport.":
    "شاشات محيطية ومركزية مهندَسة للبث الرياضي المباشر.",
  "Indoor & Outdoor Rental LED Screen": "شاشة LED للتأجير داخلي وخارجي",
  "Tour-ready systems for events, concerts and exhibitions.":
    "أنظمة جاهزة للجولات في الفعاليات والحفلات والمعارض.",
  "Food Delivery LED Box": "صندوق توصيل طعام LED",
  "Programmable LED delivery boxes that turn couriers into moving media.":
    "صناديق توصيل LED قابلة للبرمجة تحوّل المندوبين إلى وسيلة إعلان متحركة.",
  "Interactive Screens & Digital Kiosk": "شاشات تفاعلية وأكشاك رقمية",
  "Self-service kiosks and interactive touchscreens for public environments.":
    "أكشاك خدمة ذاتية وشاشات لمس تفاعلية للأماكن العامة.",

  // About detail variant
  "Seven principles.": "سبعة مبادئ.",
  "One way of working.": "وطريقة عمل واحدة.",
  "The Promise": "الوعد",
  "Seven principles. One way of working.": "سبعة مبادئ. وطريقة عمل واحدة.",
  "Every project we deliver carries the same discipline: precision engineering, transparent process and a team that stays with you long after installation.":
    "كل مشروع نقدّمه يحمل الانضباط ذاته: هندسة دقيقة، وإجراءات شفافة، وفريق يبقى بجانبك بعد التركيب بوقت طويل.",
  "Start a project": "ابدأ مشروعاً",

  // Quote page
  "Get a Quote": "اطلب عرض سعر",
  "Tell us about the space.": "أخبرنا عن المكان.",
  "We'll tell you what's possible.": "وسنُخبرك بما يمكن تحقيقه.",
  "Share your brief and our engineers will size, spec and quote your LED installation, usually within 24 hours.":
    "شاركنا موجزك وسيقوم مهندسونا بتحديد المقاسات والمواصفات وتسعير تركيب شاشة LED الخاصة بك، عادةً خلال 24 ساعة.",
  "Full name": "الاسم الكامل",
  "Company name": "اسم الشركة",
  "Work email": "البريد الإلكتروني للعمل",
  "Phone": "الهاتف",
  "Project location": "موقع المشروع",
  "City, country": "المدينة، الدولة",
  "Product interest": "المنتج المطلوب",
  "Indicative budget": "الميزانية التقريبية",
  "Tell us about the project": "أخبرنا عن المشروع",
  "Space, timeline, references, any constraints...": "المساحة، الجدول الزمني، المراجع، أي قيود...",
  "Send Request": "إرسال الطلب",
  "Thank you.": "شكراً لك.",
  "Your brief has been received. A member of our team will reply within one business day.":
    "تم استلام موجزك. سيتواصل معك أحد أعضاء فريقنا خلال يوم عمل واحد.",
  "Back to home": "العودة إلى الرئيسية",
  "Every brief is priced by the engineer who will deliver it, not by a call centre.":
    "كل موجز يُسعّر من المهندس الذي سينفّذه، وليس من مركز اتصال.",
  "Years": "سنوات",
  "What happens next": "ما الذي يحدث بعد ذلك",
  "We review your brief within a business day.": "نراجع موجزك خلال يوم عمل واحد.",
  "A short discovery call to align on scope and timeline.":
    "مكالمة استكشافية قصيرة للاتفاق على النطاق والجدول الزمني.",
  "You receive a detailed proposal with budget and delivery plan.":
    "تستلم عرضاً تفصيلياً يشمل الميزانية وخطة التسليم.",
  "24-hour response": "استجابة خلال 24 ساعة",
  "Fixed timelines": "جداول زمنية ثابتة",
  "No obligation": "بلا التزام",
  "Reach us directly": "تواصل معنا مباشرة",
  "Dubai · Muscat": "دبي · مسقط",
  "Not sure yet": "غير محدد بعد",
  "Transparent LED": "شاشات LED شفافة",
  "Curved / Creative LED": "شاشات LED منحنية / إبداعية",
  "Rental LED": "شاشات LED للتأجير",
  "Stadium LED": "شاشات LED للملاعب",
  "Interactive Kiosk": "أكشاك تفاعلية",

  // Common CTAs & shared strings
  "Request a proposal": "اطلب عرضاً",
  "Explore the range": "استعرض المجموعة",
  "View all products": "عرض كل المنتجات",
  "What we do": "ما نقدّمه",
  "Industries served": "القطاعات التي نخدمها",
  "Six disciplines, delivered under one roof.": "ست تخصصات، تحت سقف واحد.",
  "Sectors that don't allow for compromise.": "قطاعات لا تحتمل التنازل.",
  "Our services flex to the sectors where downtime and drift are not options — from five-star hospitality to government command centres.":
    "تتكيّف خدماتنا مع القطاعات التي لا يُسمح فيها بالتوقف أو الانحراف, من الضيافة الفاخرة إلى مراكز القيادة الحكومية.",
  "One partner. Six markets. Zero hand-offs.": "شريك واحد. ستة أسواق. بلا وسطاء.",
  "From flagship malls in Dubai and airports in Muscat to civic installations in Riyadh, our engineers, spares and support run on the same clock across the region.":
    "من أرقى المولات في دبي ومطارات مسقط إلى المنشآت الحكومية في الرياض، يعمل مهندسونا وقطع غيارنا ودعمنا بالوتيرة ذاتها في كل أنحاء المنطقة.",
  "The FineLED Standard": "معيار فاين‌ليد",
  "One accountable team.": "فريق واحد مسؤول.",
  "Bring us the site. We'll bring the standard.": "أحضر لنا الموقع. ونحن نأتي بالمعيار.",
  "We own every stage of the project so accountability never slips between vendors. The result: displays that look architectural on day one and still calibrate to reference on year ten.":
    "نتولى كل مرحلة من المشروع لتبقى المسؤولية واضحة بلا تشتّت. والنتيجة: شاشات معمارية المظهر من اليوم الأول, ومعايَرة بدقة مرجعية بعد عشر سنوات.",
  "Trusted on the region's most demanding installations.":
    "موضع ثقة في أكثر التركيبات تطلّباً في المنطقة.",
  "Two regional hubs.": "مركزان إقليميان.",
  "Our Offices": "مكاتبنا",
  "Address": "العنوان",
  "Email": "البريد الإلكتروني",
  "Reach us": "تواصل معنا",
  "Est. 2004 · Dubai": "تأسست 2004 · دبي",
  "A single image, held still.": "صورة واحدة, ثابتة بلا حركة.",
  "Three chapters of craft, scrolling by.": "ثلاثة فصول من الإتقان, تمرّ أمامك.",
  "Engineering, project management and 24/7 lifecycle support, anchored in Dubai and Muscat, serving clients across the GCC and beyond.":
    "هندسة وإدارة مشاريع ودعم دورة حياة على مدار الساعة, بمقرّين في دبي ومسقط, لخدمة العملاء في دول الخليج وخارجها.",
  "From indoor video walls and outdoor billboards to transparent displays, stadium screens and immersive digital experiences, FineLED delivers complete end-to-end LED and AV solutions across Oman, the UAE and the wider GCC.":
    "من الجدران المرئية الداخلية واللوحات الخارجية إلى الشاشات الشفافة وشاشات الملاعب والتجارب الرقمية الغامرة, تقدّم فاين‌ليد حلول LED وصوت وصورة متكاملة عبر عُمان والإمارات ودول الخليج.",
};


type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string) => string };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {}
  }, []);

  const t = useCallback(
    (en: string) => (lang === "ar" ? TRANSLATIONS[en] ?? en : en),
    [lang],
  );

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) return { lang: "en", setLang: () => {}, t: (s) => s };
  return ctx;
}
