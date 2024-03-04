import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import NotFoundPage from "../pages/NotFoundPage";
const Contacts = () => {
  const currentUser = AuthService.getCurrentUser(); // Replace UserContext with your actual context
  // Check if the user is null or not an admin
  if (!currentUser || !currentUser.roles.includes('ROLE_ADMIN')) {
    // Display a 404 Not Found page or a message
    return <NotFoundPage />; // Replace NotFoundPage with your actual error page component
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-200"> 
    <div className="flex flex-col items-center justify-center h-screen">
    <div>
      <header className="jumbotron text-center bg-gradient-to-b from-red-100 to-blue-200 shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Dashboard</h3>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
            <Link
              to="/admin/patients"
              className="btn btn-primary block w-full text-center py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold"
            >
              <img
                src="https://i.ibb.co/bvDfhdc/pngwing-com-1.png"
                alt="Patients"
                className="h-8 w-8 mb-2 mx-auto"
              />
              Patients
              <p className="text-sm text-gray-600">Manage your Patients</p>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
            <Link
              to="/admin/services"
              className="btn btn-primary block w-full text-center py-3 rounded-lg bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white font-semibold"
            >
              <img
                src="https://i.ibb.co/bKjvw9f/pngwing-com-2.png"
                alt="Services"
                className="h-8 w-8 mb-2 mx-auto"
              />
              Services
              <p className="text-sm text-gray-600">Take care of patients</p>
            </Link>
          </div>
         
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
            <Link
              to="/admin/contacts"
              className="btn btn-primary block w-full text-center py-3 rounded-lg bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold"
            >
              <img
                src="https://i.ibb.co/nr016c5/pngwing-com.png"
                alt="Contacts"
                className="h-8 w-8 mb-2 mx-auto"
              />
              Contacts
              <p className="text-sm text-gray-600">Contact management</p>
            </Link>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
            
          </div>
        </div>
      </header>
    </div>
  </div></div>
   
  );
};

export default Contacts;
