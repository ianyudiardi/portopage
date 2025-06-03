export default function Button(children){
     return (
        <button className={`${className} ${baseStyle} ${variants[type]}`} onClick={onClick} >
            {children}
        </button>
     );
}