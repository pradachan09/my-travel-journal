export default function Card(props){
    const gps = "https://www.pngall.com/wp-content/uploads/2018/04/GPS-PNG-Clipart.png"
    return(
        <div>
        <section className="section">
            <div id="image">
                <img src={props.imageUrl} />
            </div>
            <div className='info'>
                <div className="info-top-bar">
                    <span> <img src={gps} className="gps"/> </span> {props.location} <a href={props.googleMapsUrl}>View on Google Maps</a> 
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div> 
        </section>
        <hr/>
        </div>
    )
        
}