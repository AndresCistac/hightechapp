export default function ItemDetail(props){
    return(
        <>
        <h1>{props.detail.title}</h1>
        <img src={`${props.detail.pictureUrl}`}/>
        <h2>{props.detail.precio}</h2>
        </>
    )
    
}