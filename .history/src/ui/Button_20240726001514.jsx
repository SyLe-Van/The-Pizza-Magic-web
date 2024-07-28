function Button({ children, disabled }) {
    return <button disabled={disabled} className="bg-yellow-400
                            focus:outline-none
                            focus:ring-offset-2
                            focus:ring
                            focus:ring-yellow-300
                            focus:bg-yellow-300
                            duration-300
                            transition-colors
                            uppercase
                            font-semibold
                            text-stone-800
                            py-3 px-4
                            inline-block
                            tracking-wide
                            rounded-full
                            hover:bg-yellow-300
                            sm:px-6 
                        sm:py-4
                            disabled:cursor-not-allowed">
      {children}
  </button>
}
export default Button;