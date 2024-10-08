import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faO } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';



const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Form Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
        
        {/* Login Form */}
        <form>
         {/* name input */}
         <div>
          <label htmlFor=""> First Name</label>
          <input type="first-name"
          id="name"
          placeholder="Enter your First Name" />
          
          <label htmlFor=""> Last Name</label>
          <input type="first-name"
          id="name"
          placeholder="Enter your First Name" />

         </div>



          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-orange-600'/>
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" required 
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            <FontAwesomeIcon icon={faLock} className='text-orange-600 mr-2'/>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500" required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>

            <a href="#" className="text-sm text-orange-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-black-600 focus:outline-none focus:bg-black-600"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center justify-between">
          <span className="border-b border-gray-300 w-full"></span>
          <span className="text-sm text-gray-500 px-4">OR</span>
          <span className="border-b border-gray-300 w-full"></span>
        </div>

        {/* Social Login Buttons */}
        <div>
          <button
            type="button"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-900 mb-4"
          >
            Sign in with Google
          </button>

          
        </div>

        {/* Sign-up Link */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-orange-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


