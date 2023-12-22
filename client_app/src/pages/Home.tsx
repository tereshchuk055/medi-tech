export const Home = () => {
    return (
        <>
            <section className="bg-cover bg-center bg-gray-200 py-16 " style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/abstract-medical-background-with-health-icons-and-symbols-template-design-with-concept-and-idea-for-healthcare-technology-innovation-medicine-health-science-and-research_181182-15870.jpg")' }}>
                <div className="container mx-auto text-center text-gray-800">
                    <h1 className="text-4xl font-bold mb-4 leading-tight">Revolutionizing Healthcare Through Innovation</h1>
                    <p className="text-lg leading-loose mb-8">Discover a new era of health management with our advanced health app. Empowering you to take control of your well-being.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                        <div className="p-6 bg-sky-100 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">Comprehensive Health Tracking</h2>
                            <p className="text-gray-600">Gain insights into your health with detailed tracking and analysis of your vital indicators.</p>
                        </div>
                        <div className="p-6 bg-sky-50 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">Personalized Health Advice</h2>
                            <p className="text-gray-600">Receive tailored advice based on your unique health status and goals.</p>
                        </div>
                        <div className="p-6 bg-sky-100 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold mb-2">Stay Informed</h2>
                            <p className="text-gray-600">Keep up with the latest developments in healthcare, technology, and medical research.</p>
                        </div>
                    </div>


                    <a href="/appointment" className="bg-blue-500 text-white px-8 py-3 rounded-full mt-12 hover:bg-blue-700 transition duration-300">Записатись до лікаря</a>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Our Company</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="md:order-2">
                            <img src="https://inventure.com.ua/img/thumb.990.660/upload/pic2015/Medicine.jpg" alt="Company Image" className="rounded-lg shadow-lg" />
                        </div>

                        <div className="md:order-1">
                            <h3 className="text-xl font-semibold text-sky-500 mb-4">Our Mission</h3>
                            <p className="text-gray-600">At Health App, our mission is to empower individuals to take control of their health and well-being through innovative and user-friendly solutions.</p>

                            <h3 className="text-xl font-semibold text-sky-500 mb-4 mt-8">Our Values</h3>
                            <p className="text-gray-600">We are committed to transparency, user-centric design, and continuous improvement in the pursuit of delivering the highest quality healthcare experience.</p>

                            <h3 className="text-xl font-semibold text-sky-500 mb-4 mt-8">Meet Our Team</h3>
                            <p className="text-gray-600">Our dedicated team of professionals includes experts in healthcare, technology, and design, all working together to create a positive impact on people's lives.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-gray-300 py-16 overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience Health Like Never Before</h2>
                    <p className="text-lg text-gray-600 mb-8">Our app provides a seamless experience that puts your well-being at the forefront.</p>
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="parallax-image bg-cover bg-center h-full" style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/abstract-medical-background-with-health-icons-and-symbols-template-design-with-concept-and-idea-for-healthcare-technology-innovation-medicine-health-science-and-research_181182-15870.jpg")' }}></div>
                </div>
            </section>


            <section className="bg-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">User Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="p-6 bg-sky-50 rounded-lg shadow-md">
                            <img src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="User 1" className="w-16 h-16 rounded-full mb-4 mx-auto" />
                            <p className="text-gray-600">"Since using the app, I find it easier to track my health and take actions for improvement."</p>
                            <p className="text-blue-500 font-semibold mt-2">- John, 32 years old</p>
                        </div>

                        <div className="p-6 bg-sky-50 rounded-lg shadow-md">
                            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photo.png" alt="User 2" className="w-16 h-16 rounded-full mb-4 mx-auto" />
                            <p className="text-gray-600">"Thanks to the app for providing steady support and inspiration for a healthy lifestyle."</p>
                            <p className="text-blue-500 font-semibold mt-2">- Olivia, 28 years old</p>
                        </div>

                        <div className="p-6 bg-sky-50 rounded-lg shadow-md">
                            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Free-Image.png" alt="User 3" className="w-16 h-16 rounded-full mb-4 mx-auto" />
                            <p className="text-gray-600">"This app made my journey to health enjoyable and accessible."</p>
                            <p className="text-blue-500 font-semibold mt-2">- Michael, 45 years old</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}