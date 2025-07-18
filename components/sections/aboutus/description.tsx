import { Button } from '@/components/ui/button';  // Assuming you're using shadcn/ui or similar

export default function Description() {
    return (
        <section className="px-8 py-10 bg-gray-50">
            <div className="max-w-6xl p-10 mx-auto">
                <h2 className="text-3xl font-bold text-blue-600 mb-6 max-w-lg">
                    Lorem Ipsum is simply dummy text of the printing.
                </h2>
                <p className="text-gray-600 max-w-3xl leading-relaxed mb-12">
                    KIDER TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
                    applications and website builders specializing diverse of
                    completed projects. We build and develop mobile applications for
                    several top platforms, including Android, & IOS. We build best
                    desktop mobile, applications for several top platforms, including
                    Android & IOS.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                <div className="flex-1 py-10 px-10 max-w-2xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
                        Lorem Ipsum is simply dummy text of the printing.
                    </h3>
                    <br/>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        KIDER TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                        web applications and website builders specializing diverse of
                        completed projects.
                    </p>
                    <Button className="bg-transparent hover:bg-blue-700 text-blue-700 border-1 border-blue-700 px-8 py-3 rounded-md">
                        Contact us
                    </Button>
                </div>

                <div className="flex-1 max-w-3xl p-20 shadow-[-10px_-10px_10px_-5px_rgba(0,0,0,0.1),_-10px_10px_10px_-5px_rgba(0,0,0,0.1)]">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="8" />
                                    <path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h3v3h-3z" />
                                </svg>
                            </div>
                            <h4 className="text-gray-900">Web Applications</h4>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
                                </svg>
                            </div>
                            <h4 className="text-gray-900">SEO</h4>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    <text x="12" y="13" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="normal">&lt;/&gt;</text>
                                </svg>
                            </div>
                            <h4 className="text-gray-900 whitespace-nowrap">Mobile Applications</h4>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    {/* Cloud */}
                                    <path d="M4 14a3 3 0 003 3h10a4 4 0 000-8A5 5 0 007 8a3 3 0 00-3 6z" />
                                    {/* PC */}
                                    <rect x="8" y="18" width="3" height="2" />
                                    {/* CPU */}
                                    <rect x="14" y="18" width="3" height="2" />
                                    {/* Connection lines */}
                                    <line x1="9.5" y1="17" x2="9.5" y2="18" />
                                    <line x1="15.5" y1="17" x2="15.5" y2="18" />
                                </svg>
                            </div>
                            <h4 className="text-gray-900">AR/VR</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}