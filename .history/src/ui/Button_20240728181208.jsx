import { Link } from "react-router-dom";
function Button({ children, disabled, to , type}) {
    
    const base = "bg-yellow-400 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-yellow-300 focus:bg-yellow-300 duration-300 transition-colors uppercase font-semibold   text-stone-800 inline-block  tracking-wide rounded-full hover:bg-yellow-300 disabled:cursor-not-allowed "
    const styles = {
        primary: base + "py-3 px-4 md:px-6 md:py-4",
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