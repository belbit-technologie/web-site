import React from 'react';


const Hero = () => {
    return (
        <div className="pt-1">
            
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 h-screen flex items-center justify-center">
                
                
                <div className="absolute top-0 mt-8 px-6 py-2 bg-gray-800 bg-opacity-70 rounded-full text-gray-200 text-sm">
                    Announcing our next way of learning to drive. <a href="#" className="underline text-white">Read more →</a>
                </div>

               
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                       Book Your First Lesson 
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl max-w-md mx-auto">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>

                    
                    <div className="mt-8 space-x-4">
                        <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg text-sm font-medium shadow-md">
                            Download App
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
