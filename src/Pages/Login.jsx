import React, {useState} from 'react'
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

const Login = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setemailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        
        

        // Si no hay error ni de email ni de password. 
        if (!emailError && !passwordError) {
            setisLoading(true)

            setTimeout(() => {
                setisLoading(true)
                alert(isLogin ? 'Inicio de sesion exitoso' : 'Registro exitoso')
            }, 2000);
        }
    }

    const handleEmailChange = (e) => {
        
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        
        
        setPassword(e.target.value)
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to bg-purple-600 p-4'>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"> 
            
            <h2 className='text-3l font-bold text-center mb-6'>
                {isLogin  ? "Iniciar Sesion" : "Registrarse"}
            </h2>

            <form onSubmit={handleSubmit} className='space-y-4'> 
{/* Email */}
                <div> 
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'> 
                        Correo Electrónico
                    </label>

                    <input                     
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className={`mt-1 block w-full px-3 py-2 border ${emailError ? "border-red-500" : "border-gray-300"}`}
                        placeholder='Introduce tu email'
                        autoComplete='email'
                    />

                    {emailError && (
                        <p className='mt-2 text-sm text-red-600' id="email-error">
                            {emailError}
                        </p>
                    )}
                </div>
{/* Password */}
                
                    
                    <label htmlFor="password" className='block text-sm font-medium text-gray-700'> 
                        Password
                    </label>

                    <div className="mt-1 relative rounded-md shadow-s">

                    <input 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"    
                        value={password}
                        onChange={handlePasswordChange}
                        className={`mt-1 block w-full px-3 py-2 border ${
                            emailError ? "border-red-500" : "border-gray-300"
                          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        
                        required
                        placeholder='**********'
                        autoComplete='current-password'
                    />
                    <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400" />
                    ) : (
                    <FaEye className="h-5 w-5 text-gray-400" />
                    )}
                    </button>           
            </div>   
{/* passwordError */}
            {passwordError && (
                <p  className='mt-2 text-sm text-red-600' id > {passwordError} </p>
            )}
{/* Button submit */}
            <div>
                <button
                    type='submit'
                    className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700
                        ${isLoading} ? "opacity-75 cursor-not-allowed" : ""`
                    }
                >
                {isLogin ? "Inicial Sesion" : "Registrarse"}    
                </button>
            </div>
            </form>

{/* Enlace registro */ }
        <div className='mt-6 text-center'>
            <button
                
                onClick={() => setIsLogin(!isLogin)}
                className='text-sm text-blue-600 hover:text-blue-500'
            >
                {isLogin 
                    ? "¿No tienes cuenta? Regístrate"
                    : "Ya tienes cuenta? Iniciar sesión"

               }           
            </button>
        </div>


        
        </div>
    </div>
  )
}

export default Login

