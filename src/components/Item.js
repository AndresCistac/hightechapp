
export default function Item(props){
    return(
        <>
        <h1>{props.item.title}</h1>
        <img src={`${props.item.pictureUrl}`}/>
        </>
    )
    
}
