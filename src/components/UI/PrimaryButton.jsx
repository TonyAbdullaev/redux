export const PrimaryButton = ({children, ...props}) => {
    return (
        <button className='primary__button' {...props}>
            {children}
        </button>
    )
}