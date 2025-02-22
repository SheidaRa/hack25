// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const FakeCover = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [code, setCode] = useState("");
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     setShowLogin(true);
//     setError(false);
//   };

//   const handleCodeSubmit = () => {
//     if (code === "1234") {
//       navigate("/dashboard");
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div className="h-screen bg-gray-100 p-5">
//       <h1 className="text-2xl font-bold text-center mb-4">Trendy Fashion</h1>
//       <div className="grid grid-cols-2 gap-4">
//         {[1, 2, 3, 4, 5, 6].map((item) => (
//           <div key={item} className="bg-white p-3 shadow rounded-lg">
//             <img
//               src={`https://source.unsplash.com/100x100/?clothing&sig=${item}`}
//               alt="Clothing Item"
//               className="w-full rounded"
//             />
//             <p className="mt-2 font-semibold">Stylish Outfit {item}</p>
//             <p className="text-gray-500">$19.99</p>
//           </div>
//         ))}
//       </div>
      
//       {/* Login Button */}
//       <button
//         className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg"
//         onClick={handleLoginClick}
//       >
//         Login
//       </button>
      
//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-5 rounded-lg shadow-lg w-80 text-center">
//             <h2 className="text-xl font-bold mb-3">Enter Code</h2>
//             <input
//               type="password"
//               className="border p-2 w-full mb-3"
//               placeholder="Enter Code"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />
//             {error && <p className="text-red-500">Incorrect Code!</p>}
//             <button
//               className="bg-blue-600 text-white py-2 w-full rounded-lg"
//               onClick={handleCodeSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FakeCover;














import React from 'react'
import Product from '../Product'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img1.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/img2.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/img3.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/img4.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Product/>
                    </div>
                    )
}

                    export default Home