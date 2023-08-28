import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'NORMAL' | 'FILLED' | 'OUTLINED'
}

const OkButton = ({ className, children, variant = 'NORMAL',  ...props }: ButtonProps)  => {
    return <button {...props} className={clsx(
        className,
        "rounded relative inline-flex group items-center justify-center cursor-pointer overflow-hidden px-6 py-2",
        variant === 'NORMAL' && 'border-rose-600 border border-solid bg-white text-rose-800',
        variant === 'FILLED' && 'bg-rose-600 text-white'
    )}>
        <span className={clsx(
            "absolute w-0 h-0 transition-all duration-300 ease-out  rounded-full group-hover:w-48 group-hover:h-48 group-active:w-48 group-active:h-48 ",
            variant === 'NORMAL' && 'bg-black opacity-10',
            variant === 'FILLED' && 'bg-white opacity-20'
        )}></span>
        <span className="relative">
            {children}
        </span>
    </button>
}

export default OkButton


