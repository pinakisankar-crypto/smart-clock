import {useState} from 'react'
import { CiLight , CiDark  } from "react-icons/ci";

const Header = () => {

  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () =>{
    setIsDark(!isDark)
  }

  return (
    <header className='fixed top-0 w-full py-3 px-8 flex-between bg-[var(--header-color)]'>
      <h2 className='head-text text-white text-xl'>wakemate</h2>

      {/* haven't implemented it (Optional) */}
      {/* <nav>
        <p onClick={toggleTheme} className='text-white text-2xl cursor-pointer'>{isDark ? <CiLight/> : <CiDark/>}</p>
      </nav> */}
    </header>
  )
}

export default Header
