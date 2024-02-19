
function LoginPage() {
  return (
    <div className='pt-20'>
        <div className='flex justify-center'>
            <form className='flex flex-col gap-5 max-w-lg w-full'>
                <input type="text" placeholder='Enter your username' className='bg-bg text-text placeholder:text-text placeholder:text-opacity-50 outline-none border border-text py-2 px-4'/>
                <input type="password" placeholder='Enter your password' className='bg-bg text-text placeholder:text-text placeholder:text-opacity-50 outline-none border border-text py-2 px-4'/>
                <input type="submit" value="Log in" className='bg-secondary bg-opacity-80 border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4' />
            </form>
        </div>
        <p className='text-center py-3'>or</p>
        <div className='flex justify-center'>
            <button className='max-w-lg w-full bg-secondary bg-opacity-80 border border-text border-opacity-0 hover:bg-opacity-0 hover:border-opacity-100 py-2 px-4'>Sign in with Google</button>
        </div>
    </div>
  )
}

export default LoginPage;