// Simple Translation Mechanism
const translations = {
    en: {
        "language": "English",
        "nav": {
            "home": "Home",
            "about": "About Us",
            "services": "Services",
            "team": "Our Team",
            "contact": "Contact"
        },
        "portfolio": {
            "title": "Portfolio",
            "subtitle": "CHECK OUR PORTFOLIO"
        },
        "hero": {
            "title": "Welcome to Mubfilters",
            "subtitle": "Quality Filters For a Better Cigarette"
        },
        "3dmodel": {
            "title": "Explore Our Filters in 3D",
            "subtitle": "Interact with our high-quality cigarette filters in 3D",
            "description": "Experience our premium filter quality through this interactive 3D model. You can rotate, zoom, and examine every detail of our cigarette filters.",
            "instructions": "Use your mouse to rotate, scroll to zoom, and right-click to pan",
            "regular": "Regular",
            "capsule": "Capsule",
            "menthol": "Menthol",
            "features": {
                "visualization": "3D Visualization",
                "visualization.desc": "Examine every detail of our filters",
                "interaction": "Interactive",
                "interaction.desc": "Rotate, zoom, and explore freely",
                "mobile": "Mobile Ready",
                "mobile.desc": "Works perfectly on all devices"
            }
        },
        "about": {
            "title": "About PT Mulia Usaha Bersama",
            "description": "Founded in 2013 and based in Malang, East Java, PT Mulia Usaha Bersama (MUB) is a leading manufacturer of high-quality cigarette filters, serving both domestic and international tobacco producers with precision-engineered, customizable solutions. Located in a city renowned for its cool climate, calm atmosphere, and fertile landscape—famous for apple orchards and a rich cultural heritage—Malang has long been a center for Indonesia’s tobacco industry. This strategic location not only connects MUB to a deep-rooted industrial tradition but also provides a stable and inspiring environment for innovation, allowing the company to consistently deliver reliable, consistent, and forward-thinking filter technologies.",
            "italic": "We produce high-quality filters using the best raw materials available.",
            "features": [
                "Monthly production capacity of over 100,000,000 filter rods",
                "Stringent quality control systems",
                "Continuous research and development to improve product quality"
            ],
            "commitment": "Our dedicated team is committed to producing filters that add value to your cigarettes, ensuring customer satisfaction and enjoyment."
        },
        "machines": {
            "title": '5 Machines'
        },
        "services": {
            "title": "Our Services",
            "subtitle": "We specialize in the design, manufacturing, and supply of premium-quality filter rods for the cigarette industry in Indonesia and across Southeast Asia.",
            "regular": {
                "title": "Regular Filter",
                "description": "Specifications:\n• Diameter: 7.7mm / 7.8mm\n• Length: 100mm / 108mm / 120mm / 132mm\n• Pressure drop (PD) and hardness can be customized to meet specific brand requirements."
            },
            "mild": {
                "title": "Mild Filter",
                "description": "Specifications:\n• Diameter: 6.9mm\n• Length: 92mm / 100mm / 108mm / 120mm / 132mm\n• PD and hardness levels can be adjusted according to client needs for enhanced performance and consumer experience."
            },
            "bold": {
                "title": "Bold Filter",
                "description": "Specifications:\n• Diameter: 7.4mm\n• Length: 92mm / 100mm / 108mm / 120mm / 132mm\n• Fully customizable PD and hardness options available to suit bold-style cigarette brands."
            },
            "mono": {
                "title": "Mono acetate filter",
                "description": "High-quality mono acetate filters for premium cigarettes with excellent filtration performance."
            },
            "menthol": {
                "title": "Menthol",
                "description": "Refreshing menthol filters providing a cool and smooth smoking experience."
            },
            "capsule": {
                "title": "Capsule",
                "description": "Advanced capsule filters with flavor release technology for enhanced smoking pleasure."
            },
            "superslim": {
                "title": "Super Slim",
                "description": "Ultra-thin filters designed for modern slim cigarette formats with optimal performance."
            }
        },
        "team": {
            "title": "Meet Our Team",
            "subtitle": "Our experienced and dedicated team is here to provide exceptional service, technical support, and partnership at every step of your journey.",
            "members": {
                "kastin": {
                    "name": "Kastin",
                    "role": "Marketing Director"
                },
                "uswah": {
                    "name": "Uswah",
                    "role": "Head of Logistics, General Affairs, and Sales"
                },
                "vaughan": {
                    "name": "Vaughan",
                    "role": "Managing Director"
                },
                "kiki": {
                    "name": "Kiki",
                    "role": "Managing Director"
                },
                "iwan": {
                    "name": "Iwan",
                    "role": "Managing Director"
                }
            }
        },
        "contact": {
            "title": "Contact Us",
            "subtitle": "Welcome to drop by at our factory or call us at anytime",
            "address": "Jl. Raya Karangpandan No.13, Karangpandan, Kec. Pakisaji, Kabupaten Malang, Jawa Timur 65162",
            "phone": "+62341-3906005",
            "email": "info@mubfilters.com",
            "form": {
                "name": "Your Name",
                "email": "Your Email",
                "subject": "Subject",
                "message": "Message",
                "submit": "Send Message"
            }
        },
        "faq": {
            "title": "Frequently Asked Questions"
        },
        "features": {
            "tab1": "Premium Filter Manufacturing",
            "tab2": "Advanced Production Technology",
            "tab3": "High Standard Quality Assurance",
            "tab4": "Road To ISO 9001 Certified",
            "content": {
                "tab1": {
                    "title": "Premium Quality Filter Manufacturing Excellence",
                    "subtitle": "We specialize in producing high-quality cigarette filters using the finest materials and advanced manufacturing processes.",
                    "points": [
                        "State-of-the-art filter production technology",
                        "Premium acetate tow and paper materials",
                        "Customizable filter specifications for different cigarette brands"
                    ],
                    "description": "Our manufacturing facility is equipped with cutting-edge machinery and operated by skilled technicians to ensure consistent quality and performance of every filter we produce."
                },
                "tab2": {
                    "title": "Advanced Production Technology & Equipment",
                    "subtitle": "Our facility features international standard production equipment designed specifically for cigarette filter manufacturing.",
                    "points": [
                        "Automated filter rod production lines",
                        "Precision cutting and finishing equipment",
                        "Advanced quality monitoring systems"
                    ],
                    "description": "We invest in the latest technology to maintain high production efficiency while ensuring superior filter quality that meets international standards."
                },
                "tab3": {
                    "title": "Rigorous Quality Control & Testing",
                    "subtitle": "Every batch undergoes comprehensive quality testing to ensure our filters meet the highest industry standards.",
                    "points": [
                        "Multi-stage quality inspection process",
                        "Pressure drop and hardness testing",
                        "Consistency and uniformity verification"
                    ],
                    "description": "Our quality control team uses advanced testing equipment to verify that each filter meets precise specifications before shipment."
                },
                "tab4": {
                    "title": "ISO 9001 Quality Management System",
                    "subtitle": "We are committed to achieving ISO 9001 certification to demonstrate our commitment to quality excellence.",
                    "points": [
                        "Documented quality management procedures",
                        "Continuous improvement processes",
                        "Customer satisfaction focus"
                    ],
                    "description": "Our quality management system ensures consistent delivery of premium filter products while continuously improving our processes and customer satisfaction."
                }
            }
        },
        "wt-asia": {
            "title": "World Tobacco Asia",
            "subtitle": "Documentation of World Tobacco Asia 2025",
            "description1": "World Tobacco Asia recently set a new record—bringing together more exhibitors, visitors, and speakers than ever before. Thank you to all parties who participated and made this event a success as a platform for networking, education, and business. Next event: World Tobacco Middle East, Dubai – November 25.",
            "description2": "To remain competitive in the ever-evolving global market, participation in various international conferences and exhibitions is highly recommended. Such events provide extraordinary opportunities to build networks, gain industry insights, and follow the latest trends.",
            "description3": "One of the leading organizers in this field is WT Process and Machinery, with more than 35 years of experience in organizing exhibitions in various major cities around the world—including Munich, Jakarta, Dubai, and Prague. Their global reach includes Europe, Asia, the Middle East, and Latin America.",
            "description4": "Partnering with TJI, they create collaborative platforms that connect various sectors and markets, driving growth and innovation. Whether you are an experienced industry player or a newcomer, involvement in this ecosystem can broaden your insights and strengthen your professional network.",
            "button": "Get Started",
            "readmore": "Read More"
        },
        "faq": {
            "title": "Frequently Asked Questions",
            "q1": "Do you have ready stock?",
            "a1": "Yes, we maintain ready stock for our most popular filter specifications. However, stock levels vary depending on demand and production schedules. We recommend contacting us directly to check current availability for your specific requirements.",
            "q2": "Can you custom make to our specifications?",
            "a2": "Absolutely! We specialize in custom filter manufacturing to meet your exact specifications. We can adjust diameter, length, pressure drop (PD), hardness, and other parameters according to your brand requirements. Our technical team will work closely with you to ensure the filters meet your quality standards and performance expectations.",
            "q3": "Can you deliver all over Indonesia?",
            "a3": "Yes, we provide delivery services throughout Indonesia. We work with reliable logistics partners to ensure safe and timely delivery to all major cities and regions across the archipelago. Delivery times and costs may vary depending on the destination and order quantity.",
            "q4": "Can I visit your factory?",
            "a4": "Yes, we welcome factory visits from potential clients and business partners. Please contact us in advance to schedule your visit so we can arrange a proper tour and ensure our team is available to answer your questions. Our factory is located in Malang, East Java.",
            "q5": "Do the prices include delivery?",
            "a5": "Delivery costs are typically quoted separately from our filter prices. The final cost depends on your location, order quantity, and shipping method. We can provide both FOB (Free on Board) pricing and delivered pricing options. Please contact us for a complete quote including delivery to your specific location.",
            "q6": "Can you export to other countries?",
            "a6": "Yes, we have export capabilities and experience in international markets. We can handle all necessary export documentation and work with international shipping partners. We serve customers across Southeast Asia and are expanding our reach to other regions. Please contact us to discuss your specific export requirements and destination.",
            "q7": "What QC machines are you using?",
            "a7": {
                "intro": "We use advanced quality control equipment to ensure consistent filter quality. Our main QC machine is shown below:",
                "caption": "Our precision quality control testing equipment",
                "description": "This equipment allows us to measure pressure drop, hardness, and other critical parameters to ensure each batch meets our stringent quality standards."
            }
        },
        "footer": {
            "quickLinks": "Quick Links",
            "services": {
                "title": "Our Services",
                "mono": "Mono Acetate Filter",
                "menthol": "Menthol",
                "capsule": "Capsule",
                "superslim": "Super Slim"
            },
            "newsletter": {
                "title": "Contact Our Team",
                "description": "Interested in our filters? Reach out to our team for more information!",
                "button": "Get in Touch"
            },
            "copyright": "© Copyright Mubfilters All Rights Reserved"
        }
    },
    id: {
        "language": "Bahasa",
        "nav": {
            "home": "Beranda",
            "about": "Tentang Kami",
            "services": "Layanan",
            "team": "Tim Kami",
            "contact": "Kontak"
        },
        "portfolio": {
            "title": "Portofolio",
            "subtitle": "LIHAT PORTOFOLIO KAMI"
        },
        "hero": {
            "title": "Selamat Datang di Mubfilters",
            "subtitle": "Quality Filters For a Better Cigarette"
        },
        "3dmodel": {
            "title": "Jelajahi Filter Kami dalam 3D",
            "subtitle": "Berinteraksi dengan filter rokok berkualitas tinggi kami dalam 3D",
            "description": "Rasakan kualitas filter premium kami melalui model 3D interaktif ini. Anda dapat memutar, memperbesar, dan memeriksa setiap detail filter rokok kami.",
            "instructions": "Gunakan mouse untuk memutar, scroll untuk zoom, dan klik kanan untuk menggeser",
            "regular": "Reguler",
            "capsule": "Kapsul",
            "menthol": "Menthol",
            "features": {
                "visualization": "Visualisasi 3D",
                "visualization.desc": "Periksa setiap detail filter kami",
                "interaction": "Interaktif",
                "interaction.desc": "Putar, zoom, dan jelajahi dengan bebas",
                "mobile": "Siap Mobile",
                "mobile.desc": "Bekerja sempurna di semua perangkat"
            }
        },
        "about": {
            "title": "Tentang PT Mulia Usaha Bersama",
            "description": "Didirikan pada tahun 2013 dan berbasis di Malang, Jawa Timur, PT Mulia Usaha Bersama (MUB) adalah produsen filter rokok berkualitas tinggi yang melayani kebutuhan produsen rokok domestik maupun internasional melalui solusi filter yang presisi dan dapat disesuaikan. Berlokasi di kota yang mendukung perkembangan industri tembakau, MUB memanfaatkan posisi strategis ini untuk menghadirkan teknologi filter yang andal, konsisten, dan inovatif. Dengan komitmen terhadap kualitas dan kepuasan pelanggan, MUB terus berkembang sebagai mitra terpercaya dalam industri manufaktur filter rokok.",
            "italic": "Kami memproduksi filter berkualitas tinggi menggunakan bahan baku terbaik yang tersedia.",
            "features": [
                "Kapasitas produksi bulanan lebih dari 100.000.000 batang filter",
                "Sistem kontrol kualitas yang ketat",
                "Penelitian dan pengembangan berkelanjutan untuk meningkatkan kualitas produk"
            ],
            "commitment": "Tim kami yang berdedikasi berkomitmen untuk memproduksi filter yang menambah nilai pada rokok Anda, memastikan kepuasan dan kenikmatan pelanggan."
        },
        "machines": {
            "title": '5 Mesin'
        },
        "services": {
            "title": "Layanan Kami",
            "subtitle": "Kami ahli dalam memproduksi dan menyuplai filter rokok premium yang dirancang sesuai kebutuhan industri tembakau di Indonesia dan Asia Tenggara.",
            "regular": {
                "title": "Filter Reguler",
                "description": "Spesifikasi:\n• Diameter: 7,7mm / 7,8mm\n• Panjang: 100mm / 108mm / 120mm / 132mm\n• Pressure Drop (PD) dan tingkat kekerasan dapat disesuaikan untuk memenuhi kebutuhan merek Anda."
            },
            "mild": {
                "title": "Filter Mild",
                "description": "Spesifikasi:\n• Diameter: 6,9mm\n• Panjang: 92mm / 100mm / 108mm / 120mm / 132mm\n• PD dan kekerasan dapat diatur sesuai preferensi pelanggan dan efisiensi produksi."
            },
            "bold": {
                "title": "Filter Bold",
                "description": "Spesifikasi:\n• Diameter: 7,4mm\n• Panjang: 92mm / 100mm / 108mm / 120mm / 132mm\n• PD dan tingkat kekerasan dapat dikustomisasi untuk memenuhi karakteristik produk Bold."
            },
            "mono": {
                "title": "Mono acetate filter",
                "description": "Filter mono acetate berkualitas tinggi untuk rokok premium dengan performa filtrasi yang luar biasa."
            },
            "menthol": {
                "title": "Menthol",
                "description": "Filter menthol yang menyegarkan memberikan pengalaman merokok yang dingin dan halus."
            },
            "capsule": {
                "title": "Capsule",
                "description": "Filter kapsul yang canggih dengan teknologi pelepasan rasa untuk kesenangan merokok yang lebih baik."
            },
            "superslim": {
                "title": "Super Slim",
                "description": "Filter yang sangat tipis yang dirancang untuk format rokok slim modern dengan performa optimal."
            }
        },
        "team": {
            "title": "Tim Kami",
            "subtitle": "Tim kami yang berpengalaman dan berdedikasi siap memberikan pelayanan terbaik, dukungan teknis, serta kemitraan yang berkelanjutan.",
            "members": {
                "kastin": {
                    "name": "Kastin",
                    "role": "Direktur Pemasaran"
                },
                "uswah": {
                    "name": "Uswah",
                    "role": "Kepala Divisi Logistik, Urusan Umum, dan Penjualan"
                },
                "vaughan": {
                    "name": "Vaughan",
                    "role": "Direktur Utama"
                },
                "kiki": {
                    "name": "Kiki",
                    "role": "Managing Director"
                },
                "iwan": {
                    "name": "Iwan",
                    "role": "Managing Director"
                }
            }
        },
        "contact": {
            "title": "Hubungi Kami",
            "subtitle": "Selamat datang untuk berkunjung ke pabrik kami atau hubungi kami kapan saja",
            "address": "Jl. Raya Karangpandan No.13, Karangpandan, Kec. Pakisaji, Kabupaten Malang, Jawa Timur 65162",
            "phone": "+62341-3906005",
            "email": "info@mubfilters.com",
            "form": {
                "name": "Nama Anda",
                "email": "Email Anda",
                "subject": "Subjek",
                "message": "Pesan",
                "submit": "Kirim Pesan"
            }
        },
        "faq": {
            "title": "Pertanyaan yang Sering Diajukan"
        },
        "features": {
            "tab1": "Manufaktur Filter Premium",
            "tab2": "Teknologi Produksi Canggih",
            "tab3": "Jaminan Kualitas Ketat",
            "tab4": "Menuju Sertifikasi ISO 9001",
            "content": {
                "tab1": {
                    "title": "Keunggulan Manufaktur Filter Berkualitas Premium",
                    "subtitle": "Kami mengkhususkan diri dalam memproduksi filter rokok berkualitas tinggi menggunakan bahan terbaik dan proses manufaktur canggih.",
                    "points": [
                        "Teknologi produksi filter tercanggih",
                        "Bahan acetate tow dan kertas premium",
                        "Spesifikasi filter yang dapat disesuaikan untuk berbagai merek rokok"
                    ],
                    "description": "Fasilitas manufaktur kami dilengkapi dengan mesin-mesin canggih dan dioperasikan oleh teknisi terampil untuk memastikan kualitas dan kinerja yang konsisten dari setiap filter yang kami produksi."
                },
                "tab2": {
                    "title": "Teknologi & Peralatan Produksi Canggih",
                    "subtitle": "Fasilitas kami menampilkan peralatan produksi standar internasional yang dirancang khusus untuk manufaktur filter rokok.",
                    "points": [
                        "Lini produksi filter rod otomatis",
                        "Peralatan pemotongan dan finishing presisi",
                        "Sistem pemantauan kualitas canggih"
                    ],
                    "description": "Kami berinvestasi dalam teknologi terbaru untuk mempertahankan efisiensi produksi tinggi sambil memastikan kualitas filter superior yang memenuhi standar internasional."
                },
                "tab3": {
                    "title": "Kontrol & Pengujian Kualitas Ketat",
                    "subtitle": "Setiap batch menjalani pengujian kualitas komprehensif untuk memastikan filter kami memenuhi standar industri tertinggi.",
                    "points": [
                        "Proses inspeksi kualitas multi-tahap",
                        "Pengujian pressure drop dan kekerasan",
                        "Verifikasi konsistensi dan keseragaman"
                    ],
                    "description": "Tim kontrol kualitas kami menggunakan peralatan pengujian canggih untuk memverifikasi bahwa setiap filter memenuhi spesifikasi yang tepat sebelum pengiriman."
                },
                "tab4": {
                    "title": "Sistem Manajemen Kualitas ISO 9001",
                    "subtitle": "Kami berkomitmen untuk mencapai sertifikasi ISO 9001 untuk menunjukkan komitmen kami terhadap keunggulan kualitas.",
                    "points": [
                        "Prosedur manajemen kualitas yang terdokumentasi",
                        "Proses peningkatan berkelanjutan",
                        "Fokus pada kepuasan pelanggan"
                    ],
                    "description": "Sistem manajemen kualitas kami memastikan pengiriman produk filter premium yang konsisten sambil terus meningkatkan proses dan kepuasan pelanggan."
                }
            }
        },
        "wt-asia": {
            "title": "World Tobacco Asia",
            "subtitle": "Dokumentasi World Tobacco Asia 2025",
            "description1": "World Tobacco Asia baru-baru ini mencetak rekor baru—menghadirkan lebih banyak peserta pameran, pengunjung, dan pembicara dibandingkan sebelumnya. Terima kasih kepada semua pihak yang telah berpartisipasi dan menjadikan acara ini sukses sebagai ajang jejaring, edukasi, dan bisnis. Acara berikutnya: World Tobacco Middle East, Dubai – 25 November.",
            "description2": "Untuk tetap kompetitif di pasar global yang terus berkembang, partisipasi dalam berbagai konferensi dan pameran internasional sangat disarankan. Acara semacam ini memberikan peluang luar biasa untuk membangun jaringan, memperoleh wawasan industri, dan mengikuti tren terkini.",
            "description3": "Salah satu penyelenggara terkemuka di bidang ini adalah WT Process and Machinery, dengan pengalaman lebih dari 35 tahun dalam menyelenggarakan pameran di berbagai kota besar dunia—termasuk Munich, Jakarta, Dubai, dan Praha. Jangkauan global mereka meliputi Eropa, Asia, Timur Tengah, hingga Amerika Latin.",
            "description4": "Bermitra dengan TJI, mereka menciptakan platform kolaboratif yang menghubungkan berbagai sektor dan pasar, mendorong pertumbuhan dan inovasi. Baik Anda pelaku industri berpengalaman maupun pendatang baru, keterlibatan dalam ekosistem ini dapat memperluas wawasan dan memperkuat jaringan profesional Anda.",
            "button": "Mulai",
            "readmore": "Baca Selengkapnya"
        },
        "faq": {
            "title": "Pertanyaan yang Sering Ditanyakan",
            "q1": "Apakah Anda memiliki stok siap?",
            "a1": "Ya, kami mempertahankan stok siap untuk spesifikasi filter paling populer kami. Namun, tingkat stok bervariasi tergantung pada permintaan dan jadwal produksi. Kami merekomendasikan untuk menghubungi kami langsung untuk memeriksa ketersediaan saat ini untuk kebutuhan spesifik Anda.",
            "q2": "Bisakah Anda membuat kustom sesuai spesifikasi kami?",
            "a2": "Tentu saja! Kami berspesialisasi dalam manufaktur filter kustom untuk memenuhi spesifikasi yang tepat. Kami dapat menyesuaikan diameter, panjang, pressure drop (PD), kekerasan, dan parameter lainnya sesuai dengan persyaratan merek Anda. Tim teknis kami akan bekerja sama dengan Anda untuk memastikan filter memenuhi standar kualitas dan ekspektasi kinerja Anda.",
            "q3": "Bisakah Anda mengirim ke seluruh Indonesia?",
            "a3": "Ya, kami menyediakan layanan pengiriman ke seluruh Indonesia. Kami bekerja dengan mitra logistik yang dapat diandalkan untuk memastikan pengiriman yang aman dan tepat waktu ke semua kota besar dan wilayah di seluruh nusantara. Waktu pengiriman dan biaya dapat bervariasi tergantung pada tujuan dan jumlah pesanan.",
            "q4": "Bisakah saya mengunjungi pabrik Anda?",
            "a4": "Ya, kami menyambut kunjungan pabrik dari klien potensial dan mitra bisnis. Harap hubungi kami terlebih dahulu untuk menjadwalkan kunjungan Anda sehingga kami dapat mengatur tur yang tepat dan memastikan tim kami tersedia untuk menjawab pertanyaan Anda. Pabrik kami berlokasi di Malang, Jawa Timur.",
            "q5": "Apakah harga termasuk pengiriman?",
            "a5": "Biaya pengiriman biasanya dikutip secara terpisah dari harga filter kami. Biaya akhir tergantung pada lokasi Anda, jumlah pesanan, dan metode pengiriman. Kami dapat memberikan pilihan harga FOB (Free on Board) dan harga pengiriman. Silakan hubungi kami untuk penawaran lengkap termasuk pengiriman ke lokasi spesifik Anda.",
            "q6": "Bisakah Anda mengekspor ke negara lain?",
            "a6": "Ya, kami memiliki kemampuan ekspor dan pengalaman di pasar internasional. Kami dapat menangani semua dokumentasi ekspor yang diperlukan dan bekerja dengan mitra pengiriman internasional. Kami melayani pelanggan di seluruh Asia Tenggara dan sedang memperluas jangkauan kami ke wilayah lain. Silakan hubungi kami untuk membahas persyaratan ekspor dan tujuan spesifik Anda.",
            "q7": "Mesin QC apa yang Anda gunakan?",
            "a7": {
                "intro": "Kami menggunakan peralatan kontrol kualitas canggih untuk memastikan kualitas filter yang konsisten. Mesin QC utama kami ditunjukkan di bawah ini:",
                "caption": "Peralatan pengujian kontrol kualitas presisi kami",
                "description": "Peralatan ini memungkinkan kami untuk mengukur pressure drop, kekerasan, dan parameter kritis lainnya untuk memastikan setiap batch memenuhi standar kualitas ketat kami."
            }
        },
        "footer": {
            "quickLinks": "Tautan Cepat",
            "services": {
                "title": "Layanan Kami",
                "mono": "Filter Mono Asetat",
                "menthol": "Menthol",
                "capsule": "Kapsul",
                "superslim": "Super Slim"
            },
            "newsletter": {
                "title": "Hubungi Tim Kami",
                "description": "Tertarik dengan filter kami? Hubungi tim kami untuk informasi lebih lanjut!",
                "button": "Hubungi Kami"
            },
            "copyright": "© Hak Cipta Mubfilters Seluruh Hak Dilindungi"
        }
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        const translation = translations[lang];

        if (translation) {
            const keys = key.split('.');
            let translatedText = translation;
            for (let k of keys) {
                translatedText = translatedText[k];
            }

            // Check if the element is an input or textarea
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute('placeholder', translatedText);
            } else {
                el.textContent = translatedText;
            }
        }
    });

    // Update language selector
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-id').classList.toggle('active', lang === 'id');

    // Update language dropdown text and flag
    const languageText = document.getElementById('current-language-text');
    const currentFlag = document.getElementById('current-flag');
    if (languageText) {
        languageText.textContent = translations[lang].language;
    }
    if (currentFlag) {
        // Update the flag image
        currentFlag.src = `assets/img/flag/${lang === 'id' ? 'id' : 'en'}.avif`;
        currentFlag.alt = `${translations[lang].language} Flag`;
    }

    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

function initLanguage() {
    // Check if there's a previously selected language
    const savedLang = localStorage.getItem('selectedLanguage') || 'id';
    translatePage(savedLang);

    // Add event listeners to language switchers
    document.getElementById('lang-en').addEventListener('click', (e) => {
        e.preventDefault();
        translatePage('en');
    });
    document.getElementById('lang-id').addEventListener('click', (e) => {
        e.preventDefault();
        translatePage('id');
    });
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initLanguage);