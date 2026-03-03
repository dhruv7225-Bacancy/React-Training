
function Card({username,txtContent}:{username:string,txtContent:string}){

    return (
        <div className="p-4 border-2 max-w-70 mt-5">
            <h2 className="mt-50">{username}</h2>
            <p className="mt-10 wrap-break-word">{txtContent}</p>
        </div>
    )
}

export default Card