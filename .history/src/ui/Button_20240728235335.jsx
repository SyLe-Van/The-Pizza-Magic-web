import { Link } from "react-router-dom";
function Button({ children, disabled, to, onClick , type}) {
    
    const base = "bg-yellow-400 text-sm focus:outline-none focus:ring-offset-2 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 duration-300 transition-colors uppercase font-semibold   text-stone-800 inline-block  tracking-wide rounded-full hover:bg-yellow-300 disabled:cursor-not-allowed "
    const styles = {
        secondary: "focus:outline-none text-sm hover:text-stone-800 border-2 py-2.5 px-4 md:px-6 md:py-3.5 border-stone-300 focus:ring-offset-2 focus:ring focus:ring-stone-200 focus:bg-stone-300 duration-300 transition-colors uppercase font-semibold   text-stone-400 inline-block  tracking-wide rounded-full hover:bg-stone-300 disabled:cursor-not-allowed ",
        primary: base + "py-3 px-4  md:px-6 md:py-4",
        small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs"
    }
    if (to) { 
        return <Link className={styles[type]} to={to}>{children}</Link>
    }
    return <button disabled={disabled} className={styles[type]}>
      {children}
  </button>
}
export default Button;