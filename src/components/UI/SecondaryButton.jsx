export const SecondaryButton = ({children, ...props}) => {
    return (
        <button className="secondary__button" {...props}>
            {children}
        </button>
    )
}