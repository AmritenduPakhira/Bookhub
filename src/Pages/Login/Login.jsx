import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';



function Login({onLogin}) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username,password);
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-green-400">
      <div className="m-auto w-96 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center mr-2">
            <img
              src="facebook-logo.png"
              alt="Facebook Logo"
              className="w-4 h-4"
            />
          </div>
          <div className="w-8 h-8 bg-red-500 rounded-full flex justify-center items-center">
            <img src="google-logo.png" alt="Google Logo" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
